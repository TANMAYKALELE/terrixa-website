"use client"

import { motion } from "framer-motion"
import { Route, Briefcase, Home, FileText, TrendingUp } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const criteria = [
  { icon: Route, text: "Connectivity and infrastructure development" },
  { icon: Briefcase, text: "Employment and commercial activity" },
  { icon: Home, text: "Residential and lifestyle demand" },
  { icon: FileText, text: "Regulatory environment and zoning" },
  { icon: TrendingUp, text: "Historical pricing and future growth indicators" },
]

export function MarketStrategy() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Our Market Strategy
          </h2>
          <p className="text-lg text-white/60">
            Why Location Matters in Real Estate Decisions
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-center mb-4 max-w-3xl mx-auto"
        >
          Location is the single most critical factor in determining{" "}
          <strong className="text-white">
            property value, rental demand, and long-term returns
          </strong>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-center mb-16 max-w-3xl mx-auto"
        >
          At Terrixa Realty, we assess each market based on:
        </motion.p>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden md:block max-w-6xl mx-auto relative">
          {/* Gold connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C5A065] to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-4"
          >
            {criteria.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node number */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-[#C5A065]/40 flex items-center justify-center relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C5A065]/20 to-[#E5C085]/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-[#C5A065]" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#C5A065] flex items-center justify-center z-20">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-white/80 text-sm font-medium leading-snug mt-2 max-w-[160px]">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Vertical Stack - Mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-4 max-w-md mx-auto"
        >
          {criteria.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#C5A065]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-[#C5A065]/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#C5A065]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C5A065] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{index + 1}</span>
                  </div>
                </div>
                <span className="text-white/80 font-medium text-sm">{item.text}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-white/60 mt-16 max-w-2xl mx-auto"
        >
          This ensures our clients invest in{" "}
          <strong className="text-white">locations with strong fundamentals</strong>, not
          speculation.
        </motion.p>
      </div>
    </section>
  )
}
