import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { featuredArticle } from "@/lib/constants/articles"

export function FeaturedArticle() {
  return (
    <Link href={`/artikel/${featuredArticle.slug}`}>
      <article className="group cursor-pointer relative rounded-lg overflow-hidden">
        <div className="relative aspect-[21/9]">
          <Image
            src={featuredArticle.coverImage}
            alt={featuredArticle.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-white/80 mb-2">{formatDate(featuredArticle.date)}</p>
            <h2 className="text-3xl font-bold text-white mb-4">{featuredArticle.title}</h2>
            <p className="text-white/90">{featuredArticle.excerpt}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
