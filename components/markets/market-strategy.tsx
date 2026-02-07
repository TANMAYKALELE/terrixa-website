"use client"

import { motion } from "framer-motion"
import { Route, Briefcase, Home, FileText, TrendingUp } from "lucide-react"

const criteria = [
  { icon: Route, text: "Connectivity and infrastructure development" },
  { icon: Briefcase, text: "Employment and commercial activity" },
  { icon: Home, text: "Residential and lifestyle demand" },
  { icon: FileText, text: "Regulatory environment and zoning" },
  { icon: TrendingUp, text: "Historical pricing and future growth indicators" },
]

export function MarketStrategy() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Our Market Strategy
          </h2>
          <p className="text-lg text-charcoal/70">
            Why Location Matters in Real Estate Decisions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-charcoal/70 text-center mb-4"
          >
            Location is the single most critical factor in determining <strong className="text-charcoal">property value, rental demand, and long-term returns</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/70 text-center mb-8"
          >
            At Terrixa Realty, we assess each market based on:
          </motion.p>

          <div className="space-y-4 mb-8">
            {criteria.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-charcoal/80 font-medium">{item.text}</span>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center text-charcoal/70"
          >
            This ensures our clients invest in <strong className="text-charcoal">locations with strong fundamentals</strong>, not speculation.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
