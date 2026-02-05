"use client"

import { motion } from "framer-motion"
import { Home, Building2, Briefcase, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Sales & Channel Partner Management",
    description:
      "We provide advisory and execution support for primary residential projects, working with developers and channel partners to ensure:\n• Market-aligned pricing strategies\n• Structured sales processes\n• Buyer qualification and requirement mapping\n• Efficient deal closures\n\nOur focus is on realistic absorption, transparent communication, and long-term brand value.",
  },
  {
    icon: Building2,
    title: "Residential Broking",
    description:
      "For homebuyers and investors, we offer residential broking services across:\n• Apartments\n• Villas\n• Plotted developments\n• Lifestyle and second homes\n\nOur residential advisory includes:\n• Property discovery and shortlisting\n• Comparative market analysis\n• Negotiation support\n• Transaction coordination\n\nEvery recommendation is backed by pricing logic and market insight.",
  },
  {
    icon: Briefcase,
    title: "Commercial Leasing & Tenant Representation",
    description:
      "Terrixa Realty advises landlords, occupiers, and investors on commercial leasing strategies, particularly in Hinjewadi, Wakad, Ravet, Talegaon, and Pune city.\n\nOur services include:\n• Office and retail leasing advisory\n• Tenant representation\n• Rental benchmarking and market studies\n• Lease structuring and negotiation\n\nWe align real estate decisions with business objectives.",
  },
  {
    icon: BarChart3,
    title: "Research, Valuation & Market Intelligence",
    description:
      "Research is central to everything we do.\n\nWe provide:\n• Land and property valuation\n• Location-specific feasibility studies\n• Demand-supply and pricing trend analysis\n• Investment risk assessment\n\nThis ensures our clients make informed, defensible, and future-ready property decisions.",
  },
]

export function IntegratedServices() {
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
            Integrated Real Estate Advisory Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Beyond Land — Complete Property Advisory
          </p>
          <p className="text-charcoal/70 mt-4 max-w-3xl mx-auto">
            Once the land foundation is clear, our advisory seamlessly extends into residential and commercial real estate, allowing clients to scale their property strategy with continuity and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-off-white border border-charcoal/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal mb-3 font-[var(--font-heading)]">
                      {service.title}
                    </h3>
                    <div className="text-charcoal/70 leading-relaxed text-sm whitespace-pre-line">
                      {service.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
