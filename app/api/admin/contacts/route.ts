import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { ContactSubmission } from "@/lib/models"

export async function GET() {
  try {
    const db = await getDatabase()
    const contactsCollection = db.collection<ContactSubmission>('contacts')
    
    const contacts = await contactsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
