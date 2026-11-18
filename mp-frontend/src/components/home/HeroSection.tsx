import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[680px] w-full overflow-hidden bg-[#152d6e] sm:min-h-[740px] lg:min-h-[100svh]">
      <div className="absolute inset-0">
        <Image src="/images/mhaster-probity1.webp" alt="Mhastar Probity College campus" fill priority sizes="100vw" className="object-cover object-center" />
        {/* Lighter blue overlay - reduced from 75% to 45% */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-20 pt-28 sm:min-h-[740px] sm:px-8 lg:min-h-[100svh] lg:px-10">
        <div className="w-full max-w-[46rem] py-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#f9d96a]" />
            <span className="text-[11px] font-medium uppercase tracking-[.16em] text-[#f4c430]">Welcome to Mhastar Probity College</span>
          </div>
          <h1 className="max-w-4xl text-white">
            Building bright minds.<br />
            <em className="font-normal text-[#f4c430]">Shaping values.</em><br />
            Inspiring excellence.
          </h1>
          <p className="mt-7 max-w-[37rem] text-base leading-7 text-white/90 sm:text-[17px]">
            At {SCHOOL_INFO.name}, we nurture academic excellence, discipline, and integrity in a serene environment where every student is encouraged to reach their full potential.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[.12em] text-white/70">{SCHOOL_INFO.motto}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/admissions" className="inline-flex h-[50px] items-center gap-2 bg-[#f4c430] px-6 text-sm font-medium tracking-[.02em] text-[#152d6e] transition-colors hover:bg-[#d4a820] sm:px-8">
              Enquire about admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="inline-flex h-[50px] items-center border-2 border-white/60 px-6 text-sm text-white transition-colors hover:border-white hover:bg-white/10 sm:px-8">
              Explore our school
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
