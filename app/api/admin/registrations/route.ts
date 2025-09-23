import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { Registration } from "@/lib/models"

export async function GET() {
  try {
    const db = await getDatabase()
    const registrationsCollection = db.collection<Registration>('registrations')
    
    const registrations = await registrationsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(registrations)
  } catch (error) {
    console.error("Error fetching registrations:", error)
    return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 })
  }
}
