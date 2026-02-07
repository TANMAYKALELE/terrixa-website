"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUp, cardHover } from "@/lib/motion"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverLift?: boolean
  goldBorder?: boolean
  delay?: number
}

export function GlassCard({
  children,
  className,
  hoverLift = true,
  goldBorder = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverLift ? cardHover : undefined}
      className={cn(
        "relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden",
        "transition-colors duration-500",
        goldBorder && "hover:border-[#C5A065]/40",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
