"use client"

import Image from "next/image"
import { Calendar, MapPin, Users, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

export function PastEvents() {
  const events = [
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
  ]

  return (
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
              {events.map((event, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
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
                          <span className="text-sm font-medium text-gray-900">
                            {event.rating}
                          </span>
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
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
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
                <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
