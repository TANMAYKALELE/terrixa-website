"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ClipboardList, UserCheck, PhoneCall, Target } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Requirement Review",
    description: "Our team reviews your inputs to understand your objectives.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Advisor Assignment",
    description: "A dedicated advisor with market expertise connects with you.",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Consultation Call / Meeting",
    description: "We discuss locations, options, pricing, and feasibility.",
  },
  {
    number: "04",
    icon: Target,
    title: "Property Strategy & Execution",
    description: "Shortlisting, site visits, negotiation, and transaction support.",
  },
]

export function AdvisoryProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            What Happens Next
          </h2>
          <p className="text-lg text-charcoal/70">Our Advisory Process</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-charcoal/70 text-center mb-12 max-w-2xl mx-auto"
        >
          Once you submit your enquiry:
        </motion.p>

        <div className="max-w-3xl mx-auto relative">
          <svg
            className="absolute left-6 top-6 h-[calc(100%-48px)] w-1 hidden md:block"
            viewBox="0 0 4 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 2 0 Q 2 100 2 100 T 2 200 T 2 300 T 2 400"
              stroke="#C19A6B"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 items-start relative z-10"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/40">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <div className="bg-white border border-charcoal/10 rounded-xl p-5 flex-1 hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                    <div className="text-gold text-sm font-medium mb-1">Step {step.number}</div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2 font-[var(--font-heading)]">{step.title}</h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
