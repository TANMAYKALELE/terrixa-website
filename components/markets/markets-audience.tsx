"use client"

import { motion } from "framer-motion"
import { TrendingUp, Home, Building2, Briefcase } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const audiences = [
  { icon: TrendingUp, text: "Land investors exploring growth corridors" },
  { icon: Home, text: "Homebuyers seeking the right location" },
  { icon: Building2, text: "Developers evaluating feasibility" },
  { icon: Briefcase, text: "Corporates and businesses planning expansion" },
]

export function MarketsAudience() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Who This Page Is For
          </h2>
          <p className="text-lg text-white/60">
            Clients Who Benefit from Our Market Expertise
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {audiences.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 overflow-hidden"
              >
                {/* Gold gradient accent bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A065] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A065] to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C5A065]/15 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A065]" />
                </div>
                <span className="text-white/80 font-medium">{item.text}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
