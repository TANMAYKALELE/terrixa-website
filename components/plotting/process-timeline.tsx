"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, FileCheck, Handshake, Key } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Browse curated plots across prime locations. Filter by budget, size, and amenities.",
  },
  {
    icon: FileCheck,
    title: "Legal Verification",
    description: "Our legal team conducts comprehensive title searches and documentation reviews.",
  },
  {
    icon: Handshake,
    title: "Transaction",
    description: "Transparent pricing, secure payment processes, and expert guidance at every step.",
  },
  {
    icon: Key,
    title: "Possession",
    description: "Smooth handover with complete documentation and ongoing support for development.",
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 font-[var(--font-heading)]">
            The Process
          </h2>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto">
            From discovery to possession, a seamless journey at every step.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-charcoal/10 md:-translate-x-1/2" />

          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-gold via-gold to-gold/50 md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              const stepProgress = useTransform(
                scrollYProgress,
                [index / steps.length, (index + 1) / steps.length],
                [0, 1]
              )
              const opacity = useTransform(stepProgress, [0, 0.5, 1], [0.3, 1, 1])
              const scale = useTransform(stepProgress, [0, 0.5, 1], [0.8, 1, 1])

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    } ml-20 md:ml-0`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="bg-white border-2 border-charcoal/10 rounded-2xl p-6 md:p-8 hover:border-gold hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
                        {step.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    style={{ scale: stepProgress }}
                    className="absolute left-8 md:left-1/2 w-16 h-16 md:-translate-x-1/2 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/30 z-10"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="hidden md:block w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
