"use client"

import { motion } from "framer-motion"
import { Users, Landmark, Building2, Briefcase } from "lucide-react"

const segments = [
  { icon: Users, title: "Individual buyers & investors" },
  { icon: Landmark, title: "Landowners" },
  { icon: Building2, title: "Developers & promoters" },
  { icon: Briefcase, title: "Corporates, startups & occupiers" },
]

export function WhoWeWorkWithAbout() {
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
            Who We Work With
          </h2>
          <p className="text-lg text-charcoal/70">Client Segments</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-charcoal font-medium">{segment.title}</span>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 max-w-2xl mx-auto"
        >
          Our advisory model adapts to <strong className="text-charcoal">each client's objective, timeline, and risk profile</strong>.
        </motion.p>
      </div>
    </section>
  )
}
