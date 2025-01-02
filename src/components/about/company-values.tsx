export function CompanyValues() {
  const values = [
    {
      title: "Quality",
      description: "We use only the finest materials and maintain strict quality control."
    },
    {
      title: "Integrity",
      description: "Transparency and honesty in all our business practices."
    },
    {
      title: "Innovation",
      description: "Continuously improving our designs and processes."
    },
    {
      title: "Customer Focus",
      description: "Dedicated to providing exceptional service and satisfaction."
    }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-[#58552D] mb-6">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-[#58552D] mb-2">{value.title}</h3>
            <p className="text-[#A7A691]">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
