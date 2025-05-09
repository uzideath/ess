"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener to detect when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo2.png" alt="ESS Logo" width={100} height={100} className="h-auto w-auto max-h-16" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            About
          </Link>
          <Link
            href="#investments"
            className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors"
          >
            Investments
          </Link>
          <Link href="#impact" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            Impact
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Component */}
          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  )
}
