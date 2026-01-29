import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description - Full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gold"
              >
                <path d="M16 2L28 8V24L16 30L4 24V8L16 2Z" fill="currentColor" opacity="0.9" />
                <path d="M16 8L22 11V21L16 24L10 21V11L16 8Z" fill="#1A1A1A" />
              </svg>
              <span className="text-xl font-bold font-[var(--font-heading)]">TERRIXA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Land & Property Advisory for Smarter Decisions Serving Pune and Emerging Growth Markets.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p>Terrixa HQ Tower 1</p>
              <p>Lower Parel, Mumbai 400013</p>
              <p>info@terrixa.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4 font-[var(--font-heading)]">Locations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/locations#karjat" className="hover:text-gold transition-colors">
                  Karjat
                </Link>
              </li>
              <li>
                <Link href="/locations#lonavala" className="hover:text-gold transition-colors">
                  Lonavala
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-gold transition-colors">
                  Compare Locations
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
    </footer>
  )
}
