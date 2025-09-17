import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Globe, BookOpen, TrendingUp, Network } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Hands-On First",
    description: "80% practical training with labs & tools.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn directly from ethical hackers & security professionals.",
  },
  {
    icon: Globe,
    title: "Globally Relevant",
    description: "Content aligned with latest cyber threats & industry needs.",
  },
  {
    icon: BookOpen,
    title: "Flexible Learning",
    description: "Workshops, bootcamps, internships, and corporate programs.",
  },
  {
    icon: TrendingUp,
    title: "Career Boost",
    description: "Certifications, placement opportunities, and mentorship.",
  },
  {
    icon: Network,
    title: "Community-Driven",
    description: "Join a growing network of cybersecurity learners & professionals.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Why <span className="red-accent">HacFy</span> Trainings?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-balance">
            At HacFy Trainings, we don't just teach — we prepare you to think, act, and succeed as a cybersecurity
            professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg flex-shrink-0 bg-red-50 border border-red-100">
                    <feature.icon className="w-6 h-6 red-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
