import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { Registration } from "@/lib/models"

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

    // Generate unique registration ID
    const registrationId = `REG-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Save to MongoDB database
    try {
      const db = await getDatabase()
      const registrationsCollection = db.collection<Registration>('registrations')
      
      const registration: Registration = {
        fullName,
        email,
        phone,
        program,
        experience,
        goals,
        agreeTerms: body.agreeTerms || false,
        createdAt: new Date(),
        status: 'pending',
        registrationId,
        source: 'registration-form'
      }

      const result = await registrationsCollection.insertOne(registration)
      console.log("Registration saved to database:", result.insertedId)
    } catch (dbError) {
      console.error("Database error:", dbError)
      return NextResponse.json({ error: "Failed to save registration" }, { status: 500 })
    }

    console.log("Registration received:", {
      fullName,
      email,
      phone,
      program,
      experience,
      goals,
      registrationId,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message: "Registration successful",
        registrationId,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
