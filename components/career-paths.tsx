import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Shield, Bug, Users, AlertTriangle, Settings } from "lucide-react"

const careers = [
  {
    icon: Target,
    title: "Penetration Testers",
    description: "Conduct authorized attacks on systems to identify vulnerabilities",
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Report Writing"],
    /* Updated color to red accent */
    color: "rgba(218,21,21,0.952)",
  },
  {
    icon: Shield,
    title: "SOC Analysts",
    description: "Monitor and analyze security events in Security Operations Centers",
    skills: ["Incident Response", "SIEM Tools", "Threat Detection"],
    color: "#1f2937",
  },
  {
    icon: Bug,
    title: "Bug Bounty Hunters",
    description: "Find and report security vulnerabilities for rewards",
    skills: ["Web Application Security", "Mobile Security", "API Testing"],
    color: "#059669",
  },
  {
    icon: Users,
    title: "Cybersecurity Consultants",
    description: "Provide expert security advice to organizations",
    skills: ["Risk Assessment", "Compliance", "Security Strategy"],
    color: "#7c3aed",
  },
  {
    icon: AlertTriangle,
    title: "Incident Responders",
    description: "Handle and investigate security incidents and breaches",
    skills: ["Digital Forensics", "Malware Analysis", "Crisis Management"],
    color: "#dc2626",
  },
  {
    icon: Settings,
    title: "Security Engineers",
    description: "Design and implement security systems and controls",
    skills: ["Security Architecture", "DevSecOps", "Cloud Security"],
    color: "rgba(218,21,21,0.952)",
  },
]

export function CareerPaths() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Career <span className="red-accent">Paths</span> After Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our learners have gone on to become successful cybersecurity professionals in various roles across the
            industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <Card
              key={index}
              /* Updated card styling for professional light theme */
              className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg flex-shrink-0 bg-gray-50 border border-gray-200">
                    <career.icon className="w-6 h-6" style={{ color: career.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{career.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      /* Updated badge styling for light theme */
                      className="text-xs border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
