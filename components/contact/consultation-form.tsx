"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const requirementOptions = [
  { value: "land", label: "Land Investment / Plotting" },
  { value: "residential-purchase", label: "Residential Purchase" },
  { value: "residential-sale", label: "Residential Sale" },
  { value: "commercial", label: "Commercial Leasing" },
  { value: "tenant", label: "Tenant Representation" },
  { value: "research", label: "Market Research / Valuation" },
]

const locationOptions = [
  "Karjat", "Lonavala", "Khandala", "Kamshet", "Pawna",
  "Pune", "Hinjewadi", "Wakad", "Ravet", "Talegaon",
]

export function ContactConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    requirement: "",
    location: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-charcoal to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Request a Consultation
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Please share a few details so we can assign the right advisor for your requirement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-white/80">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="requirement" className="text-white/80">Type of Requirement</Label>
                  <select
                    id="requirement"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full h-10 px-3 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  >
                    <option value="">Select...</option>
                    {requirementOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white/80">Preferred Location</Label>
                  <select
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-10 px-3 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Select...</option>
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc.toLowerCase()}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white/80">Budget Range (Optional)</Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="e.g., 50L - 1Cr"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">Message / Requirement Details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-white rounded-full py-6 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Schedule a Consultation
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
