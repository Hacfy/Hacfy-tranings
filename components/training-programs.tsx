"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const programs = [
  {
    category: "Workshops",
    subtitle: "Fast Learning for Beginners & Professionals",
    programs: [
      {
        title: "2-Day Workshop",
        duration: "2 Days",
        level: "Beginner",
        participants: "20-30",
        highlights: [
          "Ethical Hacking fundamentals",
          "Linux & Kali Lab setup",
          "Reconnaissance & vulnerability scanning",
          "Basic web attacks (SQL Injection, XSS)",
          "Password cracking, social engineering",
        ],
      },
      {
        title: "3-Day Workshop",
        duration: "3 Days",
        level: "Intermediate",
        participants: "15-25",
        highlights: [
          "OWASP Top 10 deep dive",
          "Reconnaissance, scanning & automation",
          "Directory brute-forcing (Gobuster)",
          "Burp Suite basics for web app testing",
        ],
      },
      {
        title: "5-Day Workshop",
        duration: "5 Days",
        level: "Advanced",
        participants: "10-20",
        highlights: [
          "Advanced web pentesting & exploit development",
          "Privilege escalation & bug bounty basics",
          "Real-time attack simulations",
          "SOC overview & Incident response",
          "Capture The Flag (CTF) challenge",
        ],
      },
    ],
  },
  {
    category: "Bootcamps",
    subtitle: "Intensive, Career-Ready Training",
    programs: [
      {
        title: "1-Week Bootcamp",
        duration: "7 Days",
        level: "Intensive",
        participants: "15-20",
        highlights: [
          "Core cybersecurity skills through practical labs",
          "Networking, web app testing, system security",
          "Real-world attack scenarios",
          "Industry certification preparation",
        ],
      },
      {
        title: "HacFy CyberSprint",
        duration: "45 Days",
        level: "Professional",
        participants: "10-15",
        highlights: [
          "Phase 1: Core Fundamentals (Days 1-10)",
          "Phase 2: Information Gathering (Days 11-20)",
          "Phase 3: Web & System Pentesting (Days 21-30)",
          "Phase 4: Post-Exploitation (Days 31-40)",
          "Phase 5: CTF & Reporting (Days 41-45)",
        ],
        featured: true,
      },
    ],
  },
  {
    category: "Specialized Programs",
    subtitle: "Long-term Career Development",
    programs: [
      {
        title: "Internship Program",
        duration: "6 Months",
        level: "Career-Ready",
        participants: "5-10",
        highlights: [
          "Online & Offline modes",
          "Complete hands-on practical training",
          "Real-world projects, CTFs, and reporting",
          "1:1 mentorship from cybersecurity experts",
          "PPO (Pre-Placement Offer) for top performers",
        ],
      },
      {
        title: "Corporate Training",
        duration: "Customized",
        level: "Enterprise",
        participants: "20-100+",
        highlights: [
          "Threat Landscape Awareness",
          "Human Layer Protection",
          "Incident Response & Recovery",
          "Custom & Scalable Training for workforce",
        ],
      },
    ],
  },
]

export function TrainingPrograms() {
  const router = useRouter()

  const handleLearnMore = () => {
    router.push('/workshops')
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white mobile-section">
      <div className="max-w-7xl mx-auto mobile-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-gray-900 mobile-heading">
            Training <span className="red-accent">Programs</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance mobile-readable">
            Choose from our comprehensive range of cybersecurity training programs designed for every skill level and
            career goal.
          </p>
        </div>

        {programs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 mobile-heading">{category.category}</h3>
              <p className="text-base sm:text-lg text-gray-600 mobile-readable">{category.subtitle}</p>
            </div>

            {category.category === "Workshops" ? (
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300 mobile-card">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 rounded-lg bg-red-50 border border-red-100 flex-shrink-0">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 red-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mobile-heading">Comprehensive Workshop Series</h4>
                        <p className="text-sm sm:text-base text-gray-600 mobile-readable">Choose from 2-Day, 3-Day, or 5-Day intensive workshops</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-900 text-base sm:text-lg">What You'll Learn:</h5>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                          Our workshop series covers everything from ethical hacking fundamentals to advanced penetration testing techniques. 
                          Start with our 2-Day workshop for beginners, covering Linux & Kali Lab setup, reconnaissance, and basic web attacks 
                          like SQL Injection and XSS. Progress to our 3-Day intermediate workshop with OWASP Top 10 deep dive, automated 
                          reconnaissance, and Burp Suite basics. For advanced learners, our 5-Day workshop includes advanced web pentesting, 
                          exploit development, privilege escalation, bug bounty basics, real-time attack simulations, SOC overview, incident 
                          response, and Capture The Flag (CTF) challenges.
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                          Each workshop is designed with hands-on labs, real-world scenarios, and practical exercises to ensure you gain 
                          actionable skills. Whether you're a complete beginner or an experienced professional looking to enhance your 
                          cybersecurity expertise, our workshop series provides the perfect learning path for your career goals.
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleLearnMore}
                      className="w-full sm:w-auto font-semibold red-accent-bg hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 mobile-button mobile-touch-target"
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="flex justify-center order-first lg:order-last">
                    <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 rounded-lg overflow-hidden">
                      <Image
                        src="/workshop.png"
                        alt="Cybersecurity Workshop Training"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : category.category === "Bootcamps" ? (
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300 mobile-card">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 rounded-lg bg-red-50 border border-red-100 flex-shrink-0">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 red-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mobile-heading">Comprehensive Bootcamp Programs</h4>
                        <p className="text-sm sm:text-base text-gray-600 mobile-readable">Choose from 1-Week Intensive or 45-Day Professional Sprint</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="space-y-3">
                        <h5 className="font-semibold text-gray-900 text-base sm:text-lg">What You'll Master:</h5>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                          Our bootcamp programs are designed for rapid career transformation in cybersecurity. The 1-Week Intensive Bootcamp 
                          covers core cybersecurity skills through practical labs, including networking fundamentals, web application testing, 
                          system security, real-world attack scenarios, and industry certification preparation. Perfect for professionals looking 
                          to quickly upskill or transition into cybersecurity.
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                          The HacFy CyberSprint is our flagship 45-day professional program structured in five comprehensive phases. Phase 1 
                          (Days 1-10) covers core fundamentals, Phase 2 (Days 11-20) focuses on information gathering techniques, Phase 3 
                          (Days 21-30) dives deep into web and system penetration testing, Phase 4 (Days 31-40) covers post-exploitation 
                          strategies, and Phase 5 (Days 41-45) culminates with Capture The Flag challenges and professional reporting.
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                          Both programs feature hands-on labs, real-world scenarios, industry-standard tools, and mentorship from certified 
                          cybersecurity professionals. Graduates receive industry-recognized certificates and career placement assistance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button 
                        onClick={handleLearnMore}
                        className="w-full sm:w-auto font-semibold red-accent-bg hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 mobile-button mobile-touch-target"
                      >
                        View Bootcamp Details
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleLearnMore}
                        className="w-full sm:w-auto font-semibold border-gray-300 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 mobile-button mobile-touch-target"
                      >
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center order-first lg:order-last">
                    <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80 rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/boot.png"
                        alt="Cybersecurity Bootcamp Training"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                        <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Intensive Learning</h4>
                        <p className="text-xs sm:text-sm opacity-90">Hands-on practical training</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.programs.map((program, programIndex) => (
                  <Card
                    key={programIndex}
                    className={`bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full mobile-card ${program.featured ? "ring-2 ring-red-100" : ""}`}
                  >
                    {program.featured && (
                      <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="red-accent-bg text-white font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1">Most Popular</Badge>
                      </div>
                    )}

                    <CardHeader className="flex-shrink-0 p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 red-accent" />
                        </div>
                        <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs sm:text-sm">
                          {program.level}
                        </Badge>
                      </div>

                      <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-red-600 transition-colors mobile-heading">
                        {program.title}
                      </CardTitle>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                          {program.participants}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow p-4 sm:p-6 pt-0">
                      <ul className="space-y-2 mb-4 sm:mb-6 flex-grow">
                        {program.highlights.map((highlight, index) => (
                          <li key={index} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2 mobile-readable">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-2 flex-shrink-0 red-accent-bg" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <Button 
                        onClick={handleLearnMore}
                        className="w-full font-semibold red-accent-bg hover:bg-red-700 text-white mt-auto mobile-button mobile-touch-target text-sm sm:text-base py-2 sm:py-3"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}


