"use client"

import { motion } from "framer-motion"
import { Search, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const differentiators = [
  {
    icon: Search,
    text: "Research-led advisory approach",
    span: "md:col-span-2",
  },
  {
    icon: MapPin,
    text: "Deep local market understanding",
    span: "",
  },
  {
    icon: ShieldCheck,
    text: "Strong focus on legal clarity and risk mitigation",
    span: "",
  },
  {
    icon: Users,
    text: "Transparent, client-first processes",
    span: "",
  },
  {
    icon: ArrowRight,
    text: "End-to-end support from strategy to execution",
    span: "md:col-span-2",
  },
]

export function WhyTerrixa() {
  return (
    <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
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
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Why Terrixa Realty
          </h2>
          <p className="text-lg text-white/60">What Sets Us Apart</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C5A065]/30 transition-all duration-500 group ${item.span}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A065]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C5A065]/20 flex items-center justify-center group-hover:bg-[#C5A065]/30 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-[#C5A065]" />
                  </div>
                  <span className="text-white/90 font-medium text-lg">{item.text}</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A065]/50 to-transparent rounded-b-2xl"
                />
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/70 max-w-2xl mx-auto"
        >
          We don&apos;t just facilitate transactions — <strong className="text-white">we help clients make better property decisions</strong>.
        </motion.p>
      </div>
    </section>
  )
}
