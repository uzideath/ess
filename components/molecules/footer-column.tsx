import type React from "react"
import Link from "next/link"

interface FooterLink {
  href: string
  label: string
}

interface FooterColumnProps {
  title: string
  links?: FooterLink[]
  content?: React.ReactNode
}

export default function FooterColumn({ title, links, content }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      {links ? (
        <ul className="space-y-2 text-emerald-200">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-emerald-200">{content}</div>
      )}
    </div>
  )
}
