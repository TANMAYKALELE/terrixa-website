"use client"

import { motion } from "framer-motion"
import { BarChart3, DollarSign, Search, ShieldCheck, Handshake } from "lucide-react"

const services = [
  { icon: BarChart3, text: "Market overview and demand assessment" },
  { icon: DollarSign, text: "Pricing and valuation benchmarks" },
  { icon: Search, text: "Property and land shortlisting" },
  { icon: ShieldCheck, text: "Risk and regulatory review" },
  { icon: Handshake, text: "Negotiation and transaction support" },
]

export function HowWeAdvise() {
  return (
    <section className="py-16 md:py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            How We Advise Across Markets
          </h2>
          <p className="text-lg text-white/70">
            Market-Specific Advisory Approach
          </p>
          <p className="text-white/60 mt-4 max-w-3xl mx-auto">
            For each location, Terrixa Realty provides:
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {services.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-white/90 font-medium">{item.text}</span>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/70 max-w-2xl mx-auto"
        >
          This ensures <strong className="text-white">location-specific strategies</strong> tailored to client objectives.
        </motion.p>
      </div>
    </section>
  )
}
