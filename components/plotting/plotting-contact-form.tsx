"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, CheckCircle2, XCircle, Loader2 } from "lucide-react"

export function PlottingContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    timeline: "",
    investment: "",
    secondHome: "",
    location: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          timeline: formData.timeline,
          investment: formData.investment,
          second_home: formData.secondHome,
          location: formData.location,
          consent: formData.consent ? "Yes" : "No",
          subject: "New Plotting Investment Inquiry from Terrixa",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          phone: "",
          email: "",
          timeline: "",
          investment: "",
          secondHome: "",
          location: "",
          consent: false,
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gold text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[var(--font-heading)]">Start Investing Now!</h2>

            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span>bd@terrixa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span>+91 9930070767</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/60 mt-1" />
                <div>
                  <p className="font-medium text-white">Terrixa Private Limited</p>
                  <p className="text-sm">
                    Office No. 04, 1st Floor, 11/12, Raghuvashi Mansion, Senapati Bapat Marg, Raghuvashi Mill Compound,
                    Lower Parel, Mumbai- 400013
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-8 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="h-20 w-20 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Success!</h3>
                  <p className="text-charcoal/70 text-center">
                    Your inquiry has been submitted. We&apos;ll contact you soon!
                  </p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-6 bg-gold hover:bg-gold/90 text-white"
                  >
                    Submit Another
                  </Button>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Submission Failed</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-charcoal">
                    Name*
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="bg-white border-charcoal/20 focus:border-gold text-charcoal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-charcoal">
                    Phone Number*
                  </Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="bg-white border-charcoal/20 focus:border-gold text-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-charcoal">
                    Business Email ID*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your business email address"
                    className="bg-white border-charcoal/20 focus:border-gold text-charcoal"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-charcoal">
                    How soon are you looking at Investing in land?*
                  </Label>
                  <Select
                    required
                    value={formData.timeline}
                    onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                  >
                    <SelectTrigger className="bg-white border-charcoal/20 focus:border-gold text-charcoal">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-3months">1-3 Months</SelectItem>
                      <SelectItem value="3-6months">3-6 Months</SelectItem>
                      <SelectItem value="6-12months">6-12 Months</SelectItem>
                      <SelectItem value="exploring">Just Exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="investment" className="text-charcoal">
                    What are you looking to Invest?*
                  </Label>
                  <Select
                    required
                    value={formData.investment}
                    onValueChange={(value) => setFormData({ ...formData, investment: value })}
                  >
                    <SelectTrigger className="bg-white border-charcoal/20 focus:border-gold text-charcoal">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under25l">Under 25 Lakhs</SelectItem>
                      <SelectItem value="25l-50l">25-50 Lakhs</SelectItem>
                      <SelectItem value="50l-1cr">50 Lakhs - 1 Crore</SelectItem>
                      <SelectItem value="1cr-2cr">1-2 Crores</SelectItem>
                      <SelectItem value="above2cr">Above 2 Crores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondhome" className="text-charcoal">
                    Are you looking to build a second home?*
                  </Label>
                  <Select
                    required
                    value={formData.secondHome}
                    onValueChange={(value) => setFormData({ ...formData, secondHome: value })}
                  >
                    <SelectTrigger className="bg-white border-charcoal/20 focus:border-gold text-charcoal">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="maybe">Maybe in future</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-charcoal">
                  Location*
                </Label>
                <Input
                  id="location"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter city"
                  className="bg-white border-charcoal/20 focus:border-gold text-charcoal"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm text-charcoal/70 leading-relaxed">
                  I agree to receive e-mails and WhatsApp messages from Terrixa containing promotional offers,
                  notifications, and messages.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal hover:bg-charcoal/90 text-white rounded-lg py-6 text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
