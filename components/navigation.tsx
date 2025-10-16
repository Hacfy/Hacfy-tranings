"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-12 text-lg font-medium transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/internship" className="hover:text-red-600 transition-colors">
            Internships
          </Link>
          <Link href="/workshops" className="hover:text-red-600 transition-colors">
            Workshops
          </Link>
          <Link href="/bootcamps" className="hover:text-red-600 transition-colors">
            Bootcamps
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden absolute right-6 transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-4 space-y-3 text-lg text-center transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <Link
            href="/"
            className="block hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/internship"
            className="block hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Internships
          </Link>
          <Link
            href="/workshops"
            className="block hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Workshops
          </Link>
          <Link
            href="/bootcamps"
            className="block hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Bootcamps
          </Link>
        </div>
      )}
    </nav>
  )
}
