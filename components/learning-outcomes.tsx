import { Card, CardContent } from "@/components/ui/card"
import { Shield, Search, Wrench, Eye, FileText, Briefcase } from "lucide-react"

const outcomes = [
  {
    icon: Shield,
    title: "Perform ethical hacking & penetration testing",
    description: "Master the fundamentals of ethical hacking and conduct professional penetration tests",
  },
  {
    icon: Search,
    title: "Detect & exploit real-world vulnerabilities",
    description: "Identify security weaknesses and understand how attackers exploit them",
  },
  {
    icon: Wrench,
    title: "Master industry-standard tools",
    description: "Become proficient with Burp Suite, Nmap, Metasploit, and other essential tools",
  },
  {
    icon: Eye,
    title: "Understand SOC operations and incident response",
    description: "Learn how Security Operations Centers work and how to respond to incidents",
  },
  {
    icon: FileText,
    title: "Write professional security reports & disclosures",
    description: "Communicate findings effectively through detailed reports and responsible disclosure",
  },
  {
    icon: Briefcase,
    title: "Be job-ready in cybersecurity roles",
    description: "Gain the practical skills and knowledge needed for cybersecurity careers",
  },
]

export function LearningOutcomes() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Learning <span className="red-accent">Outcomes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            By the end of our programs, learners will have the skills and knowledge to excel in cybersecurity roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex-shrink-0">
                    <outcome.icon className="w-6 h-6 red-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
