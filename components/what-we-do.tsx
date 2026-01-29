"use client"

import { motion } from "framer-motion"

const services = [
  {
    id: "aggregation",
    title: "Aggregation",
    subtitle: "Strategic Land Aggregation",
    description:
      "We work closely with landowners, investors, and developers to aggregate land parcels for future residential or mixed-use development. Our approach ensures consolidated, clean-title land with reduced fragmentation risk.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "plotting",
    title: "Plotting",
    subtitle: "Premium Plotting Advisory",
    description:
      "We advise on lifestyle plotting opportunities in high-demand markets like Karjat, Pawna, and Lonavala. Every opportunity is evaluated for legal clarity, zoning, and long-term value creation.",
    image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "trading",
    title: "Trading",
    subtitle: "Direct Transaction & Trading",
    description:
      "Facilitating direct land and property transactions for clients seeking efficient, transparent deals. We focus on capital protection, realistic pricing, and clean closures.",
    image: "https://images.pexels.com/photos/7907676/pexels-photo-7907676.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-12 font-[var(--font-heading)]"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-charcoal/5 hover:border-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gold mb-2 font-[var(--font-heading)]">
                  {service.title}
                </h3>
                <h4 className="text-sm font-semibold text-charcoal/60 mb-3 uppercase tracking-wide">
                  {service.subtitle}
                </h4>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
