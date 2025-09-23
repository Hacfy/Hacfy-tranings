"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactSubmission, Registration } from "@/lib/models"

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [contactsRes, registrationsRes] = await Promise.all([
        fetch('/api/admin/contacts'),
        fetch('/api/admin/registrations')
      ])
      
      if (contactsRes.ok) {
        const contactsData = await contactsRes.json()
        setContacts(contactsData)
      }
      
      if (registrationsRes.ok) {
        const registrationsData = await registrationsRes.json()
        setRegistrations(registrationsData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'contacted':
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'resolved':
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage contact submissions and registrations</p>
        </div>

        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">
              Contact Forms ({contacts.length})
            </TabsTrigger>
            <TabsTrigger value="registrations">
              Registrations ({registrations.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            <div className="grid gap-4">
              {contacts.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">No contact submissions yet</p>
                  </CardContent>
                </Card>
              ) : (
                contacts.map((contact) => (
                  <Card key={contact._id?.toString()}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{contact.name}</h3>
                          <p className="text-gray-600">{contact.email}</p>
                          <p className="text-sm text-gray-500">{contact.mobile}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(contact.status)}>
                            {contact.status}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p><strong>Program:</strong> {contact.program}</p>
                        {contact.message && (
                          <p><strong>Message:</strong> {contact.message}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="registrations" className="space-y-4">
            <div className="grid gap-4">
              {registrations.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">No registrations yet</p>
                  </CardContent>
                </Card>
              ) : (
                registrations.map((registration) => (
                  <Card key={registration._id?.toString()}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{registration.fullName}</h3>
                          <p className="text-gray-600">{registration.email}</p>
                          <p className="text-sm text-gray-500">{registration.phone}</p>
                          <p className="text-sm text-blue-600 font-mono">{registration.registrationId}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(registration.status)}>
                            {registration.status}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(registration.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p><strong>Program:</strong> {registration.program}</p>
                        <p><strong>Experience:</strong> {registration.experience}</p>
                        <p><strong>Goals:</strong> {registration.goals}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button onClick={fetchData} variant="outline">
            Refresh Data
          </Button>
        </div>
      </div>
    </div>
  )
}
