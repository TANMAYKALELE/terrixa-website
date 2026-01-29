"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const metrics = [
  { value: 50, suffix: "+", label: "Acres Advised" },
  { value: 50, suffix: "Cr+", label: "Transaction Value", prefix: "₹" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Legal Clarity" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
  })
  const display = useTransform(springValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-gold mb-2 font-[var(--font-heading)]">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </div>
  )
}

export function MetricsBar() {
  return (
    <section className="py-12 md:py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-10 font-[var(--font-heading)]"
        >
          Our Key Metrics
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24"
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <AnimatedNumber value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              <div className="text-sm md:text-base text-charcoal/70">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
