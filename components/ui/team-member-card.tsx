import Image from "next/image"

interface TeamMemberCardProps {
  name: string
  position: string
  bio: string
  imageSrc: string
}

export default function TeamMemberCard({ name, position, bio, imageSrc }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-green-600 mb-3">{position}</p>
      <p className="text-muted-foreground mb-4 max-w-xs">{bio}</p>
      <div className="flex gap-4">{/* Social media icons would go here */}</div>
    </div>
  )
}

