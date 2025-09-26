"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "HacFy's 5-day workshop gave me the confidence to apply for my first cybersecurity role. The labs were practical and directly relevant.",
    author: "Sarah Johnson",
    role: "Workshop Graduate",
    rating: 5,
  },
  {
    quote:
      "Our IT team is much better prepared to handle phishing and ransomware after HacFy's corporate training. Highly recommended.",
    author: "Michael Chen",
    role: "IT Manager",
    rating: 5,
  },
  {
    quote: "The 45-day bootcamp was a game-changer. I landed a job as a SOC Analyst within 2 months of completing it.",
    author: "Alex Rodriguez",
    role: "SOC Analyst",
    rating: 5,
  },
  {
    quote: "The hands-on approach and real-world scenarios made all the difference. I now feel confident in my cybersecurity skills.",
    author: "Emily Davis",
    role: "Security Engineer",
    rating: 5,
  },
  {
    quote: "HacFy's training helped me transition from IT support to cybersecurity. The instructors were amazing and very supportive.",
    author: "David Wilson",
    role: "Cybersecurity Specialist",
    rating: 5,
  },
  {
    quote: "The comprehensive curriculum and practical labs prepared me well for my current role as a Penetration Tester.",
    author: "Lisa Thompson",
    role: "Penetration Tester",
    rating: 5,
  },
]

export function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  // Increase visible cards for slimmer look
  const visibleCards = 6
  const cardWidthPercent = 100 / visibleCards

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Success <span className="red-accent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Hear from our graduates who have transformed their careers through HacFy Trainings.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: ["0%", `-${100}%`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 70, // slower scroll
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedTestimonials.length * cardWidthPercent}%`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <Card className="bg-white border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 group h-full min-h-[250px] md:min-h-[300px]">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Quote className="w-5 h-5 red-accent" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-gray-700 mb-6 leading-relaxed flex-grow text-lg">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
