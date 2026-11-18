import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { SCHOOL_INFO } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="bg-[#f3f1ed] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <SectionLabel className="mb-5">About Mhastar Probity College</SectionLabel>
            <h2 className="mb-6 text-[#1c1c1c]">
              A school where academic excellence meets <em className="text-[#6b6b68]">moral values.</em>
            </h2>
            <div className="space-y-4 text-[15px] leading-7 text-[#6b6b68]">
              <p>
                Mhastar Probity College is a co-educational private secondary school committed to academic excellence and moral development. Located in the serene environment of Sango Ota, Ogun State, we provide quality education that develops students who demonstrate discipline, integrity, responsibility, and strong academic performance.
              </p>
              <p>
                We offer both day and boarding programmes for Junior and Senior Secondary School students, providing a comprehensive educational experience that prepares students for higher education and future success.
              </p>
              <p>
                Our holistic approach ensures that every student receives the support and guidance needed to excel academically while developing strong moral character and values.
              </p>
            </div>
            <Link href="/about" className="mt-7 inline-flex h-11 items-center gap-2 bg-[#f4c430] px-5 text-sm font-medium text-[#152d6e] transition-colors hover:bg-[#d4a820]">
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/mp-compund.webp" alt="Mhastar Probity College campus" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </div>
            <p className="mt-4 border-t border-[#e4e2dd] pt-3 text-xs uppercase tracking-[.12em] text-[#6b6b68]">{SCHOOL_INFO.location.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
