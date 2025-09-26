"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  Shield, 
  Target, 
  BookOpen, 
  Laptop,
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Download,
  PlayCircle,
  Zap,
  GraduationCap,
  Briefcase,
  Code,
  Lock,
  Search,
  Bug,
  Flag,
  UserCheck,
  Building2,
  TrendingUp,
  Globe,
  Monitor,
  FileText,
  Brain,
  Lightbulb
} from "lucide-react"

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance text-white mobile-heading"
            >
              Cybersecurity <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-x">Internship Program</span> 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto text-balance leading-relaxed mobile-readable"
            >
              6 months of intensive hands-on training with real-world projects, CTFs, and 1:1 mentorship 
              from cybersecurity experts. Transform your career with industry-ready skills.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8"
            >
              <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                6 Months Duration
              </Badge>
              <Badge className="bg-white text-black px-4 py-2 text-sm font-medium shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                Online & Offline
              </Badge>
              <Badge className="bg-gray-800 text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                Expert Mentorship
              </Badge>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 mobile-heading">
              Comprehensive <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">6-Month Internship</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-readable">
              Complete hands-on practical training with real-world projects and expert mentorship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group mobile-card h-full flex flex-col">
                <CardHeader className="p-3 sm:p-4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg">
                      <Trophy className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mobile-heading group-hover:text-red-600 transition-colors">Program Highlights</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                    {[
                      { icon: Clock, text: "6 Months Intensive Training" },
                      { icon: Users, text: "5-10 Students per Batch" },
                      { icon: Globe, text: "Online & Offline Modes" },
                      { icon: Laptop, text: "Complete Hands-on Training" },
                      { icon: Flag, text: "Real-world Projects & CTFs" },
                      { icon: UserCheck, text: "1:1 Mentorship from Experts" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 group/item p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="p-1 rounded-full bg-red-100 group-hover/item:bg-red-200 transition-colors flex-shrink-0">
                          <item.icon className="w-3 h-3 text-red-600" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm mobile-readable group-hover/item:text-red-600 transition-colors">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Program Structure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group mobile-card h-full flex flex-col">
                <CardHeader className="p-3 sm:p-4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg">
                      <Calendar className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mobile-heading group-hover:text-red-600 transition-colors">6-Month Timeline</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 pt-0 flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    {[
                      { color: "bg-red-600", title: "Month 1-2: Foundation Building", desc: "Core cybersecurity concepts and tool mastery" },
                      { color: "bg-red-500", title: "Month 3-4: Practical Application", desc: "Real-world projects and vulnerability assessments" },
                      { color: "bg-red-400", title: "Month 5: Advanced Techniques", desc: "Penetration testing and exploit development" },
                      { color: "bg-red-300", title: "Month 6: Capstone Project", desc: "Final project, CTF competitions, and career preparation" }
                    ].map((phase, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/phase p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className={`w-3 h-3 rounded-full ${phase.color} mt-1.5 flex-shrink-0 group-hover/phase:scale-125 transition-transform duration-300`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm mobile-heading group-hover/phase:text-red-600 transition-colors mb-0.5">{phase.title}</h4>
                          <p className="text-sm text-gray-600 mobile-readable">{phase.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1:1 Mentorship Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-white mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 mobile-heading">
                  Personal <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">1:1 Mentorship</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 mobile-readable">
                  Get dedicated guidance from certified cybersecurity experts who will personally mentor you 
                  throughout your 6-month journey.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: UserCheck,
                    title: "Dedicated Mentor Assignment",
                    description: "Each intern is assigned a personal mentor with 5+ years of industry experience and relevant certifications."
                  },
                  {
                    icon: Calendar,
                    title: "Weekly 1:1 Sessions",
                    description: "Regular one-on-one meetings to review progress, discuss challenges, and plan next steps in your learning journey."
                  },
                  {
                    icon: Lightbulb,
                    title: "Career Guidance & Networking",
                    description: "Get career advice, industry insights, and access to professional networks that can accelerate your cybersecurity career."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200 flex-shrink-0 shadow-lg group-hover:shadow-red-200/50 transition-all duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 mobile-heading group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mobile-readable">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-first lg:order-last"
            >
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/expert.png"
                  alt="1:1 Mentorship Session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 mobile-heading">Personal Mentorship</h4>
                  <p className="text-xs sm:text-sm opacity-90 mobile-readable">Dedicated expert guidance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hands-on Training Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 mobile-heading">
              Complete <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Hands-on Practical Training</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-readable">
              Learn through real-world projects, Capture The Flag competitions, and industry-standard reporting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Laptop,
                title: "Real-World Projects",
                description: "Work on actual cybersecurity projects that mirror industry scenarios and challenges",
                features: [
                  "Vulnerability assessments",
                  "Penetration testing reports",
                  "Security architecture reviews",
                  "Incident response simulations"
                ],
                gradient: "from-red-500 to-red-600"
              },
              {
                icon: Flag,
                title: "CTF Competitions",
                description: "Participate in Capture The Flag competitions to test your skills against real challenges",
                features: [
                  "Weekly CTF challenges",
                  "Team competitions",
                  "Individual skill assessments",
                  "National-level competitions"
                ],
                gradient: "from-red-600 to-red-700"
              },
              {
                icon: FileText,
                title: "Professional Reporting",
                description: "Learn to create industry-standard reports and documentation for clients and stakeholders",
                features: [
                  "Executive summaries",
                  "Technical documentation",
                  "Remediation strategies",
                  "Client presentations"
                ],
                gradient: "from-red-700 to-red-800"
              }
            ].map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group mobile-card">
                  <CardContent className="p-4 sm:p-6">
                    <div className={`p-3 rounded-full bg-gradient-to-br from-red-50 to-red-100 border border-red-200 w-12 h-12 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-red-200/50 transition-all duration-300`}>
                      <training.icon className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900 group-hover:text-red-600 transition-colors text-center mobile-heading">
                      {training.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 text-center mobile-readable">{training.description}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {training.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-600 mobile-readable group/item p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <div className="p-1 rounded-full bg-red-100 group-hover/item:bg-red-200 transition-colors flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-red-500" />
                          </div>
                          <span className="group-hover/item:text-red-600 transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-white via-gray-50 to-white mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 mobile-heading">
              Flexible <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Learning Modes</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-readable">
              Choose between online and offline modes to fit your schedule and learning preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-200 shadow-lg group-hover:shadow-red-200/50 transition-all duration-300">
                      <Monitor className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mobile-heading group-hover:text-red-600 transition-colors">Online Mode</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "Live interactive sessions with experts",
                      "Access to virtual labs and environments",
                      "Recorded sessions for review",
                      "Online collaboration tools",
                      "Flexible schedule options"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-600 mobile-readable group/item p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <div className="p-1 rounded-full bg-red-100 group-hover/item:bg-red-200 transition-colors flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="text-sm group-hover/item:text-red-600 transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 sm:py-3 mobile-button mobile-touch-target shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                    Choose Online Mode
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-500 group mobile-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-lg group-hover:shadow-gray-200/50 transition-all duration-300">
                      <Building2 className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mobile-heading group-hover:text-gray-600 transition-colors">Offline Mode</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      "In-person training sessions",
                      "Physical lab access and equipment",
                      "Direct mentor interaction",
                      "Networking with peers",
                      "Hands-on hardware experience"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-600 mobile-readable group/item p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-1 rounded-full bg-gray-100 group-hover/item:bg-gray-200 transition-colors flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className="text-sm group-hover/item:text-gray-700 transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-2 sm:py-3 mobile-button mobile-touch-target shadow-lg hover:shadow-gray-500/25 transition-all duration-300">
                    Choose Offline Mode
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 mobile-heading">
              Internship <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mobile-readable">
              See how our interns have transformed their careers and secured amazing opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Security Analyst at CyberCorp",
                image: "/placeholder-user.jpg",
                quote: "The 6-month internship gave me real-world experience I couldn't get anywhere else. The 1:1 mentorship was invaluable!",
                rating: 5,
                company: "CyberCorp"
              },
              {
                name: "Maria Rodriguez",
                role: "Penetration Tester at SecureTech",
                image: "/placeholder-user.jpg",
                quote: "I went from zero cybersecurity knowledge to getting a great job. The hands-on projects and CTF competitions were game-changers.",
                rating: 5,
                company: "SecureTech"
              },
              {
                name: "James Chen",
                role: "SOC Analyst at DataGuard",
                image: "/placeholder-user.jpg",
                quote: "The combination of online and offline modes worked perfectly for my schedule. The mentor support was exceptional.",
                rating: 5,
                company: "DataGuard"
              },
              {
                name: "Sarah Johnson",
                role: "Security Consultant at InfoSec Pro",
                image: "/placeholder-user.jpg",
                quote: "The real-world projects and professional reporting training prepared me for immediate success in my role.",
                rating: 5,
                company: "InfoSec Pro"
              },
              {
                name: "David Wilson",
                role: "Cybersecurity Specialist at TechSecure",
                image: "/placeholder-user.jpg",
                quote: "The comprehensive training and hands-on experience gave me the confidence to excel in my cybersecurity career.",
                rating: 5,
                company: "TechSecure"
              },
              {
                name: "Lisa Chen",
                role: "Incident Response Analyst at SecureFlow",
                image: "/placeholder-user.jpg",
                quote: "The practical approach and real-world scenarios prepared me perfectly for handling security incidents professionally.",
                rating: 5,
                company: "SecureFlow"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group mobile-card">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-red-500 fill-current group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 mb-4 italic text-sm mobile-readable group-hover:text-gray-700 transition-colors">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
                        <Image
                          src={story.image}
                          alt={story.name}
                          width={40}
                          height={40}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm mobile-heading group-hover:text-red-600 transition-colors">{story.name}</h4>
                        <p className="text-sm text-gray-600 mobile-readable">{story.role}</p>
                        <p className="text-xs text-gray-500 mobile-readable">{story.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-black mobile-section">
        <div className="max-w-7xl mx-auto mobile-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl"
          >
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 mobile-heading">
                  Ready to Start Your <span className="text-white/90">Cybersecurity Career?</span>
                </h3>
                <p className="text-base sm:text-lg mb-6 opacity-90 mobile-readable">
                  Join our 6-month internship program and get hands-on experience with real-world projects, 
                  expert mentorship, and industry-ready skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 font-semibold px-6 sm:px-8 py-2 sm:py-3 mobile-button mobile-touch-target shadow-lg hover:shadow-white/25 transition-all duration-300">
                    Apply for Internship
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 mobile-button mobile-touch-target shadow-lg hover:shadow-white/25 transition-all duration-300">
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-48 sm:h-64 rounded-xl overflow-hidden order-first md:order-last group"
              >
                <Image
                  src="/last.png"
                  alt="Cybersecurity internship success"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}