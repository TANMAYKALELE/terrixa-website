"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Building2, Briefcase, BarChart3, MapPin } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion"

const verticals = [
  {
    icon: Home,
    shortTitle: "Residential Sales",
    title: "Residential Sales & Channel Partner Management",
    description:
      "Terrixa Realty provides comprehensive support for primary and secondary residential sales, working closely with developers, channel partners, and individual clients.",
    listTitle: "Our residential sales advisory includes:",
    items: [
      "Primary project sales strategy",
      "Channel partner coordination & management",
      "Inventory positioning & pricing advisory",
      "Buyer profiling & closing support",
      "Transaction documentation coordination",
    ],
    closing:
      "We focus on efficient execution and realistic pricing aligned with market conditions.",
  },
  {
    icon: Building2,
    shortTitle: "Broking",
    title: "Residential Broking",
    description:
      "Our residential broking services cater to homebuyers and investors across apartments, villas, plotted developments, and lifestyle properties.",
    listTitle: "We assist clients with:",
    items: [
      "Requirement mapping & property shortlisting",
      "Comparative market pricing analysis",
      "Legal & technical coordination",
      "Negotiation strategy & closure support",
    ],
    closing:
      "Every residential transaction is handled with market intelligence and transparency.",
  },
  {
    icon: Briefcase,
    shortTitle: "Commercial",
    title: "Commercial Leasing & Tenant Representation",
    description:
      "We advise occupiers, landlords, and investors on commercial leasing and tenant representation, particularly across Pune's key business corridors.",
    listTitle: "Our commercial advisory covers:",
    items: [
      "Office, retail & mixed-use leasing",
      "Tenant representation & expansion planning",
      "Lease structuring & negotiations",
      "Market rentals & benchmarking analysis",
    ],
    closing: "Our focus is to align space, cost, and business strategy.",
  },
  {
    icon: BarChart3,
    shortTitle: "Research",
    title: "Research, Valuation & Market Intelligence",
    description: "Research is central to our advisory.",
    listTitle: "Our intelligence services include:",
    items: [
      "Residential & commercial property valuation",
      "Land feasibility & investment analysis",
      "Location-specific market studies",
      "Demand-supply & pricing trends",
    ],
    closing:
      "This enables clients to make fact-based and defensible real estate decisions.",
  },
  {
    icon: MapPin,
    shortTitle: "Land Advisory",
    title: "Land Broking & Advisory",
    description:
      "Terrixa Realty has strong expertise in land sourcing and land broking across Karjat, Pawna, Kamshet, Lonavala, and Khandala.",
    listTitle: "Our land advisory includes:",
    items: [
      "Title & ownership review",
      "Zoning and regulatory understanding",
      "Development potential assessment",
      "Strategic acquisition advisory",
    ],
    closing:
      "We work only with clear-title, investment-grade land parcels.",
  },
]

export function AdvisoryVerticals() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-white">
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
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-[var(--font-heading)]"
          >
            Our Core Advisory Verticals
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Headers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            {/* Mobile: 2+3 grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-3">
              {verticals.map((vertical, index) => {
                const Icon = vertical.icon
                const isActive = activeTab === index
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-[#C5A065]/10 border-[#C5A065]/40 shadow-md"
                        : "bg-off-white border-charcoal/8 hover:border-[#C5A065]/20"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isActive ? "text-[#C5A065]" : "text-charcoal/40"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold text-center transition-colors duration-300 ${
                        isActive ? "text-[#C5A065]" : "text-charcoal/60"
                      }`}
                    >
                      {vertical.shortTitle}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabMobile"
                        className="absolute inset-0 rounded-xl border-2 border-[#C5A065]/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Desktop: horizontal scroll row */}
            <div className="hidden md:flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {verticals.map((vertical, index) => {
                const Icon = vertical.icon
                const isActive = activeTab === index
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`relative flex items-center gap-3 px-6 py-4 rounded-xl border whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-[#C5A065]/10 border-[#C5A065]/40 shadow-md"
                        : "bg-off-white border-charcoal/8 hover:border-[#C5A065]/20 hover:bg-[#C5A065]/5"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 flex-shrink-0 ${
                        isActive ? "text-[#C5A065]" : "text-charcoal/40"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#C5A065]" : "text-charcoal/60"
                      }`}
                    >
                      {vertical.shortTitle}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabDesktop"
                        className="absolute inset-0 rounded-xl border-2 border-[#C5A065]/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Tab Content Panel */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {verticals.map((vertical, index) => {
                if (index !== activeTab) return null
                const Icon = vertical.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-off-white border border-charcoal/8 rounded-2xl p-8 md:p-10"
                  >
                    {/* Icon + Title */}
                    <div className="flex items-start gap-5 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#C5A065]/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-[#C5A065]" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-charcoal font-[var(--font-heading)] leading-tight">
                          {vertical.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-charcoal/70 mb-6 leading-relaxed text-base">
                      {vertical.description}
                    </p>

                    {/* List Title */}
                    <p className="text-charcoal/80 font-semibold mb-4 text-sm tracking-wide uppercase">
                      {vertical.listTitle}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-3 mb-8">
                      {vertical.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                          className="flex items-start gap-3 text-charcoal/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A065] mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Closing Statement */}
                    <div className="pt-6 border-t border-charcoal/8">
                      <p className="text-charcoal font-semibold leading-relaxed">
                        {vertical.closing}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
