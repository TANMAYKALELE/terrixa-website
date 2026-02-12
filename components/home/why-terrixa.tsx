"use client"

import { motion } from "framer-motion"
import { Search, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

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
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#C5A065] rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C5A065] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[var(--font-heading)]">
            Why Terrixa Realty
          </h2>
          <p className="text-lg text-white/60 tracking-wide">What Sets Us Apart</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto mb-12"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="h-full bg-white/5 backdrop-blur-[2px] md:backdrop-blur-sm border border-[#C5A065]/20 rounded-xl p-6 hover:bg-white/10 hover:border-[#C5A065]/40 transition-all duration-300 group flex flex-col justify-center min-h-[120px] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
                style={{ willChange: 'transform' }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C5A065]/20 flex items-center justify-center group-hover:bg-[#C5A065]/30 transition-colors duration-300 border border-[#C5A065]/30">
                    <Icon className="h-5 w-5 text-[#C5A065]" />
                  </div>
                  <span className="text-white/90 font-medium text-base leading-snug">{item.text}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/70 max-w-2xl mx-auto text-lg"
        >
          We don&apos;t just facilitate transactions — <strong className="text-white font-semibold">we help clients make better property decisions</strong>.
        </motion.p>
      </div>
    </section>
  )
}
