import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  "Proven Academic Excellence",
  "Discipline & Integrity",
  "Serene Learning Environment",
  "Strong Community Relationship",
  "Qualified & Committed Staff",
  "Holistic Student Development",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f1ed] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionLabel className="mb-5">Why choose us</SectionLabel>
            <h2 className="mb-5 text-[#1c1c1c]">Why Choose Mhastar Probity College?</h2>
            <p className="text-sm leading-6 text-[#6b6b68]">Our school combines academic learning and moral development in a serene environment for students.</p>
            <Link href="/about" className="mt-7 inline-flex h-11 items-center gap-2 border border-[#1e3a8a] px-5 text-sm font-medium text-[#1e3a8a] transition-colors hover:bg-[#1e3a8a] hover:text-white">
              Discover more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <div className="relative mb-7 aspect-[16/10] overflow-hidden">
              <Image src="/images/mp2.webp" alt="Students at Mhastar Probity College" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
            <ol className="border-t border-[#e4e2dd]">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-5 border-b border-[#e4e2dd] py-4">
                  <span className="w-8 shrink-0 font-[var(--font-display)] text-xl text-[#1e3a8a]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-[#1c1c1c]">{feature}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
