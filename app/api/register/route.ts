import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, program, experience, goals } = body

    // Basic validation
    if (!fullName || !email || !phone || !program || !experience || !goals) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin team

    console.log("Registration received:", {
      fullName,
      email,
      phone,
      program,
      experience,
      goals,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message: "Registration successful",
        registrationId: `REG-${Date.now()}`,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
