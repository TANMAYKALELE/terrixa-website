"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { scaleIn, staggerContainer } from "@/lib/motion"

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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px rgba(197,160,101,0.15)",
                borderColor: "rgba(197,160,101,0.4)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#C5A065]/10 flex items-center justify-center">
                <CheckCircle className="h-7 w-7 text-[#C5A065]" />
              </div>
              <span className="text-white/90 font-medium text-base leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
