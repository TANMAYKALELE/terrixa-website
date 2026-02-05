"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"

export function ConsultationForm() {
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
    <div className="bg-charcoal/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
      <h3 className="text-2xl font-bold mb-2 text-white font-[var(--font-heading)]">Request a Consultation</h3>
      <p className="text-white/60 mb-6 text-sm">
        Share a few details so we can assign the right advisor for your requirement.
      </p>

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
              <option value="land">Land Investment / Plotting</option>
              <option value="residential">Residential Purchase / Sale</option>
              <option value="commercial">Commercial Leasing</option>
              <option value="tenant">Tenant Representation</option>
              <option value="research">Market Research / Valuation</option>
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
              <option value="karjat">Karjat</option>
              <option value="lonavala">Lonavala</option>
              <option value="khandala">Khandala</option>
              <option value="kamshet">Kamshet</option>
              <option value="pawna">Pawna</option>
              <option value="pune">Pune</option>
              <option value="hinjewadi">Hinjewadi</option>
              <option value="wakad">Wakad</option>
              <option value="ravet">Ravet</option>
              <option value="talegaon">Talegaon</option>
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
  )
}
