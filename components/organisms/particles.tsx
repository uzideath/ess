"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"

type Particle = {
  width: number
  height: number
  top: string
  left: string
  animationDelay: string
  animationDuration: string
}

const PARTICLE_COUNT = 20

function generateParticles(seed = 42): Particle[] {
  const particles: Particle[] = []
  const rng = mulberry32(seed)

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      width: rng() * 10 + 5,
      height: rng() * 10 + 5,
      top: `${rng() * 100}%`,
      left: `${rng() * 100}%`,
      animationDelay: `${rng() * 10}s`,
      animationDuration: `${rng() * 20 + 10}s`,
    })
  }

  return particles
}

// Simple seedable PRNG
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function ParticleBackground() {
  const particles = useMemo(() => generateParticles(1337), [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className={cn("absolute rounded-full bg-green-500/30 animate-float-slow")}
          style={{
            width: `${p.width}px`,
            height: `${p.height}px`,
            top: p.top,
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  )
}
