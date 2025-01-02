import { BranchList } from "@/components/branch/branch-list"
import { BranchMap } from "@/components/branch/branch-map"

export default function BranchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-[#58552D] mb-6">Outlet Cabang</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BranchMap />
        <BranchList />
      </div>
    </div>
  )
}
