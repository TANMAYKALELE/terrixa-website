"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "@/lib/motion"

const footerColumns = [
  {
    title: "Markets We Serve",
    links: [
      { href: "/markets", label: "Karjat | Lonavala | Khandala" },
      { href: "/markets", label: "Kamshet | Pawna" },
      { href: "/markets", label: "Pune | Hinjewadi | Wakad" },
      { href: "/markets", label: "Ravet | Talegaon" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { href: "/about", label: "Land Advisory" },
      { href: "/about", label: "Residential Sales" },
      { href: "/about", label: "Commercial Leasing" },
      { href: "/about", label: "Research & Valuation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/markets", label: "Markets" },
    ],
  },
]

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-px bg-gradient-to-r from-transparent via-[#C5A065]/40 to-transparent"
      />

      <div className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            <motion.div variants={fadeUp} className="col-span-2 md:col-span-1">
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
                <a
                  href="mailto:enquiries@terrixarealty.com"
                  className="block hover:text-[#C5A065] transition-colors duration-200"
                >
                  enquiries@terrixarealty.com
                </a>
                <a
                  href="tel:+919090363607"
                  className="block hover:text-[#C5A065] transition-colors duration-200"
                >
                  +91 9090363607
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Life+Republic+Kolte+Patil+Marunji+R9+Pune+411057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#C5A065] transition-colors duration-200 leading-relaxed"
                >
                  Life Republic Kolte Patil Marunji - R9<br />
                  Pune 411057
                </a>
              </div>
            </motion.div>

            {footerColumns.map((column, i) => (
              <motion.div key={i} variants={fadeUp}>
                <h4 className="font-semibold mb-4 font-[var(--font-heading)]">{column.title}</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="hover:text-[#C5A065] transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-white/50 text-center md:text-left">© 2026 Terrixa. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, color: "#C5A065" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={social.href} className="text-white/50 hover:text-[#C5A065] transition-colors">
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
