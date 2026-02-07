"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, ShieldCheck, Handshake, HeadphonesIcon } from "lucide-react"

const steps = [
  { icon: Search, title: "Market Research & Location Analysis" },
  { icon: BarChart3, title: "Asset Evaluation & Pricing Assessment" },
  { icon: ShieldCheck, title: "Risk Identification & Due Diligence" },
  { icon: Handshake, title: "Negotiation & Transaction Management" },
  { icon: HeadphonesIcon, title: "Post-Transaction Support" },
]

export function OurApproach() {
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
            Our Approach
          </h2>
          <p className="text-lg text-charcoal/70">How We Work</p>
          <p className="text-charcoal/70 mt-4 max-w-3xl mx-auto">
            Our advisory process is designed to protect client interests and enhance long-term value.
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
            We follow a structured approach:
          </motion.p>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-charcoal font-semibold">{step.title}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-charcoal/70 max-w-3xl mx-auto"
        >
          This ensures each transaction is <strong className="text-charcoal">well-evaluated, compliant, and strategically sound</strong>.
        </motion.p>
      </div>
    </section>
  )
}
