import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

interface InquiryData {
  name: string;
  email: string;
  company: string;
  phone: string;
  city: string;
  hiringVolume: string;
  serviceType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body: InquiryData = await request.json();

    console.log("[v0] Received inquiry:", JSON.stringify(body, null, 2));
    console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      console.log("[v0] Validation failed - missing fields");
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Mutual Consulting Services
    // Using verified domain: connect.mutualcs.com
    const fromEmail = 'onboarding@connect.mutualcs.com';
    
    console.log("[v0] Sending email from:", fromEmail);
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: 'connect@mutualcs.com',
      replyTo: body.email,
      subject: `New Talent Inquiry from ${body.name} - ${body.company || 'N/A'}${body.city ? ` [${body.city}]` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; margin-bottom: 24px;">New Inquiry Received</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Hiring Details</h3>
            <p><strong>Location:</strong> ${body.city || 'Not specified'}</p>
            <p><strong>Hiring Volume:</strong> ${body.hiringVolume}</p>
            <p><strong>Service Type:</strong> ${body.serviceType}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; color: #555;">${body.message || 'N/A'}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="color: #888; font-size: 12px;">
            This inquiry was submitted via the Mutual Consulting Services website on ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
    });
    
    console.log("[v0] Main email response - data:", data, "error:", error);
    
    if (error) {
      console.error("[v0] Resend error:", error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const confirmationResult = await resend.emails.send({
      from: fromEmail,
      to: body.email,
      subject: 'We Received Your Inquiry - Mutual Consulting Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; margin-bottom: 24px;">Thank You, ${body.name}!</h2>
          
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            We have received your inquiry and appreciate your interest in Mutual Consulting Services.
          </p>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Our team will review your requirements and get back to you within 4 business hours with a tailored plan.
          </p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666;">
              <strong>Your Inquiry Reference:</strong><br />
              ${new Date().getTime()}
            </p>
          </div>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to reach out to us directly:
          </p>

          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            📞 <strong>+91 7042477535</strong><br />
            📧 <strong>connect@mutualcs.com</strong>
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
          
          <p style="color: #888; font-size: 12px; text-align: center;">
            © 2026 Mutual Consulting Services. All rights reserved.
          </p>
        </div>
      `,
    });
    
    console.log("[v0] Confirmation email result:", confirmationResult);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inquiry submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry' },
      { status: 500 }
    );
  }
}
