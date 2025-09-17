"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Who can enroll in HacFy Trainings?",
    answer:
      "Students, professionals, and organizations looking to upskill in cybersecurity. Our programs are designed for all skill levels.",
  },
  {
    question: "Do I need a technical background?",
    answer:
      "No. Beginners are welcome. We start with basics and progress to advanced topics with comprehensive support throughout.",
  },
  {
    question: "What makes HacFy different from other training providers?",
    answer:
      "We emphasize hands-on labs, live projects, and mentorship, not just theory. 80% of our training is practical with real-world scenarios.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes. All participants get an industry-recognized certificate upon successful completion of their program.",
  },
  {
    question: "Is placement support provided?",
    answer:
      "Yes. Top performers may receive pre-placement offers or internship opportunities. We also provide career mentorship and guidance.",
  },
  {
    question: "What's the format of training?",
    answer:
      "Programs are available in online, offline, and hybrid modes for maximum flexibility to suit your schedule and preferences.",
  },
  {
    question: "Do you provide corporate-customized modules?",
    answer:
      "Yes. We tailor corporate trainings to match your company's specific needs, threat landscape, and security requirements.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
            Frequently Asked <span className="red-accent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Get answers to common questions about our cybersecurity training programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 red-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
