"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Landmark, Building2, Briefcase } from "lucide-react"

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

        <div className="max-w-2xl mx-auto space-y-3 mb-8">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 bg-off-white border border-charcoal/10 rounded-xl p-4 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-gold" />
                </div>
                <span className="text-charcoal/80 font-medium">{client.text}</span>
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
          Our advisory is customized to <strong className="text-charcoal">each client's goals and investment horizon</strong>.
        </motion.p>
      </div>
    </section>
  )
}
