"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeSheet = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">GreenFund</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
          <Link href="#investments" className="text-sm font-medium hover:text-green-600 transition-colors">
            Investments
          </Link>
          <Link href="#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-green-600 transition-colors">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center gap-2 mt-4 mb-8">
                <Leaf className="h-6 w-6 text-green-600" />
                <span className="text-xl font-bold">GreenFund</span>
              </div>
              <nav className="flex flex-col gap-6">
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={closeSheet}
                >
                  About
                </Link>
                <Link
                  href="#investments"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={closeSheet}
                >
                  Investments
                </Link>
                <Link
                  href="#impact"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={closeSheet}
                >
                  Impact
                </Link>
                <Link
                  href="#team"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={closeSheet}
                >
                  Team
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-green-600 transition-colors"
                  onClick={closeSheet}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-8">
                <Link href="#invest" onClick={closeSheet}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Invest Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="#contact">
            <Button variant="outline" className="hidden md:flex">
              Contact Us
            </Button>
          </Link>
          <Link href="#invest">
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700">Invest Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

