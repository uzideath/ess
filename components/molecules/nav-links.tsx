import Link from "next/link"

interface NavLink {
  href: string
  label: string
}

interface NavLinksProps {
  links: NavLink[]
  className?: string
  linkClassName?: string
}

export default function NavLinks({
  links,
  className = "hidden md:flex gap-6",
  linkClassName = "text-sm font-medium hover:text-emerald-600 transition-colors",
}: NavLinksProps) {
  return (
    <nav className={className}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={linkClassName}>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
