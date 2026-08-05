import type { MetadataRoute } from "next";

// Named AI crawlers. Explicitly allowing them is a positive signal and guards
// against future default-deny behaviour from bot-protection layers.
const AI_CRAWLERS = [
  "GPTBot",           // OpenAI training
  "OAI-SearchBot",    // ChatGPT search
  "ChatGPT-User",     // ChatGPT browsing / plugins
  "ClaudeBot",        // Anthropic
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",    // Perplexity index
  "Perplexity-User",  // Perplexity live fetch
  "Google-Extended",  // Gemini / AI Overviews
  "Applebot-Extended",// Apple Intelligence
  "meta-externalagent", // Meta AI
  "Bytespider",       // TikTok / Doubao
  "Amazonbot",        // Alexa / Rufus
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/?q=", "/_next/"],
      },
      // Give AI crawlers full access to content, including llms.txt.
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/_next/"],
      })),
    ],
    sitemap: "https://mutualcs.com/sitemap.xml",
    host: "https://mutualcs.com",
  };
}
