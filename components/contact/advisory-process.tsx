"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ClipboardList, UserCheck, PhoneCall, Target } from "lucide-react"
import { fadeUp } from "@/lib/motion"

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

  // Derive per-step progress for activation
  const step0Active = useTransform(scrollYProgress, [0.2, 0.35], [0, 1])
  const step1Active = useTransform(scrollYProgress, [0.35, 0.5], [0, 1])
  const step2Active = useTransform(scrollYProgress, [0.5, 0.65], [0, 1])
  const step3Active = useTransform(scrollYProgress, [0.65, 0.8], [0, 1])
  const stepProgress = [step0Active, step1Active, step2Active, step3Active]

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
          {/* SVG Timeline */}
          <svg
            className="absolute left-6 top-6 h-[calc(100%-48px)] w-1 hidden md:block"
            viewBox="0 0 4 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 2 0 Q 2 100 2 100 T 2 200 T 2 300 T 2 400"
              stroke="#C5A065"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              const activeProgress = stepProgress[index]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-6 items-start relative z-10"
                >
                  {/* Step Number Circle with Pulse Ring */}
                  <div className="flex-shrink-0 relative">
                    {/* Pulse ring - animated with scroll */}
                    <motion.div
                      className="absolute -inset-2 rounded-full border-2 border-[#C5A065]"
                      style={{ opacity: activeProgress, scale: activeProgress }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(197,160,101,0.4)",
                          "0 0 0 8px rgba(197,160,101,0)",
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 1.5, repeat: Infinity },
                      }}
                    />
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#C5A065]/40 relative z-10"
                      style={{
                        backgroundColor: useTransform(
                          activeProgress,
                          [0, 1],
                          ["rgba(197,160,101,0.1)", "rgba(197,160,101,0.25)"]
                        ),
                      }}
                    >
                      <Icon className="h-6 w-6 text-[#C5A065]" />
                    </motion.div>
                  </div>

                  {/* Step Card with gold left border */}
                  <motion.div
                    className="bg-white border border-charcoal/10 rounded-xl p-5 flex-1 hover:shadow-lg hover:border-[#C5A065]/30 transition-all duration-300 border-l-4 border-l-[#C5A065]/60"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                  >
                    <div className="text-[#C5A065] text-sm font-medium mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2 font-[var(--font-heading)]">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
