import { branchLocations } from "@/lib/constants/branches"

export function BranchList() {
  return (
    <div className="space-y-4">
      {branchLocations.map((branch) => (
        <div key={branch.id} className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-[#58552D]">{branch.name}</h3>
          <p className="text-[#A7A691] mt-1">{branch.address}</p>
          <p className="text-[#A7A691] mt-1">Phone: {branch.phone}</p>
          <p className="text-[#A7A691] mt-1">Hours: {branch.hours}</p>
        </div>
      ))}
    </div>
  )
}
