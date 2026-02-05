"use client"

import { motion, useMotionValue, useSpring, useInView, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 50,
  })
  const display = useTransform(springValue, (latest) => Math.round(latest).toString() + suffix)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <motion.div ref={ref} className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] to-[#E5C085] mb-3 font-[var(--font-heading)]">
      {display}
    </motion.div>
  )
}

export function CompanyStats() {
  const stats = [
    { value: 50, suffix: "Cr+", label: "Assets Under Advisory" },
    { value: 25, suffix: "+", label: "Projects Consulted" },
    { value: 200, suffix: "+", label: "Happy Investors" },
    { value: 8, suffix: "+", label: "Years Experience" },
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#C5A065]/5 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNSIgZmlsbD0icmdiYSgxOTcsMTYwLDEwMSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-[#C5A065]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-[#E5C085]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)]">
            By The Numbers
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="text-center relative group"
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#C5A065]/20 to-transparent rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />

              {/* Card Content */}
              <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#C5A065]/20 group-hover:border-[#C5A065]/40 transition-all duration-300 group-hover:shadow-xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-[#1a1a1a]/70 text-lg font-medium">{stat.label}</p>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-[#C5A065] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
