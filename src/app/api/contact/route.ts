import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

// Simple in-memory rate limiter: max 5 requests per 10 minutes per IP
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodic cleanup
  if (rateLimitMap.size > 1000) {
    for (const [key, entry] of rateLimitMap.entries()) {
      if (entry.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  const current = rateLimitMap.get(ip);
  if (!current || current.resetTime < now) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: Request) {
  try {
    // 1. Check Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse payload safely
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body provided." },
        { status: 400 }
      );
    }

    const { name, email, message, topic, honeypot } = body;

    // 3. Honeypot check (bot prevention)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently accept without sending to avoid educating bots
      return NextResponse.json(
        { success: true, message: "Message sent successfully." },
        { status: 200 }
      );
    }

    // 4. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }
    const cleanName = name.trim();
    if (cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name cannot exceed 100 characters." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim();
    if (cleanEmail.length > 254 || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }
    const cleanMessage = message.trim();
    if (cleanMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message cannot exceed 2000 characters." },
        { status: 400 }
      );
    }

    const cleanTopic = typeof topic === "string" ? topic.trim().slice(0, 50) : undefined;

    // 5. Dispatch email via modular email service
    const sendResult = await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      topic: cleanTopic,
      message: cleanMessage,
    });

    if (!sendResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: sendResult.error || "Failed to send message. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
