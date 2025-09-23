"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Turnstile } from "@marsidev/react-turnstile"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState<string | null>(null)
  const turnstileRef = useRef<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if Turnstile token is present
    if (!turnstileToken) {
      setTurnstileError("Please complete the security verification")
      return
    }
    
    setIsSubmitting(true)
    setTurnstileError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: turnstileToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        // Reset form and Turnstile
        setFormData({ name: "", email: "", mobile: "", program: "", message: "" })
        setTurnstileToken(null)
        if (turnstileRef.current) {
          turnstileRef.current.reset()
        }
        alert("Thank you! Your message has been sent successfully.")
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token)
    setTurnstileError(null)
  }

  const handleTurnstileError = () => {
    setTurnstileToken(null)
    setTurnstileError("Security verification failed. Please try again.")
  }

  const handleTurnstileExpired = () => {
    setTurnstileToken(null)
    setTurnstileError("Security verification expired. Please verify again.")
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto text-balance">
            Ready to start your cybersecurity journey? Contact us today to learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#E5E5E5]">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                    <Phone className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E5E5E5] mb-1">Phone</h4>
                    <p className="text-[#A0A0A0]">+91 8660767853</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[rgba(218,21,21,0.952)]/10 border border-[rgba(218,21,21,0.952)]/20">
                    <Mail className="w-5 h-5 text-[rgba(218,21,21,0.952)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E5E5E5] mb-1">Email</h4>
                    <p className="text-[#A0A0A0]">trainings@hacfy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[#39FF14]/10 border border-[#39FF14]/20">
                    <MapPin className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E5E5E5] mb-1">Address</h4>
                    <p className="text-[#A0A0A0]">
                      Alva's Technology Centre
                      <br />
                      Mijar - Moodabidre 574225
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#E5E5E5] mb-4">Visit Our Website</h4>
              <a
                href="https://hacfy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                www.hacfy.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#1a1f2e]/50 border-[#2a2f3e]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#E5E5E5]">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#E5E5E5]">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="bg-[#0B0F1A] border-[#2a2f3e] text-[#E5E5E5] focus:border-[#00E5FF]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#E5E5E5]">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="bg-[#0B0F1A] border-[#2a2f3e] text-[#E5E5E5] focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-[#E5E5E5]">
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    required
                    className="bg-[#0B0F1A] border-[#2a2f3e] text-[#E5E5E5] focus:border-[#00E5FF]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program" className="text-[#E5E5E5]">
                    Program of Interest
                  </Label>
                  <Select value={formData.program} onValueChange={(value) => handleChange("program", value)}>
                    <SelectTrigger className="bg-[#0B0F1A] border-[#2a2f3e] text-[#E5E5E5] focus:border-[#00E5FF]">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1f2e] border-[#2a2f3e]">
                      <SelectItem value="2-day-workshop">2-Day Workshop</SelectItem>
                      <SelectItem value="3-day-workshop">3-Day Workshop</SelectItem>
                      <SelectItem value="5-day-workshop">5-Day Workshop</SelectItem>
                      <SelectItem value="1-week-bootcamp">1-Week Bootcamp</SelectItem>
                      <SelectItem value="cybersprint">HacFy CyberSprint (45 Days)</SelectItem>
                      <SelectItem value="internship">Internship Program (6 Months)</SelectItem>
                      <SelectItem value="corporate">Corporate Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#E5E5E5]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="bg-[#0B0F1A] border-[#2a2f3e] text-[#E5E5E5] focus:border-[#00E5FF] resize-none"
                    placeholder="Tell us about your cybersecurity goals..."
                  />
                </div>

                {/* Turnstile Security Verification */}
                <div className="space-y-2">
                  <Label className="text-[#E5E5E5]">Security Verification *</Label>
                  <div className="flex justify-center">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                      onSuccess={handleTurnstileSuccess}
                      onError={handleTurnstileError}
                      onExpire={handleTurnstileExpired}
                      options={{
                        theme: 'dark',
                        size: 'normal'
                      }}
                    />
                  </div>
                  {turnstileError && (
                    <p className="text-red-400 text-sm text-center">{turnstileError}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="w-full bg-[rgba(218,21,21,0.952)] hover:bg-[rgba(218,21,21,0.8)] text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
