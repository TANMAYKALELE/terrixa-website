"use client"

import { motion } from "framer-motion"
import { MapPin, Maximize2, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const plots = [
  {
    name: "The Valley",
    location: "Kamshet",
    image: "https://images.pexels.com/photos/14614488/pexels-photo-14614488.jpeg",
    size: "2,400 sq ft",
    price: "₹18 Lakhs",
    appreciation: "+12% YoY",
    description: "Scenic valley plots with panoramic hill views",
  },
  {
    name: "Commercial Hub",
    location: "Hinjewadi",
    image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    size: "3,000 sq ft",
    price: "₹35 Lakhs",
    appreciation: "+15% YoY",
    description: "Prime commercial land near IT parks",
  },
  {
    name: "Riverview Estate",
    location: "Pawna",
    image: "https://images.pexels.com/photos/1131573/pexels-photo-1131573.jpeg",
    size: "5,000 sq ft",
    price: "₹28 Lakhs",
    appreciation: "+10% YoY",
    description: "Waterfront plots with lake access",
  },
  {
    name: "Highway Touch",
    location: "Ravet",
    image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg",
    size: "2,800 sq ft",
    price: "₹32 Lakhs",
    appreciation: "+14% YoY",
    description: "Highway-facing plots with metro connectivity",
  },
  {
    name: "Sunrise Plots",
    location: "Talegaon",
    image: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
    size: "4,200 sq ft",
    price: "₹22 Lakhs",
    appreciation: "+11% YoY",
    description: "Open land parcels ideal for farm houses",
  },
  {
    name: "Reserve Woods",
    location: "Lonavala",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",
    size: "6,000 sq ft",
    price: "₹45 Lakhs",
    appreciation: "+16% YoY",
    description: "Forest-adjacent luxury plots in hill station",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}

export function CuratedPlots() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full">
              <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">
                Featured Properties
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-heading)]">
            Curated Plotted Developments
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Handpicked land parcels across Pune's growth corridors. Every plot comes with
            verified documentation, approved layouts, and immediate possession.
          </p>
        </motion.div>

        {/* Plots Grid - 3 Columns on Desktop, 1 on Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plots.map((plot, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="group relative overflow-hidden bg-[#1a1a1a] border-white/10 hover:border-[#C5A065] transition-all duration-500 h-full">
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={plot.image}
                      alt={`${plot.name} - ${plot.location}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Appreciation Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <TrendingUp className="h-3 w-3 text-white" />
                      <span className="text-white text-xs font-bold">{plot.appreciation}</span>
                    </div>

                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      <MapPin className="h-3 w-3 text-[#C5A065]" />
                      <span className="text-white text-xs font-medium">{plot.location}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Project Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 font-[var(--font-heading)]">
                      {plot.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {plot.description}
                    </p>

                    {/* Price & Size */}
                    <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-white/10">
                      <div>
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] to-[#E5C085] font-[var(--font-heading)]">
                          {plot.price}
                        </span>
                        <span className="text-white/50 text-sm ml-2">onwards</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <Maximize2 className="h-4 w-4" />
                        <span>{plot.size}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full px-12 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            View All Available Plots
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-white/50 text-sm mt-4">
            Or call us at <span className="text-[#C5A065] font-semibold">+91 98765 43210</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
