import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdmissionCTA() {
  return (
    <section className="bg-[#152d6e] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span aria-hidden="true" className="mx-auto mb-5 block h-px w-10 bg-[#f4c430]" />
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[.16em] text-[#f9d96a]">Admissions</p>
        <h2 className="mb-5 text-white">Join a School That Builds a Greater Future</h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-white/70">
          Take the first step towards academic excellence and moral development. Begin your journey with us today and unlock your full potential.
        </p>
        <Link href="/admissions" className="inline-flex h-12 items-center gap-2 bg-[#f4c430] px-6 text-sm font-medium text-[#152d6e] transition-colors hover:bg-[#d4a820]">
          Apply for Admissions <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
