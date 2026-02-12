"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Landmark, Building2, Briefcase } from "lucide-react"
import { scaleIn, staggerContainer } from "@/lib/motion"

const clients = [
  { icon: Users, text: "Individual homebuyers" },
  { icon: TrendingUp, text: "Real estate investors" },
  { icon: Landmark, text: "Landowners" },
  { icon: Building2, text: "Developers & promoters" },
  { icon: Briefcase, text: "Corporates & business occupiers" },
]

export function ContactAudience() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Who Should Contact Us
          </h2>
          <p className="text-lg text-charcoal/70">We Work With</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-3 mb-8"
        >
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="flex items-center gap-4 bg-off-white border border-charcoal/10 rounded-xl p-4 hover:shadow-lg hover:border-[#C5A065]/30 transition-all duration-300 border-b-2 border-b-[#C5A065]/50 cursor-pointer"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C5A065]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A065]" />
                </div>
                <span className="text-charcoal/80 font-medium">{client.text}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 max-w-2xl mx-auto"
        >
          Our advisory is customized to{" "}
          <strong className="text-charcoal">
            each client&apos;s goals and investment horizon
          </strong>
          .
        </motion.p>
      </div>
    </section>
  )
}
