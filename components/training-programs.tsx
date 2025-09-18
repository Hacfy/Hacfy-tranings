import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"

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
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Training <span className="red-accent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Choose from our comprehensive range of cybersecurity training programs designed for every skill level and
            career goal.
          </p>
        </div>

        {programs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">{category.category}</h3>
              <p className="text-lg text-gray-600">{category.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.programs.map((program, programIndex) => (
                <Card
                  key={programIndex}
                  className={`bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full ${program.featured ? "ring-2 ring-red-100" : ""}`}
                >
                  {program.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="red-accent-bg text-white font-semibold">Most Popular</Badge>
                    </div>
                  )}

                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                        <Award className="w-5 h-5 red-accent" />
                      </div>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        {program.level}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                      {program.title}
                    </CardTitle>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {program.participants}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow">
                    <ul className="space-y-2 mb-6 flex-grow">
                      {program.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 red-accent-bg" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full font-semibold red-accent-bg hover:bg-red-700 text-white mt-auto">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
