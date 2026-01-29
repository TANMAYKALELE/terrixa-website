"use client"

import { Button } from "@/components/ui/button"
import { MaskText } from "@/components/mask-text"
import { MessageCircle, FileText, CheckCircle, Key } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell us about your requirement",
    description: "Share your land investment goals, budget, and preferred locations with our team.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Get personalized recommendations",
    description: "Receive curated land options matching your criteria with complete due diligence reports.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Complete legal verification",
    description: "Our experts handle all legal checks, title verification, and documentation.",
  },
  {
    number: "04",
    icon: Key,
    title: "Secure your investment",
    description: "Finalize the purchase with our assistance and start your land investment journey.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-charcoal w-[100vw] relative left-1/2 -ml-[50vw]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="lg:w-1/3">
            <MaskText>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-[var(--font-heading)]">How It Works</h2>
            </MaskText>
            <MaskText delay={0.1}>
              <Button className="bg-gold hover:bg-gold/90 text-white rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Button>
            </MaskText>
          </div>

          <div className="lg:w-2/3 relative">
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
                style={{
                  pathLength,
                }}
              />
            </svg>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <MaskText key={index} delay={0.2 + index * 0.1}>
                  <div className="flex gap-6 items-start relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-gold/40">
                        <step.icon className="h-6 w-6 text-gold" />
                      </div>
                    </div>
                    <div>
                      <div className="text-gold text-sm font-medium mb-1">Step {step.number}</div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-[var(--font-heading)]">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </MaskText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
