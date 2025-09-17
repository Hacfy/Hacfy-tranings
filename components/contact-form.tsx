"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would integrate with Turnstile verification
    // const turnstileToken = document.querySelector('.cf-turnstile-response')?.value

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({ name: "", email: "", mobile: "", program: "", message: "" })
      alert("Thank you! Your message has been sent successfully.")
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

                {/* Turnstile widget would go here */}
                <div className="p-4 bg-[#0B0F1A] border border-[#2a2f3e] rounded-lg text-center text-sm text-[#A0A0A0]">
                   Turnstile verification will be integrated here for security
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgba(218,21,21,0.952)] hover:bg-[rgba(218,21,21,0.8)] text-white font-semibold py-3"
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
