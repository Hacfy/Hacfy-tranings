import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Shield, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
            
              <span className="text-2xl font-bold text-white">HacFy Trainings</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering the next generation of cybersecurity professionals through hands-on, industry-ready training
              programs.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white focus:border-red-500"
                />
                <Button className="red-accent-bg hover:bg-red-700 text-white font-semibold">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Trainings", "About", "Contact", "Terms"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-red-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-3">
              {["Workshops", "Bootcamps", "CyberSprint", "Internship", "Corporate"].map((program) => (
                <li key={program}>
                  <a href={`#${program.toLowerCase()}`} className="text-gray-300 hover:text-red-400 transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 HacFy Trainings. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-red-400" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
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
