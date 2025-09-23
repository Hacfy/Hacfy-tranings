"use client"

import {
  CheckCircle,
  Shield,
  Users,
  Award,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  BookOpen,
  TrendingUp,
} from "lucide-react"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    goals: "",
    agreeTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.program.trim()) newErrors.program = "Training program is required"
    if (!formData.experience.trim()) newErrors.experience = "Experience level is required"
    if (!formData.goals.trim()) newErrors.goals = "Learning goals are required"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          experience: "",
          goals: "",
          agreeTerms: false,
        })
      } else {
        throw new Error(result.error || 'Failed to submit registration')
      }
    } catch (error) {
      console.error("Error submitting registration:", error)
      alert("Failed to submit registration. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl text-center border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-16 pb-16 px-12">
            <div className="relative mb-12">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-100 to-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <div className="absolute -top-4 -right-12 animate-bounce">
                <Sparkles className="w-8 h-8 text-[rgba(218,21,21,0.952)]" />
              </div>
              <div className="absolute -bottom-2 -left-8 animate-pulse">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Welcome to <span className="text-[rgba(218,21,21,0.952)]">HacFy!</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto">
              Your registration has been successfully submitted. Our expert team will contact you within 24 hours with
              program details and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowSuccess(false)}
                className="bg-[rgba(218,21,21,0.952)] hover:bg-[rgba(218,21,21,0.8)] text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Register for Another Program
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-200 hover:border-[rgba(218,21,21,0.952)] text-gray-700 hover:text-[rgba(218,21,21,0.952)] px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="relative py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(218,21,21,0.15) 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[rgba(218,21,21,0.05)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[rgba(218,21,21,0.1)] to-red-50 rounded-full text-[rgba(218,21,21,0.952)] font-bold text-sm mb-8 shadow-sm">
            <Shield className="w-5 h-5 mr-2" />
            Limited Seats Available - Batch Starting Soon
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
            Transform Your
            <span className="block text-[rgba(218,21,21,0.952)] bg-gradient-to-r from-[rgba(218,21,21,0.952)] to-red-600 bg-clip-text text-transparent">
              Cybersecurity Career
            </span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Join thousands of professionals who have advanced their careers with our industry-leading, hands-on
            cybersecurity training programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "5000+ Students Trained", color: "text-blue-600" },
              { icon: Award, label: "Industry Certified Programs", color: "text-green-600" },
              { icon: TrendingUp, label: "95% Job Placement Rate", color: "text-[rgba(218,21,21,0.952)]" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-gray-700">
                <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose HacFy Trainings?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Experience the difference with our industry-leading cybersecurity education platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Expert Instructors",
                description: "Learn from certified professionals with 15+ years of real-world industry experience",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Users,
                title: "Small Batches",
                description: "Maximum 12 students per batch ensuring personalized attention and quality mentorship",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: Award,
                title: "Global Certification",
                description:
                  "Internationally recognized certificates that boost your professional credibility worldwide",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Weekend and evening batches designed specifically for working professionals",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group text-center bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <CardContent className="pt-10 pb-8 px-8">
                  <div
                    className={`w-20 h-20 mx-auto ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Secure Your Future Today</h2>
            <p className="text-2xl text-gray-600 font-medium">
              Join the next generation of cybersecurity professionals
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-[rgba(218,21,21,0.952)] to-red-600 p-8 text-center">
              <CardTitle className="text-4xl font-bold text-white mb-3">Training Registration</CardTitle>
              <CardDescription className="text-xl text-red-50">
                Take the first step towards your cybersecurity career transformation
              </CardDescription>
            </div>
            <CardContent className="px-12 py-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label htmlFor="fullName" className="text-lg font-bold text-gray-900 flex items-center">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className={`h-14 text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white ${
                        errors.fullName ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm font-semibold">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email" className="text-lg font-bold text-gray-900">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className={`h-14 text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label htmlFor="phone" className="text-lg font-bold text-gray-900">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className={`h-14 text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm font-semibold">{errors.phone}</p>}
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="program" className="text-lg font-bold text-gray-900">
                      Training Program *
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, program: value }))}
                    >
                      <SelectTrigger
                        className={`h-14 text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white ${
                          errors.program ? "border-red-500" : "border-gray-200"
                        }`}
                      >
                        <SelectValue placeholder="Select your preferred training program" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="vapt-workshop" className="text-lg py-3">
                          VAPT Workshop (2 Days)
                        </SelectItem>
                        <SelectItem value="cybersecurity-bootcamp" className="text-lg py-3">
                          Cybersecurity Bootcamp (4 Weeks)
                        </SelectItem>
                        <SelectItem value="ethical-hacking" className="text-lg py-3">
                          Ethical Hacking Course (6 Weeks)
                        </SelectItem>
                        <SelectItem value="security-analyst" className="text-lg py-3">
                          Security Analyst Program (8 Weeks)
                        </SelectItem>
                        <SelectItem value="penetration-testing" className="text-lg py-3">
                          Penetration Testing Mastery (10 Weeks)
                        </SelectItem>
                        <SelectItem value="corporate-training" className="text-lg py-3">
                          Corporate Training (Custom)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.program && <p className="text-red-500 text-sm font-semibold">{errors.program}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="experience" className="text-lg font-bold text-gray-900">
                    Experience Level *
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}
                  >
                    <SelectTrigger
                      className={`h-14 text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white ${
                        errors.experience ? "border-red-500" : "border-gray-200"
                      }`}
                    >
                      <SelectValue placeholder="Select your current experience level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="beginner" className="text-lg py-3">
                        Beginner (No prior experience)
                      </SelectItem>
                      <SelectItem value="intermediate" className="text-lg py-3">
                        Intermediate (1-3 years)
                      </SelectItem>
                      <SelectItem value="advanced" className="text-lg py-3">
                        Advanced (3+ years)
                      </SelectItem>
                      <SelectItem value="expert" className="text-lg py-3">
                        Expert (5+ years)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-red-500 text-sm font-semibold">{errors.experience}</p>}
                </div>

                <div className="space-y-4">
                  <Label htmlFor="goals" className="text-lg font-bold text-gray-900">
                    Learning Goals & Career Objectives *
                  </Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData((prev) => ({ ...prev, goals: e.target.value }))}
                    className={`min-h-[140px] text-lg border-2 focus:border-[rgba(218,21,21,0.952)] focus:ring-4 focus:ring-[rgba(218,21,21,0.1)] transition-all duration-300 rounded-xl bg-gray-50 focus:bg-white resize-none ${
                      errors.goals ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Tell us about your career goals and what you want to achieve from this training program..."
                  />
                  {errors.goals && <p className="text-red-500 text-sm font-semibold">{errors.goals}</p>}
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))}
                    className="mt-1 w-5 h-5"
                  />
                  <div className="space-y-2">
                    <Label htmlFor="agreeTerms" className="text-lg text-gray-700 leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <span className="text-[rgba(218,21,21,0.952)] font-bold hover:underline cursor-pointer">
                        Terms and Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-[rgba(218,21,21,0.952)] font-bold hover:underline cursor-pointer">
                        Privacy Policy
                      </span>
                    </Label>
                    {errors.agreeTerms && <p className="text-red-500 text-sm font-semibold">{errors.agreeTerms}</p>}
                  </div>
                </div>

                <div className="text-center pt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-[rgba(218,21,21,0.952)] to-red-600 hover:from-[rgba(218,21,21,0.8)] hover:to-red-500 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing Registration...</span>
                      </div>
                    ) : (
                      <>
                        <span>Register Now & Start Your Journey</span>
                        <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </Button>
                  <p className="text-gray-500 mt-4 text-sm">Secure registration • No spam • 24/7 support available</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
