"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, FileCheck, Layout, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: FileCheck,
    title: "Clean Land",
    description: "Individual 7/12, Clear Title verified",
  },
  {
    icon: Layout,
    title: "Designed Layouts",
    description: "Roads, Access, Demarcation and Boundaries",
  },
  {
    icon: Shield,
    title: "Livability",
    description: "Open space, Security, Water, Electricity and Plantation",
  },
  {
    icon: TrendingUp,
    title: "Scalable Value",
    description: "Unbeatable pricing, NA support, Resale support and Construction support",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function TerrixaPromise() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 md:py-28 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white font-[var(--font-heading)]">
                The Terrixa Realty Promise
              </h2>
              <p className="text-white/70 mb-10">Invest in land without the hassle</p>
            </motion.div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 bg-gold/20 rounded-lg shrink-0">
                    <feature.icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white font-[var(--font-heading)]">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Content - Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
                alt="Surveyed land with demarcation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 right-6">
                <Button
                  onClick={scrollToContact}
                  className="bg-gold hover:bg-gold/90 text-white rounded-full px-6 py-3 hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat With Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
