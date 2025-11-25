import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  bgColor: string;
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  bgColor,
}: TeamCardProps) {
  return (
    <div
      className={`group w-full max-w-[277.33px] sm:max-w-[250px] md:max-w-[277.33px] mx-auto mb-6 md:mb-8`}
      style={{ maxHeight: "442px" }}
    >
      <div className="relative mb-4 w-full aspect-[3/4] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="px-1">
        <h3 className="text-base sm:text-lg font-semibold mb-1">{name}</h3>
        <p className="text-red-500 text-xs sm:text-sm mb-2">{role}</p>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{bio}</p>
      </div>
    </div>
  );
}
