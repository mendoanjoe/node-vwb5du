import { ArticleGrid } from "@/components/article/article-grid"
import { FeaturedArticle } from "@/components/article/featured-article"

export default function ArticlePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <FeaturedArticle />
      <ArticleGrid />
    </div>
  )
}
