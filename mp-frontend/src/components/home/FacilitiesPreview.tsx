import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const facilities = [
  { title: "Science Laboratories", image: "/images/mp-laboratory.webp", alt: "Equipped Science Laboratory" },
  { title: "ICT Laboratory", image: "/images/mp-ictlab.webp", alt: "Modern ICT Learning Facilities" },
  { title: "Library", image: "/images/mp2.webp", alt: "School Library" },
  { title: "Sporting Facilities", image: "/images/mp-playground.webp", alt: "School Sports Ground" },
  { title: "Boarding", image: "/images/mp-hostel.webp", alt: "Comfortable Boarding Accommodation" },
];

export default function FacilitiesPreview() {
  return (
    <section className="bg-[#f3f1ed] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 grid gap-5 border-b border-[#e4e2dd] pb-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <div><SectionLabel className="mb-3">Our facilities</SectionLabel><h2 className="text-[#1c1c1c]">Modern Facilities for Better Learning</h2></div>
          <p className="max-w-md text-sm leading-6 text-[#6b6b68]">Our facilities provide students with the resources and environment they need to excel academically and personally.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {facilities.map((facility) => (
            <Link key={facility.title} href="/facilities" className="group">
              <div className="relative mb-3 aspect-[4/3] overflow-hidden">
                <Image src={facility.image} alt={facility.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <h3 className="border-t border-[#e4e2dd] pt-2.5 text-base text-[#1c1c1c] group-hover:text-[#1e3a8a]">{facility.title}</h3>
            </Link>
          ))}
        </div>
        <Link href="/facilities" className="mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.12em] text-[#1e3a8a] hover:text-[#a88716]">View all facilities <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
