"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Handshake, Heart, TrendingUp } from "lucide-react"
import { useRef } from "react"

const values = [
  {
    icon: Handshake,
    title: "Transparency First",
    description: "Complete disclosure of property details, market rates, and transaction processes. No hidden costs, no surprises.",
    gradient: "from-[#C5A065] to-[#E5C085]",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your investment goals drive our recommendations. We succeed when you achieve your land investment objectives.",
    gradient: "from-[#7A9B76] to-[#9AB590]",
  },
  {
    icon: TrendingUp,
    title: "Market Expertise",
    description: "Data-driven insights backed by years of experience in Maharashtra's emerging land markets.",
    gradient: "from-[#C5A065] to-[#7A9B76]",
  },
]

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#C5A065]/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#7A9B76]/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)]">
            Our Philosophy
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg max-w-2xl mx-auto">
            Built on trust, driven by results, guided by integrity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7A9B76]/10 to-transparent rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative bg-[#7A9B76]/5 border-2 border-[#7A9B76]/20 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-[#C5A065]/40 group-hover:shadow-xl">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
                        initial={{ y: "100%" }}
                        whileHover={{ y: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <Icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    {/* Decorative Ring */}
                    <motion.div
                      className="absolute -inset-2 border-2 border-[#C5A065]/20 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 font-[var(--font-heading)] group-hover:text-[#C5A065] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#1a1a1a]/70 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A065]/20 rounded-tr-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-1 max-w-md mx-auto bg-gradient-to-r from-transparent via-[#C5A065] to-transparent rounded-full"
        />
      </div>
    </section>
  )
}
