const features = [
  "Academic Excellence",
  "Moral Discipline",
  "Qualified Educators",
  "Conducive Learning",
  "Exam Preparation",
  "Student Development",
];

export default function IconFeatureStrip() {
  return (
    <section className="border-y border-[#e4e2dd] bg-[#faf9f6] py-7 sm:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-10">
        {features.map((feature, index) => (
          <div key={feature} className={`border-[#e4e2dd] py-3 ${index % 2 === 0 ? "border-r" : ""} sm:border-r sm:px-4 lg:px-5 ${index === features.length - 1 ? "lg:border-r-0" : ""}`}>
            <span className="mb-1 block font-[var(--font-display)] text-lg leading-none text-[#1e3a8a]">{String(index + 1).padStart(2, "0")}</span>
            <span className="block text-[11px] font-medium uppercase leading-5 tracking-[.08em] text-[#6b6b68]">{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
