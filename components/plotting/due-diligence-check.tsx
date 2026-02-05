"use client"

import { motion } from "framer-motion"
import { ShieldCheck, FileCheck, Map, TrendingUp } from "lucide-react"

const verifications = [
  {
    icon: FileCheck,
    title: "Clear Title & Ownership",
    description: "Complete chain of title verification. No disputed claims, no hidden liens, no legal ambiguities.",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
  },
  {
    icon: Map,
    title: "Zoning & FSI Potential",
    description: "Detailed land-use classification analysis. Construction permissions, development rights, and regulatory compliance.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Access Road Evaluation",
    description: "Legal road access confirmation. Width compliance, approach paths, and future connectivity assessment.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Exit Strategy Assessment",
    description: "Market liquidity analysis. Resale potential, buyer demographics, and monetization timelines.",
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold",
  },
]

export function DueDiligenceCheck() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-3 mb-6 bg-gold/10 border border-gold/20 rounded-full px-6 py-3"
          >
            <ShieldCheck className="h-6 w-6 text-gold" />
            <span className="font-semibold text-[#1a1a1a]">Risk Mitigation Guarantee</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">
            The Terrixa Due Diligence Check
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Before you invest a single rupee, we verify what matters. Our 4-point safety framework eliminates guesswork
            and protects your capital from hidden risks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {verifications.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full bg-white border-2 border-[#1a1a1a]/10 rounded-2xl p-8 hover:border-gold/30 hover:shadow-xl transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-[#1a1a1a]/5 group-hover:bg-gold/10 rounded-2xl transition-colors duration-500">
                        <Icon className={`h-8 w-8 ${item.iconColor}`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)] group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[#1a1a1a]/70 leading-relaxed group-hover:text-[#1a1a1a]/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-[#1a1a1a] text-white px-8 py-4 rounded-xl">
            <p className="font-semibold text-lg">
              <span className="text-gold">100% of our plots</span> pass this verification before listing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
