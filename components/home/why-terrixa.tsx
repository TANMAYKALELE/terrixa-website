"use client"

import { motion } from "framer-motion"
import { Search, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react"

const differentiators = [
  {
    icon: Search,
    text: "Research-led advisory approach",
  },
  {
    icon: MapPin,
    text: "Deep local market understanding",
  },
  {
    icon: ShieldCheck,
    text: "Strong focus on legal clarity and risk mitigation",
  },
  {
    icon: Users,
    text: "Transparent, client-first processes",
  },
  {
    icon: ArrowRight,
    text: "End-to-end support from strategy to execution",
  },
]

export function WhyTerrixa() {
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
            Why Terrixa Realty
          </h2>
          <p className="text-lg text-white/70">What Sets Us Apart</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          {differentiators.map((item, index) => {
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
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
          We don't just facilitate transactions — <strong className="text-white">we help clients make better property decisions</strong>.
        </motion.p>
      </div>
    </section>
  )
}
