"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

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

  const handleScrollToInvesting = (e: React.MouseEvent) => {
    e.preventDefault()
    setCompanyDropdownOpen(false)
    setMobileMenuOpen(false)

    if (pathname !== "/") {
      router.push("/#start-investing")
    } else {
      const investingSection = document.getElementById("start-investing")
      if (investingSection) {
        investingSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-charcoal shadow-lg" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo - TERRIXA */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold"
                >
                  <path d="M16 2L28 8V24L16 30L4 24V8L16 2Z" fill="currentColor" opacity="0.9" />
                  <path d="M16 8L22 11V21L16 24L10 21V11L16 8Z" fill="#1A1A1A" />
                </svg>
                <span className="text-2xl font-bold tracking-wide font-[var(--font-heading)] text-white">TERRIXA</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/#land"
                className="text-sm font-medium transition-colors flex items-center gap-1 text-white/90 hover:text-gold"
              >
                Land
                <ChevronDown className="h-3 w-3" />
              </Link>

              <Link
                href="/plotting"
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/plotting" ? "text-gold" : "text-white/90 hover:text-gold",
                )}
              >
                Plotting
              </Link>

              <Link
                href="/locations"
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === "/locations" ? "text-gold" : "text-white/90 hover:text-gold",
                )}
              >
                Locations
              </Link>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                <button className="text-sm font-medium transition-colors flex items-center gap-1 text-white/90 hover:text-gold">
                  Company
                  <ChevronDown className={cn("h-3 w-3 transition-transform", companyDropdownOpen && "rotate-180")} />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-40 bg-charcoal rounded-lg shadow-lg border border-white/10 py-2 transition-all duration-200",
                    companyDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2",
                  )}
                >
                  <Link
                    href="/about"
                    className="block w-full text-left px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-gold transition-colors"
                    onClick={() => setCompanyDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={handleScrollToInvesting}
                className="bg-gold hover:bg-gold/90 text-white rounded-full px-6 py-2 font-medium transition-all duration-300"
              >
                Chat With Us
              </Button>
            </div>

            {/* Mobile Menu Button - always white */}
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

      {/* Mobile Menu Overlay */}
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
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
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
              <span className="text-lg font-bold text-white font-[var(--font-heading)]">TERRIXA</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/#land"
                  className="block py-3 px-4 text-white/80 font-medium hover:bg-white/10 hover:text-gold rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Land
                </Link>
              </li>
              <li>
                <Link
                  href="/plotting"
                  className={cn(
                    "block py-3 px-4 font-medium hover:bg-white/10 hover:text-gold rounded-lg transition-colors",
                    pathname === "/plotting" ? "text-gold bg-white/10" : "text-white/80",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plotting
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className={cn(
                    "block py-3 px-4 font-medium hover:bg-white/10 hover:text-gold rounded-lg transition-colors",
                    pathname === "/locations" ? "text-gold bg-white/10" : "text-white/80",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block py-3 px-4 font-medium hover:bg-white/10 hover:text-gold rounded-lg transition-colors",
                    pathname === "/about" ? "text-gold bg-white/10" : "text-white/80",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-white/10">
            <Button
              onClick={handleScrollToInvesting}
              className="bg-gold hover:bg-gold/90 text-white rounded-full w-full hover:shadow-lg transition-all"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with us
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
