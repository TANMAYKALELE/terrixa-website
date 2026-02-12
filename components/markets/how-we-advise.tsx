"use client"

import { motion } from "framer-motion"
import { BarChart3, DollarSign, Search, ShieldCheck, Handshake } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const services = [
  { icon: BarChart3, title: "Market overview and demand assessment" },
  { icon: DollarSign, title: "Pricing and valuation benchmarks" },
  { icon: Search, title: "Property and land shortlisting" },
  { icon: ShieldCheck, title: "Risk and regulatory review" },
  { icon: Handshake, title: "Negotiation and transaction support" },
]

export function HowWeAdvise() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
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
            How We Advise Across Markets
          </h2>
          <p className="text-lg text-white/60">
            Market-Specific Advisory Approach
          </p>
          <p className="text-white/50 mt-4 max-w-3xl mx-auto">
            For each location, Terrixa Realty provides:
          </p>
        </motion.div>

        {/* 2x3 Glass Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-12"
        >
          {services.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{
                  borderColor: "rgba(197,160,101,0.5)",
                  boxShadow: "0 0 30px rgba(197,160,101,0.15)",
                }}
                className="group bg-white/5 backdrop-blur-[2px] md:backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/[0.08] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                style={{ willChange: 'transform' }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5A065]/20 to-[#E5C085]/10 flex items-center justify-center mb-5 group-hover:from-[#C5A065]/30 group-hover:to-[#E5C085]/20 transition-all duration-300">
                  <Icon className="h-8 w-8 text-[#C5A065]" />
                </div>
                <h3 className="text-white/90 font-semibold text-base leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/60 max-w-2xl mx-auto mt-12"
        >
          This ensures{" "}
          <strong className="text-white">location-specific strategies</strong>{" "}
          tailored to client objectives.
        </motion.p>
      </div>
    </section>
  )
}
