"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Shield,
  Users,
  CreditCard,
  ExternalLink,
  Scale,
  RefreshCw,
} from "lucide-react"

export default function TermsAndConditions() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const sections = [
    {
      id: "eligibility",
      title: "Eligibility and Enrollment",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">You must be at least 18 years of age to enroll in our training programs.</p>
          <p className="text-gray-700 leading-relaxed">
            Some advanced programs may require prior technical knowledge or experience in cybersecurity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Corporate training programs require valid business credentials and authorization to act on behalf of the organization.
          </p>
        </div>
      ),
    },
    {
      id: "scope",
      title: "Training Programs and Services",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">HacFy Trainings provides comprehensive cybersecurity education through:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Workshops (2-Day, 3-Day, and 5-Day intensive programs)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Bootcamps (1-Week Intensive and 45-Day Professional Sprint)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              6-Month Internship Programs with 1:1 mentorship
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Corporate Training and customized programs
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Online and in-person training sessions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Certification programs and career guidance
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We may update or modify our training programs at any time to reflect industry best practices and emerging threats.
          </p>
        </div>
      ),
    },
    {
      id: "responsibilities",
      title: "Student Responsibilities and Code of Conduct",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed mb-4">As a student, you agree to:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Attend all scheduled sessions and complete assignments on time
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Maintain professional conduct during training sessions and labs
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use acquired skills only for legitimate, authorized purposes
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Respect intellectual property rights and maintain confidentiality
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Follow all lab safety protocols and ethical guidelines
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Not engage in any illegal or unauthorized activities
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            All training materials, course content, software, and documentation provided by HacFy Trainings are protected by intellectual property laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may not copy, distribute, or share training materials without explicit written permission.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Students retain ownership of their original work but grant HacFy Trainings a license to use such work for educational and promotional purposes.
          </p>
        </div>
      ),
    },
    {
      id: "payments",
      title: "Payment Terms and Refund Policy",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Full payment is required before program commencement. Late payments may result in program access suspension.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Refund Policy:</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Full refund if cancellation is made 7 days before program start</li>
              <li>• 50% refund if cancellation is made 3-6 days before program start</li>
              <li>• No refund for cancellations made less than 3 days before start</li>
              <li>• No refund after program commencement</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Refunds will be processed within 10-15 business days to the original payment method.
          </p>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Links and Resources",
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party websites, tools, or resources. HacFy Trainings is not responsible for the accuracy, content, or practices of such third parties.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use of third-party tools and resources during training is at your own risk and subject to their respective terms of service.
          </p>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">HacFy Trainings provides education on a professional best-effort basis.</p>
          <p className="text-gray-700 leading-relaxed">
            We make no guarantee that our training will prevent all cybersecurity incidents or ensure job placement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We shall not be liable for any actions taken by students using skills learned in our programs or for indirect, incidental, or consequential damages.
          </p>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "Indemnification",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify and hold harmless HacFy Trainings, its employees, and partners from any claims or damages arising from misuse of our training materials or violation of these Terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This includes any unauthorized use of skills learned in our programs for illegal or harmful purposes.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "Governing Law and Jurisdiction",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by the laws of India, with exclusive jurisdiction of the courts of Karnataka, India.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Any disputes arising from these Terms or our training programs shall be resolved through binding arbitration in accordance with Indian law.
          </p>
        </div>
      ),
    },
    {
      id: "amendments",
      title: "Changes to Terms",
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We may revise these Terms at any time to reflect changes in our training programs or legal requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Updated Terms will be posted on our website. Continued enrollment in our programs constitutes acceptance of the revised Terms.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-white via-red-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             Please read these terms and conditions carefully before enrolling in our training programs
           </p>
           <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
             <p className="text-gray-700 leading-relaxed">
               Welcome to <span className="font-semibold text-red-600">HacFy Trainings</span> ("Company," "we," "our," or "us").
               These Terms & Conditions ("Terms") govern your enrollment in and participation in our cybersecurity training programs, 
               including workshops, bootcamps, internships, corporate training, and related educational services
               (collectively, the "Training Programs").
             </p>
             <p className="text-gray-700 leading-relaxed mt-4">
               <strong>
                 By enrolling in our Training Programs or using our website, you agree to comply with these Terms. If you do not agree, you must
                 discontinue enrollment and use immediately.
               </strong>
             </p>
           </div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            const isExpanded = expandedSection === section.id

            return (
              <div key={section.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                   
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {index + 1}. {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">{section.content}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

         {/* Contact Section */}
         <div className="mt-16 bg-gradient-to-r from-red-50 to-white p-8 rounded-lg border border-red-100">
           <div className="text-center">
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
               If you have any questions about these Terms & Conditions or our training programs, please don't hesitate to contact us.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                 href="/contact"
                 className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
               >
                 Contact Us
               </a>
               <a
                 href="mailto:trainings@hacfy.com"
                 className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-medium rounded-lg border border-red-600 hover:bg-red-50 transition-colors duration-200"
               >
                 Email Us
               </a>
             </div>
             <div className="mt-6 text-sm text-gray-600">
               <p>📞 Phone: +91 8660767853</p>
               <p>📍 Address: Alva's Technology Centre, Mijar - Moodabidre 574225</p>
             </div>
           </div>
         </div>

         {/* Last Updated */}
         <div className="mt-8 text-center text-sm text-gray-500">
           <p>Last updated: January 24, 2025</p>
         </div>
      </div>
    </div>
  )
}