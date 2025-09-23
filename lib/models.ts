import { ObjectId } from 'mongodb'

export interface ContactSubmission {
  _id?: ObjectId
  name: string
  email: string
  mobile: string
  program: string
  message?: string
  createdAt: Date
  status: 'new' | 'contacted' | 'resolved'
  source: 'contact-form'
}

export interface Registration {
  _id?: ObjectId
  fullName: string
  email: string
  phone: string
  program: string
  experience: string
  goals: string
  agreeTerms: boolean
  createdAt: Date
  status: 'pending' | 'confirmed' | 'rejected'
  registrationId: string
  source: 'registration-form'
}

export interface DatabaseCollections {
  contacts: ContactSubmission[]
  registrations: Registration[]
}
