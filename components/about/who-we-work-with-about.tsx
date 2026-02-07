"use client"

import { motion } from "framer-motion"
import { Users, Landmark, Building2, Briefcase } from "lucide-react"
import { scaleIn, staggerContainer, fadeUp, defaultTransition } from "@/lib/motion"

const segments = [
  { icon: Users, title: "Individual buyers & investors" },
  { icon: Landmark, title: "Landowners" },
  { icon: Building2, title: "Developers & promoters" },
  { icon: Briefcase, title: "Corporates, startups & occupiers" },
]

export function WhoWeWorkWithAbout() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-[#C5A065] text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Our Clients
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-[var(--font-heading)]"
          >
            Who We Work With
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-lg text-charcoal/60"
          >
            Client Segments
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-12"
        >
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
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
                  boxShadow: "0 20px 40px rgba(197, 160, 101, 0.15)",
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="relative flex items-center gap-5 bg-white border border-charcoal/8 rounded-2xl p-6 hover:border-[#C5A065]/30 transition-colors duration-300 overflow-hidden group"
              >
                {/* Gold bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C5A065]/0 via-[#C5A065] to-[#C5A065]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#C5A065]/10 flex items-center justify-center group-hover:bg-[#C5A065]/20 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-[#C5A065]" />
                </div>
                <span className="text-charcoal font-semibold text-lg">
                  {segment.title}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/60 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Our advisory model adapts to{" "}
          <strong className="text-charcoal">
            each client&apos;s objective, timeline, and risk profile
          </strong>
          .
        </motion.p>
      </div>
    </section>
  )
}
