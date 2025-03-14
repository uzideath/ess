"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { FormEvent } from "react"

export default function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-medium">
            First Name
          </label>
          <Input id="first-name" placeholder="John" />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-medium">
            Last Name
          </label>
          <Input id="last-name" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="john.doe@example.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="investment-amount" className="text-sm font-medium">
          Investment Amount
        </label>
        <Input id="investment-amount" placeholder="$50,000" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" placeholder="Tell us about your investment goals..." className="min-h-[100px]" />
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        Submit Inquiry
      </Button>
    </form>
  )
}

