"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-2 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Desktop Menu (Centered) */}
        <div className="hidden md:flex space-x-12 text-white text-lg font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="/internship"
            className="transition-colors hover:text-red-600"
          >
            Internships
          </Link>
          <Link
            href="/workshops"
            className="transition-colors hover:text-red-600"
          >
            Workshops
          </Link>
          <Link
            href="/bootcamps"
            className="transition-colors hover:text-red-600"
          >
            Bootcamps
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white absolute right-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent px-6 pb-4 space-y-3 text-white text-lg text-center">
          <Link
            href="/"
            className="block transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/internship"
            className="block transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Internships
          </Link>
          <Link
            href="/workshops"
            className="block transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Workshops
          </Link>
          <Link
            href="/bootcamps"
            className="block transition-colors hover:text-red-600"
            onClick={() => setIsOpen(false)}
          >
            Bootcamps
          </Link>
        </div>
      )}
    </nav>
  )
}
