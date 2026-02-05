"use client"

import { Phone, Mail, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ContactSidebar() {
  const benefits = [
    "Local market specialists",
    "Research-led recommendations",
    "Clear documentation process",
    "Confidential handling",
  ]

  const process = [
    { title: "Requirement Review", desc: "We understand your objectives" },
    { title: "Advisor Assignment", desc: "Connect with market experts" },
    { title: "Consultation Call", desc: "Discuss options and pricing" },
    { title: "Property Strategy", desc: "Execute with full support" },
  ]

  const markets = [
    "Karjat",
    "Lonavala",
    "Khandala",
    "Kamshet",
    "Pawna",
    "Pune",
    "Hinjewadi",
    "Wakad",
    "Ravet",
    "Talegaon",
  ]

  return (
    <div className="space-y-6">
      <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white font-[var(--font-heading)]">Why Terrixa Realty</h3>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 text-white/70">
              <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white font-[var(--font-heading)]">Direct Contact</h3>
        <div className="space-y-4">
          <Link
            href="tel:+919930070767"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-gold/10 border border-white/10 hover:border-gold/30 transition-all group"
          >
            <div className="p-2 rounded-full bg-gold/20 group-hover:bg-gold/30 transition-colors">
              <Phone className="h-4 w-4 text-gold" />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-0.5">Call Us</p>
              <p className="text-white font-medium">+91 9930070767</p>
            </div>
          </Link>

          <Link
            href="mailto:bd@terrixa.com"
            className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-gold/10 border border-white/10 hover:border-gold/30 transition-all group"
          >
            <div className="p-2 rounded-full bg-gold/20 group-hover:bg-gold/30 transition-colors">
              <Mail className="h-4 w-4 text-gold" />
            </div>
            <div>
              <p className="text-xs text-white/50 mb-0.5">Email Us</p>
              <p className="text-white font-medium">bd@terrixa.com</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white font-[var(--font-heading)]">What Happens Next</h3>
        <ol className="space-y-4">
          {process.map((step, index) => (
            <li key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                <p className="text-white/60 text-xs">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold mb-4 text-white font-[var(--font-heading)]">Markets We Serve</h3>
        <div className="flex flex-wrap gap-2">
          {markets.map((market, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all cursor-default"
            >
              {market}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
