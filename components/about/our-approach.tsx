"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Search, BarChart3, ShieldCheck, Handshake, HeadphonesIcon } from "lucide-react"
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion"

const steps = [
  { icon: Search, title: "Market Research & Location Analysis" },
  { icon: BarChart3, title: "Asset Evaluation & Pricing Assessment" },
  { icon: ShieldCheck, title: "Risk Identification & Due Diligence" },
  { icon: Handshake, title: "Negotiation & Transaction Management" },
  { icon: HeadphonesIcon, title: "Post-Transaction Support" },
]

export function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0.15, 0.75], [0, 1])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-[#C5A065] text-sm font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Our Approach
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-[var(--font-heading)]"
          >
            How We Work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-charcoal/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Our advisory process is designed to protect client interests and enhance long-term value.
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-charcoal/60 text-center mb-14 max-w-2xl mx-auto"
        >
          We follow a structured approach:
        </motion.p>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* SVG timeline line - visible on md+ */}
          <svg
            className="absolute left-[27px] md:left-[31px] top-4 h-[calc(100%-32px)] w-[4px] hidden sm:block"
            viewBox="0 0 4 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Background track */}
            <path
              d="M 2 0 L 2 500"
              stroke="#C5A065"
              strokeWidth="2"
              strokeOpacity="0.15"
            />
            {/* Animated fill */}
            <motion.path
              d="M 2 0 L 2 500"
              stroke="#C5A065"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex gap-5 md:gap-8 items-center relative z-10"
                >
                  {/* Circular node with step number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-[#C5A065]/40 flex items-center justify-center shadow-lg shadow-[#C5A065]/10 relative z-10">
                      <span className="text-[#C5A065] font-bold text-lg md:text-xl font-[var(--font-heading)]">
                        {index + 1}
                      </span>
                    </div>
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-[#C5A065]/10 blur-md scale-125" />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(197, 160, 101, 0.12)" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 bg-white border border-charcoal/8 rounded-2xl p-5 md:p-6 shadow-sm hover:border-[#C5A065]/30 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#C5A065]/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#C5A065]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-charcoal font-[var(--font-heading)]">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-charcoal/60 max-w-3xl mx-auto mt-14 text-lg leading-relaxed"
        >
          This ensures each transaction is{" "}
          <strong className="text-charcoal">
            well-evaluated, compliant, and strategically sound
          </strong>
          .
        </motion.p>
      </div>
    </section>
  )
}
