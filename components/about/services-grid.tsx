"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin, Layout, FileCheck, Check, ArrowRight } from "lucide-react"
import { useRef } from "react"

export function ServicesGrid() {
  const services = [
    {
      icon: MapPin,
      title: "Land Advisory",
      image: "https://images.pexels.com/photos/6069/hands-woman-laptop-notebook.jpg",
      items: [
        "Market Analysis",
        "Due Diligence",
        "Investment Strategy",
        "Portfolio Management",
      ],
    },
    {
      icon: Layout,
      title: "Plotting Solutions",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      items: [
        "Land Aggregation",
        "Plot Development",
        "RERA Compliance",
        "Infrastructure Planning",
      ],
    },
    {
      icon: FileCheck,
      title: "Transaction Support",
      image: "https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg",
      items: [
        "Documentation",
        "Legal Verification",
        "Negotiation Support",
        "Post-Sale Assistance",
      ],
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#7A9B76]/5 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(122,155,118,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)]">
            What We Offer
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg max-w-2xl mx-auto">
            Comprehensive land investment services tailored to your goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                >
                  {/* Image Header with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute bottom-4 left-4 bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-16 h-16 flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C5A065]/20 to-transparent"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)] group-hover:text-[#C5A065] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {service.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + itemIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-[#C5A065] flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-[#C5A065] font-semibold cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Border Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#C5A065]/30 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
