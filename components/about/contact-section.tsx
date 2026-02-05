"use client"

import { ConsultationForm } from "./consultation-form"
import { ContactSidebar } from "./contact-sidebar"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-charcoal to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-[var(--font-heading)]">
              Let's Discuss Your Property Goals
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto">
              Share your requirements and our advisors will connect with you for a focused consultation tailored to
              your objectives and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ConsultationForm />
            </div>
            <div className="lg:col-span-1">
              <ContactSidebar />
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center gap-2 text-sm text-white/50">
              <span>We work with</span>
              <span className="text-white/70 font-medium">Investors</span>
              <span>•</span>
              <span className="text-white/70 font-medium">Homebuyers</span>
              <span>•</span>
              <span className="text-white/70 font-medium">Landowners</span>
              <span>•</span>
              <span className="text-white/70 font-medium">Developers</span>
              <span>•</span>
              <span className="text-white/70 font-medium">Businesses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
