import Image from "next/image"

interface TeamCardProps {
  name: string
  role: string
  bio: string
  image: string
  bgColor: string
}

export default function TeamCard({ name, role, bio, image, bgColor }: TeamCardProps) {
  return (
    <div className={`group bg-${bgColor}`}>
      <div className="relative mb-6 w-full aspect-[3/4] overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-red-500 text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  )
}
