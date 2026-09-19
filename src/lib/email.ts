export interface EmailPayload {
  name: string;
  email: string;
  topic?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
  devMode?: boolean;
}

/**
 * Modular email dispatch service.
 * Uses Resend API via native fetch if configured, or clean dev-mode logging if no API key is set.
 * Always sets the visitor's email as the Reply-To header so replies go directly to the visitor.
 */
export async function sendContactEmail(payload: EmailPayload): Promise<SendEmailResult> {
  const { name, email, topic, message } = payload;

  const toEmail = process.env.CONTACT_EMAIL || "jyotirmaya.behera@example.com";
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const apiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;

  const subject = `New Portfolio Message — ${name}`;
  const topicText = topic ? topic.trim() : "General";

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topicText}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111;">
      <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; border-bottom: 1px solid #e5e5e3; padding-bottom: 8px;">
        New Portfolio Message
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px 0; color: #666; width: 80px;"><strong>Name:</strong></td>
          <td style="padding: 6px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #666;"><strong>Email:</strong></td>
          <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #666;"><strong>Topic:</strong></td>
          <td style="padding: 6px 0;">${escapeHtml(topicText)}</td>
        </tr>
      </table>
      <div style="background-color: #f9f9f7; border: 1px solid #e5e5e3; border-radius: 6px; padding: 16px; white-space: pre-wrap; line-height: 1.6; font-size: 14px;">
${escapeHtml(message)}
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #888;">
        Sent via Portfolio "Let's Talk" contact form. Reply directly to this email to respond to ${escapeHtml(name)}.
      </p>
    </div>
  `.trim();

  // If no email API key is configured (e.g. initial setup / local development),
  // simulate successful delivery and log to server console for testing.
  if (!apiKey) {
    console.info("\n[Contact Form — Dev Mode]");
    console.info(`To: ${toEmail}`);
    console.info(`From: ${fromEmail}`);
    console.info(`Reply-To: ${email}`);
    console.info(`Subject: ${subject}`);
    console.info(`Topic: ${topicText}`);
    console.info(`Message: ${message}\n`);
    return { success: true, devMode: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error("Email service error:", res.status, errData);
      return {
        success: false,
        error: "Failed to deliver email through email service.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("Email dispatch network error:", err);
    return {
      success: false,
      error: "Network error communicating with email service.",
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
