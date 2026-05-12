import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limit: max 3 submissions per IP per hour
const rateLimitMap = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, honeypot } = body;

  // Honeypot: bots fill this hidden field, humans don't
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    await resend.emails.send({
      // Change to a verified sender once deportivolatinoberlin.com is added in Resend
      from: "Club Deportivo Latino <onboarding@resend.dev>",
      to: "info@deportivolatinoberlin.com",
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2 style="color:#1e40af">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
