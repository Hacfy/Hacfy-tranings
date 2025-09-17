"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Decorative gradient orbs */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-balance text-white leading-tight"
        >
          Level Up Your{" "}
          <span className="bg-secondary bg-clip-text text-transparent animate-gradient-x">
            Cybersecurity Skills
          </span>{" "}
          with HacFy Trainings
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance"
        >
          Hands-on, industry-ready programs designed for students, professionals, and enterprises.  
          Learn, practice, and master cybersecurity the right way.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg text-gray-400 mb-12 font-medium"
        >
          Your cybersecurity journey starts here — don't just learn, experience.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => (window.location.href = "/register")}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 text-lg font-semibold rounded-2xl shadow-lg shadow-red-500/30 transition-all duration-300"
          >
             Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-500 text-gray-200 bg-gray-800 px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300"
          >
             Explore Programs
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
