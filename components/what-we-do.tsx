"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "@/lib/motion"

const services = [
  {
    id: "aggregation",
    number: "01",
    title: "AGGREGATION & BROKING",
    description:
      "We work closely with landowners, investors, and developers to aggregate land parcels for future residential or mixed-use development, strategic land banking, and large-format investment opportunities.\n\nOur aggregation approach ensures consolidated, development-ready land, reduced fragmentation risk, better pricing alignment, and single-point advisory and execution.\n\nThis service is particularly suited for developers and serious investors.",
    image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "plotting",
    number: "02",
    title: "PLOTTING",
    description:
      "We advise on residential and lifestyle plotting opportunities in high-demand and emerging destinations such as Karjat, Pawna, Kamshet, Lonavala, and Khandala.\n\nOur plotting advisory covers location growth and demand analysis, title, zoning, and documentation verification, plot layout and access evaluation, and pricing, appreciation, and exit assessment.\n\nEvery plotting opportunity is evaluated for legal clarity, usability, and long-term value creation.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "trading",
    number: "03",
    title: "TRADING",
    description:
      "Terrixa Realty facilitates direct land and property transactions for clients seeking efficient, transparent, and well-structured deals.\n\nOur trading services include curated and off-market opportunities, fair market valuation and benchmarking, negotiation and transaction structuring, and end-to-end execution support.\n\nWe focus on capital protection, realistic pricing, and clean closures.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Our Core Land Services
          </h2>
          <p className="text-lg text-charcoal/70">
            Focused Expertise Where It Matters Most
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -12, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-charcoal/5 hover:border-[#C5A065]/30"
              style={{ willChange: 'transform' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#C5A065] flex items-center justify-center text-white font-bold text-lg font-[var(--font-heading)] shadow-lg"
                >
                  {service.number}
                </motion.div>
              </div>

              <div className="p-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-[#C5A065] to-transparent mb-5"
                />
                <h3 className="text-lg font-bold text-[#C5A065] mb-4 font-[var(--font-heading)]">
                  {service.title}
                </h3>
                <div className="text-charcoal/70 leading-relaxed text-sm whitespace-pre-line">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
