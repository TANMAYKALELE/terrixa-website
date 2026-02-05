import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { FooterContactBar } from "@/components/footer-contact-bar"

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <FooterContactBar />
      <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.jpeg"
                alt="Terrixa Realty"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Terrixa Realty — Land & Property Advisory for Smarter Decisions
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Serving Pune and Emerging Growth Markets
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p>bd@terrixa.com</p>
              <p>+91 9930070767</p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 font-[var(--font-heading)]">Markets We Serve</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Karjat • Lonavala • Khandala
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Kamshet • Pawna
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Pune • Hinjewadi • Wakad
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Ravet • Talegaon
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4 font-[var(--font-heading)]">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/plotting" className="hover:text-gold transition-colors">
                  Plotting
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Land Advisory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Transaction Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 font-[var(--font-heading)]">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Stack vertically on mobile, horizontal on desktop */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50 text-center md:text-left">© 2026 Terrixa. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/50 hover:text-gold transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-gold transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-gold transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-gold transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
