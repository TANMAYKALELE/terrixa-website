"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rahul Deshmukh",
    role: "Land Investor, Pune",
    content: "Buying land in Karjat seemed risky until I met the Terrixa team. They handled the 7/12 extraction perfectly.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Weekend Home Buyer, Mumbai",
    content: "I was looking for a weekend home plot in Lonavala. Their inventory is genuine, no time wasting.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Commercial Investor, Hinjewadi",
    content: "Best advisory for commercial leasing. They know the rental yields better than anyone.",
    rating: 5,
  },
  {
    name: "Amit & Pooja Patel",
    role: "Property Investors, Mumbai",
    content: "Managing property while traveling is hard. Terrixa helped us buy a plot in Pawna remotely.",
    rating: 5,
  },
  {
    name: "Rajesh Khandelwal",
    role: "Property Consultant, Nashik",
    content: "I have dealt with many brokers, but these guys are professional consultants. No hidden charges.",
    rating: 5,
  },
  {
    name: "Dr. Anjali Mehta",
    role: "Long-term Investor, Talegaon",
    content: "Invested for long-term growth. Their market research report was spot on.",
    rating: 5,
  },
  {
    name: "Sandeep Joshi",
    role: "Plot Owner, Kamshet",
    content: "The plotting options were beautiful. They ensured the access road was legal.",
    rating: 5,
  },
  {
    name: "Arjun Malhotra",
    role: "Land Seller, Khandala",
    content: "Sold my ancestral land through them. Smooth transaction.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "First-time Buyer, Wakad",
    content: "Finally, a team that understands 'Clear Title' is the only thing that matters.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? testimonials.length - 3 : prev - 3));
  };

  // Safe logic to grab 3 items (even if we are near the end of the array)
  const visibleTestimonials = [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12 font-[var(--font-heading)]">
          Hear It From Our <span className="text-[#C5A065]">Customers</span>
        </h2>

        {/* DESKTOP SLIDER (3 Cards) */}
        <div className="hidden md:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode='wait'>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-white border border-charcoal/10 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="h-10 w-10 text-[#C5A065]/20 mb-6" />
                    <p className="text-charcoal/80 text-lg leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-auto border-t border-charcoal/5 pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#C5A065]/10 flex items-center justify-center text-[#C5A065] font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-charcoal text-lg">{testimonial.name}</div>
                          <div className="text-sm text-[#C5A065] font-medium">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#C5A065] text-[#C5A065]" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MOBILE SLIDER (Horizontal Scroll) */}
        <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8 scrollbar-hide px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[85vw] snap-center">
              <Card className="bg-white border border-charcoal/10 h-full shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-[#C5A065]/20 mb-4" />
                  <p className="text-charcoal/80 leading-relaxed mb-6 flex-grow italic">"{testimonial.content}"</p>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                       <div className="w-10 h-10 rounded-full bg-[#C5A065]/10 flex items-center justify-center text-[#C5A065] font-bold">
                          {testimonial.name.charAt(0)}
                       </div>
                       <div>
                          <div className="font-bold text-charcoal">{testimonial.name}</div>
                          <div className="text-xs text-[#C5A065]">{testimonial.role}</div>
                       </div>
                    </div>
                    <div className="flex gap-1">
                       {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#C5A065] text-[#C5A065]" />
                       ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* NAVIGATION ARROWS (Desktop Only) */}
        <div className="mt-10 hidden md:flex justify-center gap-6">
          <button 
            onClick={prevSlide} 
            className="group rounded-full border-2 border-[#C5A065] p-4 text-[#C5A065] transition-all hover:bg-[#C5A065] hover:text-white hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={nextSlide} 
            className="group rounded-full border-2 border-[#C5A065] p-4 text-[#C5A065] transition-all hover:bg-[#C5A065] hover:text-white hover:scale-110 active:scale-95"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  )
}