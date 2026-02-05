"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Deshmukh",
    role: "Land Investor, Karjat",
    content:
      "Buying land in Karjat seemed risky until I met the Terrixa team. They handled the 7/12 extraction and legal verification perfectly. Highly recommended.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sneha Kapoor",
    role: "Weekend Home Buyer, Lonavala",
    content:
      "I was looking for a weekend home plot in Lonavala. Their inventory is genuine, and they don't waste time with disputed properties.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Vikram Singh",
    role: "Commercial Investor, Hinjewadi",
    content:
      "Best advisory for Hinjewadi commercial leasing. They know the rental yields and future appreciation zones better than anyone.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Amit & Pooja Patel",
    role: "Property Investors, Mumbai",
    content:
      "We were looking for a plot in Pawna for our weekend getaway. Terrixa's thorough due diligence and transparent process gave us complete confidence.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Rajesh Khandelwal",
    role: "Property Consultant, Pune",
    content:
      "I have dealt with many brokers in Pune, but these guys are professional consultants. No hidden charges, pure clarity.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Long-term Investor, Talegaon",
    content:
      "Invested in Talegaon for long-term growth. Their market research report was spot on. Good for serious investors.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sandeep Joshi",
    role: "Plot Owner, Kamshet",
    content:
      "The plotting options in Kamshet were beautiful. They ensured the access road was legal, which is a common issue there.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Arjun Malhotra",
    role: "Land Seller, Khandala",
    content:
      "Sold my ancestral land in Khandala through them. The transaction was smooth, and they filtered for serious buyers only.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Meera Iyer",
    role: "First-time Buyer, Wakad",
    content:
      "Finally, a team that understands 'Clear Title' is the only thing that matters. Bought a peace-of-mind plot in Wakad.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function PlottingTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
          Hear it from Our Customers
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8 md:px-12"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-semibold text-xl mb-1 text-white font-[var(--font-heading)]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-white/60 text-sm mb-8">{testimonials[currentIndex].role}</p>

              {/* Quote */}
              <p className="text-white/80 leading-relaxed text-base md:text-lg">{testimonials[currentIndex].content}</p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-gold w-6" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
