import Image from "next/image"
import { teamMembers } from "@/lib/constants/team"

export function TeamSection() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#58552D] mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative aspect-square overflow-hidden rounded-full mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#58552D]">{member.name}</h3>
            <p className="text-[#A7A691]">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
