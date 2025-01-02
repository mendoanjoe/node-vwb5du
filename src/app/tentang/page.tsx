import { CompanyHistory } from "@/components/about/company-history"
import { CompanyValues } from "@/components/about/company-values"
import { TeamSection } from "@/components/about/team-section"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <CompanyHistory />
      <CompanyValues />
      <TeamSection />
    </div>
  )
}
