"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Local market specialists",
  "Research-led recommendations",
  "Clear documentation and process",
  "Confidential and professional handling",
]

export function WhySpeak() {
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
            Why Speak With Terrixa Realty
          </h2>
          <p className="text-lg text-white/70">
            Trusted Advisory. Transparent Execution.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
              <span className="text-white/90 font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
