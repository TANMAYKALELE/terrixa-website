"use client"

import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FooterContactBar() {
  return (
    <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-t border-gold/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold text-lg mb-1 font-[var(--font-heading)]">
              Have Questions? Speak With a Terrixa Advisor
            </h3>
            <p className="text-white/60 text-sm">Get expert guidance on your property decisions</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="tel:+919930070767"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-white text-sm"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9930070767</span>
            </Link>

            <Link
              href="mailto:bd@terrixa.com"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-white text-sm"
            >
              <Mail className="h-4 w-4" />
              <span>bd@terrixa.com</span>
            </Link>

            <Link href="/about#contact">
              <Button className="bg-gold hover:bg-gold/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300 shadow-lg hover:shadow-gold/20">
                <MessageCircle className="h-4 w-4 mr-2" />
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
