import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const galleryImages = [
  {
    src: "/images/mp-corographystudentpartydance.webp",
    alt: "Student Cultural Dance Performance",
  },
  {
    src: "/images/mp-skillaquisition.webp",
    alt: "Skills Acquisition Programme",
  },
  {
    src: "/images/mp-wincoubepedia.webp",
    alt: "Academic Competition Achievement",
  },
  {
    src: "/images/mp-corographystudentpartydance.webp",
    alt: "Students at Play",
  },
  {
    src: "/images/mhaster-probity1.webp",
    alt: "School Campus View",
  },
  {
    src: "/images/mp2.webp",
    alt: "School Building and Grounds",
  },
  {
    src: "/images/mp-schoolbus1.webp",
    alt: "School Transportation",
  },
  {
    src: "/images/mp-externalbuilding.webp",
    alt: "School Building Exterior",
  },
];

export default function GalleryPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <SectionLabel className="mb-4">OUR GALLERY</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              Moments at Mhastar Probity College
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center text-[#0A2463] hover:text-amber-600 font-semibold transition-colors"
          >
            View Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center text-[#0A2463] hover:text-amber-600 font-semibold transition-colors"
          >
            View Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
