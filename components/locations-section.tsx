"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

const locations = [
  {
    name: "Ravet",
    label: "Modern Residential",
    description: "Rapidly developing residential hub with excellent connectivity.",
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Hinjewadi",
    label: "IT & Commercial Hub",
    description: "Prime commercial opportunities in Pune's IT corridor.",
    image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Wakad",
    label: "Urban Connectivity",
    description: "Well-connected suburb with modern infrastructure and amenities.",
    image: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Pune",
    label: "City Center",
    description: "Prime urban properties in Maharashtra's cultural capital.",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Pawna",
    label: "Lakeview Plots",
    description: "Scenic lakeview plots for premium residential development.",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Karjat",
    label: "Land & Second Homes",
    description: "Serene hill-side plots perfect for weekend homes and farmhouses.",
    image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Lonavala",
    label: "Premium Lifestyle",
    description: "Premium lifestyle properties in the heart of the Western Ghats.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Khandala",
    label: "Valley Views",
    description: "Breathtaking valley view properties in pristine natural settings.",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Kamshet",
    label: "Plateau Properties",
    description: "Open plateau land ideal for adventure tourism and retreats.",
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
  {
    name: "Talegaon",
    label: "Industrial & Residential",
    description: "Growing industrial and residential opportunities with strategic location.",
    image: "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800",
    available: true,
  },
]

export function LocationsSection() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-12 font-[var(--font-heading)]"
        >
          Our Locations
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="overflow-hidden bg-white border-charcoal/10 hover:border-gold hover:shadow-2xl transition-all duration-500 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  />
                  {location.comingSoon && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">Coming Soon</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-gold" />
                    <h3 className="font-bold text-charcoal font-[var(--font-heading)]">{location.name}</h3>
                  </div>
                  <div className="text-xs text-gold mb-2 font-medium">{location.label}</div>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{location.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
