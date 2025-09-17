import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "HacFy Trainings - Level Up Your Cybersecurity Skills",
  description:
    "Hands-on, industry-ready cybersecurity programs designed for students, professionals, and enterprises. Learn ethical hacking, penetration testing, and more.",
  generator: "v0.app",
  keywords:
    "cybersecurity training, ethical hacking, penetration testing, SOC analyst, bug bounty, cybersecurity bootcamp",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
