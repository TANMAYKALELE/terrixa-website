"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MaskText } from "@/components/mask-text"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function CtaSection() {
  return (
    <section id="start-investing" className="py-16 md:py-20 bg-gold text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <MaskText>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-[var(--font-heading)]">
              Invest in Land & Property With Confidence
            </h2>
          </MaskText>

          <MaskText delay={0.1}>
            <p className="text-center text-white/80 mb-8">Terrixa Realty — Land & Property Advisory for Smarter Decisions</p>
          </MaskText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <MaskText delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/70" />
                  <span>info@terrixa.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/70" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white/70 mt-0.5" />
                  <span>
                    Terrixa HQ Tower 1, Lower Parel,
                    <br />
                    Mumbai 400013, Maharashtra, India
                  </span>
                </div>
              </div>
            </MaskText>

            <MaskText delay={0.3}>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="w-full bg-charcoal text-white hover:bg-charcoal/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </MaskText>
          </div>
        </div>
      </div>
    </section>
  )
}
