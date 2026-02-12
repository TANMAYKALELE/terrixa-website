"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ClipboardList, PhoneCall, Target } from "lucide-react"
import { staggerContainer, fadeUp } from "@/lib/motion"

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

const expectationSteps = [
  { icon: ClipboardList, label: "Review" },
  { icon: PhoneCall, label: "Consult" },
  { icon: Target, label: "Strategy" },
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

  const inputBaseClass =
    "w-full bg-transparent border-0 border-b-2 border-white/20 rounded-none px-1 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C5A065] focus:ring-0 transition-colors duration-300"

  const selectBaseClass =
    "w-full bg-transparent border-0 border-b-2 border-white/20 rounded-none px-0 py-3 text-white focus:outline-none focus:border-[#C5A065] focus:ring-0 transition-colors duration-300 appearance-none cursor-pointer"

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

        {/* 3-Step Expectation Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-0">
            {expectationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#C5A065]/10 border border-[#C5A065]/40 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-[#C5A065]" />
                    </div>
                    <span className="text-white/70 text-xs font-medium tracking-wide uppercase">
                      {step.label}
                    </span>
                  </motion.div>
                  {index < expectationSteps.length - 1 && (
                    <div className="w-16 sm:w-24 border-t-2 border-dashed border-[#C5A065]/30 mx-3 mb-6" />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10">
            <form onSubmit={handleSubmit}>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Name + Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp} className="space-y-2">
                    <Label htmlFor="name" className="text-white/70 text-sm font-medium">
                      Full Name
                    </Label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputBaseClass}
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-2">
                    <Label htmlFor="mobile" className="text-white/70 text-sm font-medium">
                      Mobile Number
                    </Label>
                    <input
                      id="mobile"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className={inputBaseClass}
                      required
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div variants={fadeUp} className="space-y-2">
                  <Label htmlFor="email" className="text-white/70 text-sm font-medium">
                    Email Address
                  </Label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputBaseClass}
                    required
                  />
                </motion.div>

                {/* Requirement + Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp} className="space-y-2">
                    <Label htmlFor="requirement" className="text-white/70 text-sm font-medium">
                      Type of Requirement
                    </Label>
                    <div className="relative">
                      <select
                        id="requirement"
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({ ...formData, requirement: e.target.value })
                        }
                        className={selectBaseClass}
                        required
                      >
                        <option value="" className="bg-[#1a1a1a] text-white/60">
                          Select...
                        </option>
                        {requirementOptions.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-[#1a1a1a] text-white"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-2">
                    <Label htmlFor="location" className="text-white/70 text-sm font-medium">
                      Preferred Location
                    </Label>
                    <div className="relative">
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className={selectBaseClass}
                      >
                        <option value="" className="bg-[#1a1a1a] text-white/60">
                          Select...
                        </option>
                        {locationOptions.map((loc) => (
                          <option
                            key={loc}
                            value={loc.toLowerCase()}
                            className="bg-[#1a1a1a] text-white"
                          >
                            {loc}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Budget */}
                <motion.div variants={fadeUp} className="space-y-2">
                  <Label htmlFor="budget" className="text-white/70 text-sm font-medium">
                    Budget Range (Optional)
                  </Label>
                  <input
                    id="budget"
                    type="text"
                    placeholder="e.g., 50L - 1Cr"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className={inputBaseClass}
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp} className="space-y-2">
                  <Label htmlFor="message" className="text-white/70 text-sm font-medium">
                    Message / Requirement Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none px-1 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C5A065] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-300 min-h-[120px] resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={fadeUp} className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full overflow-hidden bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full py-4 font-semibold text-base shadow-xl hover:shadow-2xl hover:shadow-[#C5A065]/20 transition-all duration-300"
                  >
                    {/* Shimmer sweep */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="relative z-10">Schedule a Consultation</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
