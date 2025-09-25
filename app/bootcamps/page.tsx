"use client"

import { useState } from "react"
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
  PlayCircle,
  Zap,
  GraduationCap,
  Briefcase,
  Code,
  Lock,
  Search,
  Bug,
  Flag
} from "lucide-react"

export default function BootcampsPage() {
  const [activeProgram, setActiveProgram] = useState<'intensive' | 'cybersprint'>('intensive')
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">
              Comprehensive <span className="text-red-600">Bootcamp Programs</span> 
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto text-balance leading-relaxed">
              Choose from 1-Week Intensive or 45-Day Professional Sprint. Our bootcamp programs are designed 
              for rapid career transformation in cybersecurity through hands-on labs, real-world scenarios, 
              and mentorship from certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Bootcamp Programs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Choose Your Bootcamp Program</h2>
            <p className="text-lg text-gray-600">Intensive programs designed for rapid career transformation in cybersecurity</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <Button
                onClick={() => setActiveProgram('intensive')}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  activeProgram === 'intensive'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-transparent text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                1-Week Intensive Bootcamp
              </Button>
              <Button
                onClick={() => setActiveProgram('cybersprint')}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  activeProgram === 'cybersprint'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-transparent text-gray-600 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                HacFy CyberSprint
              </Button>
            </div>
          </div>

          {/* Program Content */}
          <div className="max-w-4xl mx-auto">
            {activeProgram === 'intensive' && (
              <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                    <Badge variant="outline" className="border-red-300 text-red-600 bg-red-50 ml-4">
                      Intensive
                    </Badge>
                  </div>

                  <CardTitle className="text-3xl text-gray-900 group-hover:text-red-600 transition-colors mb-4">
                    1-Week Intensive Bootcamp
                  </CardTitle>

                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      7 Days
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      15-25 Students
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Certificate
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Perfect for professionals looking to quickly upskill or transition into cybersecurity. 
                    Covers core cybersecurity skills through practical labs and real-world attack scenarios.
                  </p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">What You'll Master:</h3>
                      <ul className="space-y-3">
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span>Networking fundamentals and security protocols</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span>Web application testing and vulnerability assessment</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span>System security and penetration testing</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span>Real-world attack scenarios and simulations</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span>Industry certification preparation</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Daily Schedule:</h3>
                      <ul className="space-y-3">
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span><strong>Day 1-2:</strong> Networking & Security Fundamentals</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span><strong>Day 3-4:</strong> Web Application Security</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span><strong>Day 5-6:</strong> System Penetration Testing</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <span><strong>Day 7:</strong> CTF Challenge & Certification</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3">
                      Enroll in 1-Week Bootcamp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeProgram === 'cybersprint' && (
              <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-lg bg-red-50 border border-red-100">
                      <Trophy className="w-6 h-6 text-red-600" />
                    </div>
                    <Badge variant="outline" className="border-red-300 text-red-600 bg-red-50 ml-4">
                      Flagship Program
                    </Badge>
                  </div>

                  <CardTitle className="text-3xl text-gray-900 group-hover:text-red-600 transition-colors mb-4">
                    HacFy CyberSprint
                  </CardTitle>

                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      45 Days
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      10-20 Students
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Professional Certificate
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Our flagship 45-day professional program structured in five comprehensive phases. 
                    Designed for complete career transformation with hands-on labs and mentorship.
                  </p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 text-center">Program Phases:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Phase 1 (Days 1-10)</h4>
                            <p className="text-sm text-gray-600">Core fundamentals and cybersecurity principles</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Phase 2 (Days 11-20)</h4>
                            <p className="text-sm text-gray-600">Information gathering and reconnaissance techniques</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Phase 3 (Days 21-30)</h4>
                            <p className="text-sm text-gray-600">Web & system penetration testing</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Phase 4 (Days 31-40)</h4>
                            <p className="text-sm text-gray-600">Post-exploitation strategies and lateral movement</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-red-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Phase 5 (Days 41-45)</h4>
                            <p className="text-sm text-gray-600">CTF challenges and professional reporting</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3">
                      Enroll in CyberSprint
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Phases Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {activeProgram === 'intensive' 
                ? '1-Week Intensive Bootcamp: Complete Journey'
                : 'HacFy CyberSprint: 45-Day Journey'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeProgram === 'intensive'
                ? 'A comprehensive 7-day intensive program designed for rapid cybersecurity skill acquisition'
                : 'A comprehensive 5-phase program designed for complete cybersecurity career transformation'
              }
            </p>
          </div>

          <div className="space-y-8">
            {(activeProgram === 'intensive' ? [
              {
                phase: "Day 1-2",
                title: "Networking & Security Fundamentals",
                duration: "Foundation Building",
                icon: BookOpen,
                color: "red",
                description: "Build a solid foundation in networking and cybersecurity principles",
                topics: [
                  "Network protocols and security architecture",
                  "TCP/IP fundamentals and vulnerabilities",
                  "Operating system security (Windows & Linux)",
                  "Basic cryptography and encryption",
                  "Security policies and compliance basics"
                ]
              },
              {
                phase: "Day 3-4",
                title: "Web Application Security",
                duration: "Web Security Focus",
                icon: Target,
                color: "red",
                description: "Master web application security testing and vulnerability assessment",
                topics: [
                  "OWASP Top 10 web vulnerabilities",
                  "Web application penetration testing",
                  "SQL injection and XSS attacks",
                  "Authentication and session management",
                  "Web security tools and methodologies"
                ]
              },
              {
                phase: "Day 5-6",
                title: "System Penetration Testing",
                duration: "System Security",
                icon: Shield,
                color: "red",
                description: "Advanced system penetration testing and exploitation techniques",
                topics: [
                  "Network penetration testing",
                  "Privilege escalation techniques",
                  "Post-exploitation strategies",
                  "Wireless security assessment",
                  "Social engineering techniques"
                ]
              },
              {
                phase: "Day 7",
                title: "CTF Challenge & Certification",
                duration: "Final Assessment",
                icon: Flag,
                color: "red",
                description: "Capture The Flag competition and professional certification",
                topics: [
                  "Capture The Flag (CTF) challenges",
                  "Real-world attack simulations",
                  "Professional reporting skills",
                  "Industry certification preparation",
                  "Career guidance and next steps"
                ]
              }
            ] : [
              {
                phase: "Phase 1",
                title: "Core Fundamentals",
                duration: "Days 1-10",
                icon: BookOpen,
                color: "red",
                description: "Build a solid foundation in cybersecurity principles and practices",
                topics: [
                  "Cybersecurity fundamentals and threat landscape",
                  "Network security protocols and architecture",
                  "Operating system security (Windows & Linux)",
                  "Cryptography basics and implementation",
                  "Security policies and compliance frameworks"
                ]
              },
              {
                phase: "Phase 2",
                title: "Information Gathering",
                duration: "Days 11-20",
                icon: Search,
                color: "red",
                description: "Master reconnaissance and intelligence gathering techniques",
                topics: [
                  "OSINT (Open Source Intelligence) gathering",
                  "Network reconnaissance and scanning",
                  "Vulnerability assessment methodologies",
                  "Social engineering techniques",
                  "Footprinting and enumeration strategies"
                ]
              },
              {
                phase: "Phase 3",
                title: "Penetration Testing",
                duration: "Days 21-30",
                icon: Target,
                color: "red",
                description: "Deep dive into web and system penetration testing",
                topics: [
                  "OWASP Top 10 web vulnerabilities",
                  "Web application security testing",
                  "Network penetration testing",
                  "Wireless security assessment",
                  "Mobile application security testing"
                ]
              },
              {
                phase: "Phase 4",
                title: "Post-Exploitation",
                duration: "Days 31-40",
                icon: Bug,
                color: "red",
                description: "Advanced techniques for maintaining access and lateral movement",
                topics: [
                  "Privilege escalation techniques",
                  "Lateral movement strategies",
                  "Persistence mechanisms",
                  "Data exfiltration methods",
                  "Covering tracks and evasion"
                ]
              },
              {
                phase: "Phase 5",
                title: "CTF & Professional Reporting",
                duration: "Days 41-45",
                icon: Flag,
                color: "red",
                description: "Capture The Flag challenges and professional reporting skills",
                topics: [
                  "Capture The Flag (CTF) competitions",
                  "Professional penetration testing reports",
                  "Client communication and presentation",
                  "Remediation strategies and recommendations",
                  "Career preparation and job placement"
                ]
              }
            ]).map((phase, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-lg bg-${phase.color}-50 border border-${phase.color}-100 flex-shrink-0`}>
                      <phase.icon className={`w-8 h-8 text-${phase.color}-600`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                        <Badge variant="outline" className={`border-${phase.color}-300 text-${phase.color}-600 bg-${phase.color}-50`}>
                          {phase.duration}
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{phase.title}</h4>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {phase.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className={`w-4 h-4 text-${phase.color}-500 flex-shrink-0`} />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              What Makes Our Bootcamps Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading features designed to maximize your learning and career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: "Hands-On Labs",
                description: "Real-world scenarios and industry-standard tools in controlled environments",
                color: "blue"
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Learn from certified cybersecurity professionals with years of experience",
                color: "green"
              },
              {
                icon: Award,
                title: "Industry Certificates",
                description: "Receive industry-recognized certificates and career placement assistance",
                color: "purple"
              },
              {
                icon: Shield,
                title: "Real-World Scenarios",
                description: "Practice with actual attack simulations and defense strategies",
                color: "red"
              },
              {
                icon: Code,
                title: "Industry-Standard Tools",
                description: "Master the same tools used by professional cybersecurity teams",
                color: "orange"
              },
              {
                icon: Briefcase,
                title: "Career Support",
                description: "Job placement assistance, resume reviews, and interview preparation",
                color: "indigo"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className={`p-4 rounded-full bg-${feature.color}-50 border border-${feature.color}-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Career Support Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  Industry-Recognized Credentials & Career Support
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Graduate with industry-recognized certificates and comprehensive career placement assistance 
                  to jumpstart your cybersecurity career.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Industry-Recognized Certificates
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Earn certificates respected by top cybersecurity companies and trusted across the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Career Placement Assistance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get job placement assistance, resume reviews, and interview preparation support from our career services team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Professional Network Access
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join our exclusive community of cybersecurity professionals and alumni for ongoing support and networking.
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
                  alt="Sample Certificate"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">95% Job Placement Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Bootcamp Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our bootcamp graduates have transformed their careers in cybersecurity
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
                    name: "Sarah Chen",
                    role: "Security Analyst at TechCorp",
                    image: "/placeholder-user.jpg",
                    quote: "The 1-Week Intensive Bootcamp gave me the skills I needed to transition from IT support to cybersecurity. The hands-on labs were incredible!",
                    rating: 5,
                    program: "1-Week Intensive"
                  },
                  {
                    name: "Michael Rodriguez",
                    role: "Penetration Tester at SecureNet",
                    image: "/placeholder-user.jpg",
                    quote: "The CyberSprint program was life-changing. The 5-phase structure and expert mentorship prepared me for real-world challenges.",
                    rating: 5,
                    program: "45-Day CyberSprint"
                  },
                  {
                    name: "Priya Sharma",
                    role: "SOC Analyst at CyberDefense Inc",
                    image: "/placeholder-user.jpg",
                    quote: "I went from zero cybersecurity knowledge to landing my dream job in just 45 days. The career support was outstanding!",
                    rating: 5,
                    program: "45-Day CyberSprint"
                  },
                  {
                    name: "David Kim",
                    role: "Security Consultant at GlobalSec",
                    image: "/placeholder-user.jpg",
                    quote: "The intensive bootcamp format was perfect for my busy schedule. I gained practical skills I could apply immediately.",
                    rating: 5,
                    program: "1-Week Intensive"
                  }
                ].map((story, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-600 mb-6 flex-grow italic">
                          "{story.quote}"
                        </blockquote>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={story.image}
                              alt={story.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{story.name}</h4>
                            <p className="text-sm text-gray-600">{story.role}</p>
                            <Badge variant="outline" className="text-xs mt-1">
                              {story.program}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
              <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-50 shadow-lg" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Ready to Transform Your Cybersecurity Career?
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Join thousands of professionals who have accelerated their careers with our intensive bootcamp programs. 
                  Choose your path and start your cybersecurity journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="font-semibold bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Enroll in 1-Week Intensive
                  </Button>
                  <Button className="font-semibold bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Enroll in CyberSprint
                  </Button>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/last.png"
                  alt="Cybersecurity bootcamp success"
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
