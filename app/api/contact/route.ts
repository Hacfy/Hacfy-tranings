import { type NextRequest, NextResponse } from "next/server"

// Rate limiting would be implemented here in production
const submissions = new Map()

async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET
  if (!secret) {
    console.warn("TURNSTILE_SECRET not configured")
    return { success: true } // Allow in development
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    })
    return await response.json()
  } catch (error) {
    console.error("Turnstile verification error:", error)
    return { success: false }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, program, message, captchaToken } = await request.json()

    // Basic validation
    if (!name || !email || !mobile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Verify Turnstile token (in production)
    if (process.env.NODE_ENV === "production" && !captchaToken) {
      return NextResponse.json({ error: "Captcha verification required" }, { status: 400 })
    }

    if (captchaToken) {
      const verification = await verifyTurnstile(captchaToken)
      if (!verification.success) {
        return NextResponse.json({ error: "Human verification failed" }, { status: 403 })
      }
    }

    // Rate limiting (basic implementation)
    const clientIP = request.headers.get("x-forwarded-for") || "unknown"
    const now = Date.now()
    const lastSubmission = submissions.get(clientIP)

    if (lastSubmission && now - lastSubmission < 60000) {
      // 1 minute cooldown
      return NextResponse.json({ error: "Please wait before submitting again" }, { status: 429 })
    }

    submissions.set(clientIP, now)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the submission

    console.log("Contact form submission:", { name, email, mobile, program, message })

    return NextResponse.json({ success: true, message: "Thank you for your message!" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
