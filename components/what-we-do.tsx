"use client"

import { motion } from "framer-motion"

const services = [
  {
    id: "aggregation",
    title: "AGGREGATION & BROKING",
    subtitle: "",
    description:
      "We work closely with landowners, investors, and developers to aggregate land parcels for:\n• Future residential or mixed-use development\n• Strategic land banking\n• Large-format investment opportunities\n\nOur aggregation approach ensures:\n• Consolidated, development-ready land\n• Reduced fragmentation risk\n• Better pricing alignment\n• Single-point advisory and execution\n\nThis service is particularly suited for developers and serious investors.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "plotting",
    title: "PLOTTING",
    subtitle: "",
    description:
      "We advise on residential and lifestyle plotting opportunities in high-demand and emerging destinations such as Karjat, Pawna, Kamshet, Lonavala, and Khandala.\n\nOur plotting advisory covers:\n• Location growth and demand analysis\n• Title, zoning, and documentation verification\n• Plot layout and access evaluation\n• Pricing, appreciation, and exit assessment\n\nEvery plotting opportunity is evaluated for legal clarity, usability, and long-term value creation.",
    image: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "trading",
    title: "TRADING",
    subtitle: "",
    description:
      "Terrixa Realty facilitates direct land and property transactions for clients seeking efficient, transparent, and well-structured deals.\n\nOur trading services include:\n• Curated and off-market opportunities\n• Fair market valuation and benchmarking\n• Negotiation and transaction structuring\n• End-to-end execution support\n\nWe focus on capital protection, realistic pricing, and clean closures.",
    image: "https://images.pexels.com/photos/7907676/pexels-photo-7907676.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Our Core Land Services
          </h2>
          <p className="text-lg text-charcoal/70">
            Focused Expertise Where It Matters Most
          </p>
        </motion.div>

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
                <h3 className="text-lg font-bold text-gold mb-4 font-[var(--font-heading)]">
                  {service.title}
                </h3>
                <div className="text-charcoal/70 leading-relaxed text-sm whitespace-pre-line">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
