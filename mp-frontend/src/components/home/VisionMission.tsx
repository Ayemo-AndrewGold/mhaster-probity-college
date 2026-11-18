import { SCHOOL_INFO } from "@/lib/constants";

const items = [
  { title: "Our Vision", content: SCHOOL_INFO.vision },
  { title: "Our Mission", content: SCHOOL_INFO.mission },
  { title: "Our Motto", content: SCHOOL_INFO.motto },
];

export default function VisionMission() {
  return (
    <section className="bg-[#faf9f6] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid border-y border-[#e4e2dd] md:grid-cols-3">
          {items.map((item, index) => (
            <article key={item.title} className={`py-7 md:px-7 md:py-8 ${index > 0 ? "border-t border-[#e4e2dd] md:border-l md:border-t-0" : ""} ${index > 0 ? "md:pl-8" : "md:pl-0"}`}>
              <span className="mb-3 block font-[var(--font-display)] text-2xl text-[#1e3a8a]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mb-2 text-xl text-[#1c1c1c]">{item.title}</h3>
              <p className="text-sm leading-6 text-[#6b6b68]">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
