"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

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

  const closeSheet = () => setOpen(false)

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
          <Image src="/logo2.png" alt="EES Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-white">EES</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
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
          <Link href="#team" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium text-white/90 hover:text-green-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/95 border-r border-white/10">
              <div className="flex items-center gap-2 mt-4 mb-8">
                <Image src="/logo2.png" alt="EES Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold text-white">EES</span>
              </div>
              <nav className="flex flex-col gap-6">
                <Link
                  href="#about"
                  className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeSheet}
                >
                  About
                </Link>
                <Link
                  href="#investments"
                  className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeSheet}
                >
                  Investments
                </Link>
                <Link
                  href="#impact"
                  className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeSheet}
                >
                  Impact
                </Link>
                <Link
                  href="#team"
                  className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeSheet}
                >
                  Team
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium text-white hover:text-green-400 transition-colors"
                  onClick={closeSheet}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-8">
                <Link href="#invest" onClick={closeSheet}>
                  <Button className="w-full bg-green-600 hover:bg-green-500 text-white text-glow">Invest Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
