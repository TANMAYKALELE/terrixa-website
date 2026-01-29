"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface MaskTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MaskText({ children, className = "", delay = 0 }: MaskTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.75,
          delay,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
