"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
    Menu,
    X,
    ChevronRight,
    Home,
    LineChart,
    BarChart3,
    Mail,
    ArrowRight,
    Info,
} from "lucide-react"

interface MobileMenuProps {
    open: boolean
    setOpen: (open: boolean) => void
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
    const [activeSection, setActiveSection] = useState("home")
    const [mounted, setMounted] = useState(false)

    const closeSheet = () => setOpen(false)

    useEffect(() => {
        setMounted(true)

        const handleScroll = () => {
            const sections = ["home", "about", "investments", "impact", "contact"]

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "#home", label: "Home", icon: <Home className="h-5 w-5" /> },
        { href: "#about", label: "About", icon: <Info className="h-5 w-5" /> },
        { href: "#investments", label: "Investments", icon: <LineChart className="h-5 w-5" /> },
        { href: "#impact", label: "Impact", icon: <BarChart3 className="h-5 w-5" /> },
        { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
    ]

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white hover:bg-white/10 transition-all duration-300 rounded-full"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent
                side="left"
                className="p-0 w-[320px] border-r border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] backdrop-blur-sm"
            >
                <DialogTitle>
                    <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                </DialogTitle>

                <div className="h-full flex flex-col">
                    {/* Header with logo and close button */}
                    <div className="flex items-center justify-between p-5 border-b border-white/10">
                        <div className="flex items-center">
                            <Image src="/logo2.png" alt="Logo" width={40} height={40} className="h-10 w-10" />
                            <span className="ml-2 font-medium text-white">ESS Platform</span>
                        </div>
                        <SheetClose asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90"
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-auto py-8 px-5">
                        <div className="space-y-2.5">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1)
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`group flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 ${isActive
                                            ? "bg-gradient-to-r from-green-600/20 to-emerald-600/10 text-green-400 border border-green-500/20"
                                            : "text-white/90 hover:bg-white/5 border border-transparent"
                                            }`}
                                        onClick={closeSheet}
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <div
                                                className={`${isActive
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white"
                                                    } p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center`}
                                            >
                                                {item.icon}
                                            </div>
                                            <span
                                                className={`font-medium transition-all duration-300 ${isActive ? "text-green-400" : "text-white/90 group-hover:text-white"
                                                    }`}
                                            >
                                                {item.label}
                                            </span>
                                        </div>
                                        <ChevronRight
                                            className={`h-4 w-4 transition-all duration-300 ${isActive
                                                ? "opacity-100 text-green-400 translate-x-0"
                                                : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 text-white/70"
                                                }`}
                                        />
                                    </Link>
                                )
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10 px-3">
                            <Link href="#contact" onClick={closeSheet}>
                                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-medium py-6 rounded-xl shadow-lg shadow-green-900/30 transition-all duration-300 hover:translate-y-[-2px] group">
                                    <span>Invest Now</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>

                        {/* Decorative element */}
                        <div className="relative mt-12 mb-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-black px-4 text-xs uppercase tracking-wider text-white/40">Featured</span>
                            </div>
                        </div>

                        {/* Featured content */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                            <h3 className="text-sm font-medium text-white mb-2">Latest Investment Opportunity</h3>
                            <p className="text-xs text-white/70 mb-3">
                                Energy System Services with 12% projected annual returns and positive environmental impact.
                            </p>
                            <Link href="#investments" onClick={closeSheet}>
                                <Button
                                    variant="ghost"
                                    className="w-full h-9 text-xs text-green-400 hover:text-green-300 hover:bg-green-900/20 justify-between group"
                                >
                                
                                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </nav>

                    <div className="p-5 border-t border-white/10">
                        <p className="text-center text-xs text-white/40">© 2025 ESS. All rights reserved.</p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
