"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { FormEvent } from "react"

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter form submitted")
  }

  return (
    <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={handleSubmit}>
      <Input placeholder="Enter your email" className="flex-1" />
      <Button type="submit" className="bg-green-600 hover:bg-green-700">
        Subscribe
      </Button>
    </form>
  )
}

