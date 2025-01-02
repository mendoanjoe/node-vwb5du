import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/types/article"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/artikel/${article.slug}`}>
      <article className="group cursor-pointer">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm text-[#A7A691]">{formatDate(article.date)}</p>
          <h3 className="mt-2 text-xl font-semibold text-[#58552D] group-hover:text-[#A7A691] transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-[#A7A691] line-clamp-2">{article.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
