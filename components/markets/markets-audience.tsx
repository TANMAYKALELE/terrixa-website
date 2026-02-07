"use client"

import { motion } from "framer-motion"
import { TrendingUp, Home, Building2, Briefcase } from "lucide-react"

const audiences = [
  { icon: TrendingUp, text: "Land investors exploring growth corridors" },
  { icon: Home, text: "Homebuyers seeking the right location" },
  { icon: Building2, text: "Developers evaluating feasibility" },
  { icon: Briefcase, text: "Corporates and businesses planning expansion" },
]

export function MarketsAudience() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Who This Page Is For
          </h2>
          <p className="text-lg text-charcoal/70">
            Clients Who Benefit from Our Market Expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-off-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-charcoal/80 font-medium">{item.text}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
