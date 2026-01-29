"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function AboutContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8 font-[var(--font-heading)]">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 bg-[#7A9B76]/5 border-[#7A9B76]/20 focus:border-[#C5A065] text-[#1a1a1a]"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 bg-[#7A9B76]/5 border-[#7A9B76]/20 focus:border-[#C5A065] text-[#1a1a1a]"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 bg-[#7A9B76]/5 border-[#7A9B76]/20 focus:border-[#C5A065] text-[#1a1a1a]"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 bg-[#7A9B76]/5 border-[#7A9B76]/20 focus:border-[#C5A065] text-[#1a1a1a]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white text-lg font-semibold rounded-full group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#7A9B76]/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">
                Contact Information
              </h3>

              <a
                href="tel:+919930070767"
                className="flex items-center gap-4 text-[#1a1a1a] hover:translate-x-2 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1a1a1a]/60 mb-1">Phone</p>
                  <p className="font-semibold">+91 9930070767</p>
                </div>
              </a>

              <a
                href="mailto:bd@terrixa.com"
                className="flex items-center gap-4 text-[#1a1a1a] hover:translate-x-2 transition-transform duration-300"
              >
                <div className="bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1a1a1a]/60 mb-1">Email</p>
                  <p className="font-semibold">bd@terrixa.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1a1a1a]/60 mb-1">Address</p>
                  <p className="font-semibold">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="bg-[#C5A065]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#1a1a1a]/80">Monday - Friday</span>
                  <span className="font-semibold text-[#1a1a1a]">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1a1a1a]/80">Saturday</span>
                  <span className="font-semibold text-[#1a1a1a]">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1a1a1a]/80">Sunday</span>
                  <span className="font-semibold text-[#1a1a1a]">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
