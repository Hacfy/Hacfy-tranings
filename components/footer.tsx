import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Shield, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 sm:py-16 px-4 sm:px-6 mobile-section">
      <div className="max-w-6xl mx-auto mobile-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl sm:text-2xl font-bold text-white mobile-heading">HacFy Trainings</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed mobile-readable">
              Empowering the next generation of cybersecurity professionals through hands-on, industry-ready training
              programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "Trainings", "About", "Contact", "Terms"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm sm:text-base text-gray-300 hover:text-red-400 transition-colors mobile-readable">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg">Programs</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Workshops", "Bootcamps", "CyberSprint", "Internship", "Corporate"].map((program) => (
                <li key={program}>
                  <a href={`#${program.toLowerCase()}`} className="text-sm sm:text-base text-gray-300 hover:text-red-400 transition-colors mobile-readable">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left mobile-readable">© 2025 HacFy Trainings. All Rights Reserved.</p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span className="text-gray-400 text-xs sm:text-sm mobile-readable">Follow us:</span>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/company/hacfy/posts/?feedView=all"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors mobile-touch-target"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </a>
              <a
                href="https://www.instagram.com/hacfy.co/"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors mobile-touch-target"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </a>
              <a
                href="https://www.youtube.com/@HacFy"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors mobile-touch-target"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
