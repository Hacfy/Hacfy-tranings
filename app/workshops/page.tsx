"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  Shield, 
  Target, 
  BookOpen, 
  Laptop,
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Download,
  PlayCircle
} from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">
              Join Our Hands on <span className="text-red-600">Workshops</span> 
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto text-balance leading-relaxed">
                Learn by doing through interactive workshops designed to build real skills. 
              Guided by experts, you’ll tackle practical challenges, collaborate with peers, 
              and gain knowledge you can immediately apply in real-world scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Programs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Fast Learning for Beginners & Professionals</h2>
            <p className="text-lg text-gray-600">Choose the workshop that matches your skill level and career goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 2-Day Workshop */}
            <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Beginner
                  </Badge>
                </div>

                <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                  2-Day Workshop
                </CardTitle>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2 Days
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    20-30
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Ethical Hacking fundamentals
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Linux & Kali Lab setup
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Reconnaissance & vulnerability scanning
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Basic web attacks (SQL Injection, XSS)
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Password cracking, social engineering
                  </li>
                </ul>

              </CardContent>
            </Card>

            {/* 3-Day Workshop */}
            <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Intermediate
                  </Badge>
                </div>

                <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                  3-Day Workshop
                </CardTitle>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    3 Days
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    15-25
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    OWASP Top 10 deep dive
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Reconnaissance, scanning & automation
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Directory brute-forcing (Gobuster)
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Burp Suite basics for web app testing
                  </li>
                </ul>

              </CardContent>
            </Card>

            {/* 5-Day Workshop */}
            <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full">

              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    Advanced
                  </Badge>
                </div>

                <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                  5-Day Workshop
                </CardTitle>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 Days
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    10-20
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow">
                <ul className="space-y-2 mb-6 flex-grow">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Advanced web pentesting & exploit development
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Privilege escalation & bug bounty basics
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Real-time attack simulations
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    SOC overview & Incident response
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                    Capture The Flag (CTF) challenge
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Completion & Experience Letter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  Industry-Recognized Credentials
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Earn certificates respected by top cybersecurity companies and trusted across the industry.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex-shrink-0">
                    <Laptop className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Work on Industry-Simulated Lab Projects
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gain hands-on experience by working on lab-based cybersecurity projects that mirror real-world industry scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Industry-Recognized Certification
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Earn a certificate respected by top cybersecurity companies and trusted across the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Diverse Project Exposure
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get the opportunity to work across various domains and project types to enhance your skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="font-semibold bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  View Sample Certificate
                </Button>
                <Button variant="outline" className="font-semibold border-gray-300 text-gray-700 px-8 py-3">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/cert.png"
                  alt="Sample Experience Letter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">100% Completion Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Training Events Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Past Training Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our successful training programs and see the impact we've made in the cybersecurity community.
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    title: "Cybersecurity Fundamentals Workshop",
                    date: "March 2024",
                    location: "Bangalore",
                    participants: 45,
                    rating: 4.9,
                    image: "/training.png",
                    highlights: ["Ethical Hacking Basics", "Network Security", "Hands-on Labs"]
                  },
                  {
                    title: "Advanced Penetration Testing",
                    date: "April 2024",
                    location: "Mumbai",
                    participants: 32,
                    rating: 4.8,
                    image: "/training.png",
                    highlights: ["Web App Testing", "Exploit Development", "CTF Challenges"]
                  },
                  {
                    title: "SOC Analyst Training",
                    date: "May 2024",
                    location: "Delhi",
                    participants: 28,
                    rating: 4.9,
                    image: "/training.png",
                    highlights: ["Incident Response", "SIEM Tools", "Threat Hunting"]
                  },
                  {
                    title: "Cloud Security Workshop",
                    date: "June 2024",
                    location: "Chennai",
                    participants: 38,
                    rating: 4.7,
                    image: "/training.png",
                    highlights: ["AWS Security", "Azure Security", "Cloud Pentesting"]
                  },
                  {
                    title: "Mobile Security Training",
                    date: "July 2024",
                    location: "Pune",
                    participants: 25,
                    rating: 4.8,
                    image: "/training.png",
                    highlights: ["Android Security", "iOS Security", "Mobile Pentesting"]
                  }
                ].map((event, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden rounded-t-lg">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-red-600 text-white shadow-lg">Featured</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-900">{event.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                          <MapPin className="w-4 h-4 ml-2" />
                          <span>{event.location}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{event.participants} participants</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-6 flex-grow">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          <Button 
                            variant="outline" 
                            className="w-full border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all duration-200 font-medium"
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
              <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
            </Carousel>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-center mt-8 md:hidden">
              <div className="flex space-x-2">
                {[0, 1, 2].map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Training Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Immersive, Focused & Expert-Led Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class cybersecurity training with industry experts and cutting-edge methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Expert-Led Instruction
                    </h3>
                    <p className="text-gray-600">
                      Learn from certified cybersecurity professionals with years of industry experience and real-world expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Hands-On Learning
                    </h3>
                    <p className="text-gray-600">
                      Practice with real-world scenarios, live labs, and industry-standard tools in a controlled environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-50 border border-purple-100 flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Small Class Sizes
                    </h3>
                    <p className="text-gray-600">
                      Benefit from personalized attention with small class sizes ensuring maximum learning effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/expert.png"
                  alt="Expert-led training session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Live Training Session</h4>
                  <p className="text-sm opacity-90">Interactive hands-on learning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Choose from weekend, evening, or intensive bootcamp formats to fit your schedule."
              },
              {
                icon: Award,
                title: "Industry Certifications",
                description: "Prepare for and earn recognized cybersecurity certifications during your training."
              },
              {
                icon: Trophy,
                title: "Career Support",
                description: "Get job placement assistance, resume reviews, and interview preparation support."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="p-4 rounded-full bg-red-50 border border-red-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Learning Resources & Materials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive study materials, tools, and resources to enhance your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Course Materials",
                description: "Comprehensive study guides, slides, and reference materials",
                icon: BookOpen,
                color: "blue"
              },
              {
                title: "Lab Environment",
                description: "Access to virtual labs and practice environments",
                icon: Laptop,
                color: "green"
              },
              {
                title: "Video Tutorials",
                description: "Recorded sessions and step-by-step video guides",
                icon: PlayCircle,
                color: "purple"
              },
              {
                title: "Community Access",
                description: "Join our exclusive community of cybersecurity professionals",
                icon: Users,
                color: "red"
              }
            ].map((resource, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-${resource.color}-50 border border-${resource.color}-100`}>
                    <resource.icon className={`w-8 h-8 text-${resource.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Access Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Ready to Start Your Cybersecurity Journey?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of professionals who have transformed their careers with our expert-led training programs. 
                  Get certified, gain experience, and advance your cybersecurity career.
                </p>
                <div className="flex gap-4">
                  <Button className="font-semibold bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Enroll Now
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/last.png"
                  alt="Cybersecurity training success"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
