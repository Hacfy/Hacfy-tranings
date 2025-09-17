import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { TrainingPrograms } from "@/components/training-programs"
import { LearningOutcomes } from "@/components/learning-outcomes"
import { CareerPaths } from "@/components/career-paths"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <HeroSection />
      <ValueProposition />
      <TrainingPrograms />
      <LearningOutcomes />
      <CareerPaths />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}
