import Image from "next/image"
import ParticleBackground from "@/components/organisms/particles"
import { JSX } from "react"

export default function HeroBackground(): JSX.Element {
    return (
        <>
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <Image src="/hero.png" alt="Green energy landscape" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70" />
            </div>

            {/* Animated particles effect */}
            <div className="absolute inset-0 z-0 opacity-30">
                <ParticleBackground />
            </div>
        </>
    )
}
