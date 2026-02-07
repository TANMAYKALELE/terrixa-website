"use client"

import { motion } from "framer-motion"
import { Home, Building2, Briefcase, BarChart3, MapPin } from "lucide-react"

const verticals = [
  {
    icon: Home,
    title: "Residential Sales & Channel Partner Management",
    description: "Terrixa Realty provides comprehensive support for primary and secondary residential sales, working closely with developers, channel partners, and individual clients.",
    listTitle: "Our residential sales advisory includes:",
    items: [
      "Primary project sales strategy",
      "Channel partner coordination & management",
      "Inventory positioning & pricing advisory",
      "Buyer profiling & closing support",
      "Transaction documentation coordination",
    ],
    closing: "We focus on efficient execution and realistic pricing aligned with market conditions.",
  },
  {
    icon: Building2,
    title: "Residential Broking",
    description: "Our residential broking services cater to homebuyers and investors across apartments, villas, plotted developments, and lifestyle properties.",
    listTitle: "We assist clients with:",
    items: [
      "Requirement mapping & property shortlisting",
      "Comparative market pricing analysis",
      "Legal & technical coordination",
      "Negotiation strategy & closure support",
    ],
    closing: "Every residential transaction is handled with market intelligence and transparency.",
  },
  {
    icon: Briefcase,
    title: "Commercial Leasing & Tenant Representation",
    description: "We advise occupiers, landlords, and investors on commercial leasing and tenant representation, particularly across Pune's key business corridors.",
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
    title: "Research, Valuation & Market Intelligence",
    description: "Research is central to our advisory.",
    listTitle: "Our intelligence services include:",
    items: [
      "Residential & commercial property valuation",
      "Land feasibility & investment analysis",
      "Location-specific market studies",
      "Demand-supply & pricing trends",
    ],
    closing: "This enables clients to make fact-based and defensible real estate decisions.",
  },
  {
    icon: MapPin,
    title: "Land Broking & Advisory",
    description: "Terrixa Realty has strong expertise in land sourcing and land broking across Karjat, Pawna, Kamshet, Lonavala, and Khandala.",
    listTitle: "Our land advisory includes:",
    items: [
      "Title & ownership review",
      "Zoning and regulatory understanding",
      "Development potential assessment",
      "Strategic acquisition advisory",
    ],
    closing: "We work only with clear-title, investment-grade land parcels.",
  },
]

export function AdvisoryVerticals() {
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
            Our Core Advisory Verticals
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-off-white border border-charcoal/10 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-charcoal font-[var(--font-heading)] pt-2">
                    {vertical.title}
                  </h3>
                </div>

                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  {vertical.description}
                </p>

                <p className="text-charcoal/80 font-semibold mb-3 text-sm">
                  {vertical.listTitle}
                </p>

                <ul className="space-y-2 mb-4">
                  {vertical.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal/70 text-sm">
                      <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-charcoal/70 text-sm">
                  <strong className="text-charcoal">{vertical.closing}</strong>
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
