import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface GuideRequest {
  name: string;
  email: string;
  company: string;
  roleType: string;
}

const GUIDE_URL = 'https://mutualcs.com/resources/gcc-salary-benchmarks-india-2026';

export async function POST(request: NextRequest) {
  try {
    // Validate before constructing the client, so a bad payload returns 400
    // rather than a 500 from the Resend constructor.
    const body: GuideRequest = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[send-guide] RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Verified sending domain, same as the enquiry route.
    const fromEmail = 'onboarding@connect.mutualcs.com';

    // 1. Notify the MutualCS team so the lead is captured.
    const { error: notifyError } = await resend.emails.send({
      from: fromEmail,
      to: 'connect@mutualcs.com',
      replyTo: body.email,
      subject: `Salary Guide download: ${body.name}${body.company ? ` - ${body.company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; margin-bottom: 8px;">Salary Guide Download</h2>
          <p style="color: #888; font-size: 13px; margin-top: 0;">
            This lead requested the GCC Salary Guide. They have not booked a hiring audit.
          </p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
            <p><strong>Hiring for:</strong> ${body.roleType || 'Not specified'}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">
            Submitted via the salary guide page on ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
    });

    if (notifyError) {
      console.error('[send-guide] Resend notify error:', notifyError);
      return NextResponse.json(
        { error: 'Failed to send', details: notifyError },
        { status: 500 }
      );
    }

    // 2. Send the requester the guide link.
    await resend.emails.send({
      from: fromEmail,
      to: body.email,
      replyTo: 'connect@mutualcs.com',
      subject: 'Your GCC Salary Benchmarks, India 2026',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; margin-bottom: 24px;">Here it is, ${body.name}.</h2>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Thanks for your interest. You can read the full GCC salary benchmarks for India 2026 here:
          </p>

          <p style="margin: 28px 0;">
            <a href="${GUIDE_URL}"
               style="background-color: #1a1a1a; color: #ffffff; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-weight: 600; display: inline-block;">
              Open the Salary Benchmarks
            </a>
          </p>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            It covers AI/ML, Cloud, Platform Engineering, and Cybersecurity compensation by city
            and experience band, plus notice period norms and how GCC packages compare to product
            companies and IT services firms.
          </p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 28px 0;">
            <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6;">
              <strong>Setting bands for a live role?</strong><br />
              If you tell us the role and level, we will send you the current market range for it
              and what it is realistically taking to close that hire right now.
            </p>
            <p style="margin: 16px 0 0;">
              <a href="https://mutualcs.com/#contact" style="color: #1a1a1a; font-weight: 600;">
                Talk to our team &rarr;
              </a>
            </p>
          </div>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Reply to this email if you want anything specific and it will reach us directly.
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          <p style="color: #888; font-size: 12px;">
            MutualCS, Bengaluru, India<br />
            connect@mutualcs.com | +91 7042477535
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('[send-guide] Error:', error);
    return NextResponse.json(
      { error: 'Failed to send guide' },
      { status: 500 }
    );
  }
}
