"use client"

import { motion } from "framer-motion"

const cards = [
  {
    title: "CLEAN LAND",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    title: "DESIGNED LAYOUTS",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    title: "LIVABILITY",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    title: "SCALABLE VALUE",
    image: "/placeholder.svg?height=500&width=400",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function HowWeFixIt() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white font-[var(--font-heading)]"
        >
          Here&apos;s how we fix it
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-bold text-sm md:text-lg tracking-wide font-[var(--font-heading)]">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
