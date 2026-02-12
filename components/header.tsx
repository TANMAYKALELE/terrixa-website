"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/markets", label: "Markets" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-[#C5A065]/10"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4 md:py-5">
            <Link href="/" className="flex items-center">
              <motion.img
                src="/logo.jpeg"
                alt="Terrixa Realty"
                className="h-12 w-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors py-1 group",
                      pathname === link.href ? "text-[#C5A065]" : "text-white/90 hover:text-[#C5A065]",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-[#C5A065] transition-all duration-300",
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full",
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button className="bg-[#C5A065] hover:bg-[#C5A065]/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300 shadow-lg hover:shadow-[#C5A065]/20">
                  Request Consultation
                </Button>
              </Link>
            </motion.div>

            <button
              className="md:hidden p-2 transition-colors z-50 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-charcoal z-50 md:hidden shadow-2xl transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <img
              src="/logo.jpeg"
              alt="Terrixa Realty"
              className="h-10 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-[#C5A065] transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 font-medium hover:bg-white/10 hover:text-[#C5A065] rounded-lg transition-colors",
                      pathname === link.href ? "text-[#C5A065] bg-white/10" : "text-white/80",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-white/10">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-[#C5A065] hover:bg-[#C5A065]/90 text-white rounded-full w-full hover:shadow-lg transition-all">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
