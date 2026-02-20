"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Building2, Briefcase, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Sales & Channel Partner Management",
    items: [
      "Market-aligned pricing strategies",
      "Structured sales processes",
      "Buyer qualification and requirement mapping",
      "Efficient deal closures",
    ],
    closing: "Our focus is on realistic absorption, transparent communication, and long-term brand value.",
  },
  {
    icon: Building2,
    title: "Residential Broking",
    items: [
      "Property discovery and shortlisting",
      "Comparative market analysis",
      "Negotiation support",
      "Transaction coordination",
    ],
    closing: "Every recommendation is backed by pricing logic and market insight.",
  },
  {
    icon: Briefcase,
    title: "Commercial Leasing & Tenant Representation",
    items: [
      "Office and retail leasing advisory",
      "Tenant representation",
      "Rental benchmarking and market studies",
      "Lease structuring and negotiation",
    ],
    closing: "We align real estate decisions with business objectives.",
  },
  {
    icon: BarChart3,
    title: "Research, Valuation & Market Intelligence",
    items: [
      "Land and property valuation",
      "Location-specific feasibility studies",
      "Demand-supply and pricing trend analysis",
      "Investment risk assessment",
    ],
    closing: "This ensures our clients make informed, defensible, and future-ready property decisions.",
  },
]

export function IntegratedServices() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Integrated Real Estate Advisory Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Beyond Land — Complete Property Advisory
          </p>
          <p className="text-charcoal/60 mt-3 max-w-3xl mx-auto">
            Once the land foundation is clear, our advisory seamlessly extends into residential and commercial real estate, allowing clients to scale their property strategy with continuity and confidence.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex md:grid md:grid-cols-4 gap-3 mb-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = activeIndex === index
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer flex-shrink-0 w-[140px] md:w-auto snap-center ${
                    isActive
                      ? "border-[#C5A065] bg-[#C5A065]/5 shadow-lg"
                      : "border-charcoal/10 bg-off-white hover:border-[#C5A065]/30 hover:bg-[#C5A065]/5"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "bg-[#C5A065]/20" : "bg-charcoal/5"
                  }`}>
                    <Icon className={`h-6 w-6 transition-colors duration-300 ${
                      isActive ? "text-[#C5A065]" : "text-charcoal/50"
                    }`} />
                  </div>
                  <span className={`text-xs md:text-sm font-semibold text-center leading-tight transition-colors duration-300 font-[var(--font-heading)] ${
                    isActive ? "text-charcoal" : "text-charcoal/60"
                  }`}>
                    {service.title.split(" & ")[0]}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-[#C5A065] rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-off-white border border-charcoal/10 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#C5A065]/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = services[activeIndex].icon
                    return <Icon className="h-7 w-7 text-[#C5A065]" />
                  })()}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-charcoal font-[var(--font-heading)]">
                  {services[activeIndex].title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {services[activeIndex].items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-3 bg-white border border-charcoal/5 rounded-xl p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#C5A065] flex-shrink-0" />
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-charcoal/70 text-sm border-t border-charcoal/10 pt-4">
                <strong className="text-charcoal">{services[activeIndex].closing}</strong>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
