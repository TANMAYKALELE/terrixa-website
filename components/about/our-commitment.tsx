"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { scaleIn, staggerContainer, fadeUp, defaultTransition } from "@/lib/motion"

const commitments = [
  "Ethical advisory practices",
  "Transparent communication",
  "Research-backed recommendations",
  "Long-term client relationships",
]

export function OurCommitment() {
  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#C5A065]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C5A065]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-[#C5A065] text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Our Commitment
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[var(--font-heading)]"
          >
            Professional. Transparent. Insight-Driven.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Terrixa Realty is committed to:
          </motion.p>
        </motion.div>

        {/* 2x2 Grid of Glass Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto"
        >
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 40px rgba(197, 160, 101, 0.15), 0 0 80px rgba(197, 160, 101, 0.05)",
                borderColor: "rgba(197, 160, 101, 0.3)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-300 group"
            >
              {/* Large CheckCircle Icon */}
              <div className="mb-6 relative">
                <CheckCircle2 className="h-12 w-12 text-[#C5A065] transition-transform duration-300 group-hover:scale-110" />
                {/* Gold glow behind icon on hover */}
                <div className="absolute inset-0 bg-[#C5A065]/0 group-hover:bg-[#C5A065]/20 rounded-full blur-xl transition-all duration-500 scale-150" />
              </div>

              {/* Text */}
              <span className="text-white/90 font-semibold text-lg leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
