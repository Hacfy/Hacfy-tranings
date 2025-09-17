import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "HacFy's 5-day workshop gave me the confidence to apply for my first cybersecurity role. The labs were practical and directly relevant.",
    author: "Student Participant",
    role: "Workshop Graduate",
    rating: 5,
  },
  {
    quote:
      "Our IT team is much better prepared to handle phishing and ransomware after HacFy's corporate training. Highly recommended.",
    author: "Corporate Client",
    role: "IT Manager",
    rating: 5,
  },
  {
    quote: "The 45-day bootcamp was a game-changer. I landed a job as a SOC Analyst within 2 months of completing it.",
    author: "CyberSprint Graduate",
    role: "SOC Analyst",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Success <span className="red-accent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Hear from our graduates who have transformed their careers through HacFy Trainings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-5 h-5 red-accent" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
