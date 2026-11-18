import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROGRAMMES } from "@/lib/constants";

const programmes = [
  { code: "JSS", info: PROGRAMMES.jss, image: "/images/mp-laboratory.webp", alt: "Science laboratory for junior secondary students" },
  { code: "SSS", info: PROGRAMMES.sss, image: "/images/mp-ictlab.webp", alt: "ICT laboratory for senior secondary students" },
];

export default function AcademicProgrammes() {
  return (
    <section className="bg-[#faf9f6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 grid gap-5 border-b border-[#e4e2dd] pb-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <SectionLabel className="mb-3">Our programmes</SectionLabel>
            <h2 className="text-[#1c1c1c]">Academic Programmes</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#6b6b68]">
            From foundation to excellence, our programmes prepare students for academic success and future opportunities.
          </p>
        </div>

        <div className="divide-y divide-[#e4e2dd] border-b border-[#e4e2dd]">
          {programmes.map(({ code, info, image, alt }) => (
            <article key={code} className="grid gap-5 py-6 sm:grid-cols-[68px_150px_1fr_auto] sm:items-center sm:gap-7 sm:py-7">
              <span className="font-[var(--font-display)] text-2xl text-[#1e3a8a]">{code}</span>
              <div className="relative aspect-[3/2] overflow-hidden sm:aspect-[4/3]">
                <Image src={image} alt={alt} fill sizes="(max-width: 640px) 100vw, 150px" className="object-cover" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl text-[#1c1c1c]">{info.name}</h3>
                <p className="max-w-2xl text-sm leading-6 text-[#6b6b68]">{info.description}</p>
                <p className="mt-3 text-xs uppercase tracking-[.1em] text-[#8a8a85]">{info.levels.join(" · ")}</p>
              </div>
              <Link href="/academics" className="inline-flex items-center gap-2 text-sm font-medium text-[#1e3a8a] transition-colors hover:text-[#a88716] sm:justify-self-end">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
        <Link href="/academics" className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.12em] text-[#1e3a8a] hover:text-[#a88716]">
          View all programmes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
