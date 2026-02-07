"use client"

import { motion } from "framer-motion"
import { BarChart3, MapPin, TrendingUp, ShieldCheck } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Land and property valuation",
  },
  {
    icon: MapPin,
    title: "Location-specific feasibility studies",
  },
  {
    icon: TrendingUp,
    title: "Demand-supply and pricing trend analysis",
  },
  {
    icon: ShieldCheck,
    title: "Investment risk assessment",
  },
]

export function ResearchValuation() {
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
            Research, Valuation & Market Intelligence
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Data That Drives Better Decisions
          </p>
          <p className="text-charcoal/70 mt-4 max-w-3xl mx-auto">
            Research is central to everything we do.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-charcoal/70 text-center mb-8"
          >
            We provide:
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-4 bg-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-charcoal font-medium text-sm">{service.title}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 max-w-3xl mx-auto"
        >
          This ensures our clients make <strong className="text-charcoal">informed, defensible, and future-ready property decisions</strong>.
        </motion.p>
      </div>
    </section>
  )
}
