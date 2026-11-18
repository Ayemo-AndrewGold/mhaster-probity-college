import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Gallery | School Life",
  description:
    "Explore life at Mhastar Probity College through our photo gallery. View our campus, facilities, student activities, and more.",
};

// Gallery images organized by category
const GALLERY_IMAGES = {
  campus: [
    {
      src: "/images/mp-compund.webp",
      alt: "Mhastar Probity College campus compound with buildings and grounds",
      category: "Campus",
    },
    {
      src: "/images/mp-externalbuilding.webp",
      alt: "External view of Mhastar Probity College main building",
      category: "Campus",
    },
    {
      src: "/images/mhaster-probity1.webp",
      alt: "Mhastar Probity College school building and entrance",
      category: "Campus",
    },
    {
      src: "/images/mp2.webp",
      alt: "Additional view of Mhastar Probity College campus",
      category: "Campus",
    },
  ],
  facilities: [
    {
      src: "/images/mp-laboratory.webp",
      alt: "Science laboratory with equipment for practical learning",
      category: "Facilities",
    },
    {
      src: "/images/mp-ictlab.webp",
      alt: "ICT computer laboratory with modern learning technology",
      category: "Facilities",
    },
    {
      src: "/images/mp-hostel.webp",
      alt: "Boarding hostel facilities for residential students",
      category: "Facilities",
    },
    {
      src: "/images/mp-playground.webp",
      alt: "School playground and sporting facilities",
      category: "Facilities",
    },
    {
      src: "/images/mp-playground2.webp",
      alt: "Additional view of school sports and recreational area",
      category: "Facilities",
    },
    {
      src: "/images/mp-schoolbus1.webp",
      alt: "School bus for student transportation",
      category: "Facilities",
    },
  ],
  activities: [
    {
      src: "/images/mp-corographystudentpartydance.webp",
      alt: "Students performing choreographed dance at school event",
      category: "Activities",
    },
    {
      src: "/images/mp-skillaquisition.webp",
      alt: "Students engaged in skill acquisition programme",
      category: "Activities",
    },
    {
      src: "/images/mp-wincoubepedia.webp",
      alt: "Students participating in Cowbellpedia mathematics competition",
      category: "Activities",
    },
  ],
  other: [
    {
      src: "/images/mp-flyer.jpg",
      alt: "Mhastar Probity College promotional flyer",
      category: "Other",
    },
  ],
} as const;

// Flatten all images into a single array
const ALL_IMAGES = [
  ...GALLERY_IMAGES.campus,
  ...GALLERY_IMAGES.facilities,
  ...GALLERY_IMAGES.activities,
  ...GALLERY_IMAGES.other,
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-[#0A2463]">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">
                GALLERY
              </SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                School Life at Mhastar Probity College
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                Explore our campus, facilities, and vibrant student life through
                our photo gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel className="mb-3">CAMPUS</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              Our Campus
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A serene and conducive environment for learning and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.campus.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel className="mb-3">FACILITIES</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              Our Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Well-equipped spaces supporting academic excellence and holistic
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.facilities.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Gallery Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel className="mb-3">ACTIVITIES</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              Student Activities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Engaging in diverse activities that build skills and character.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.activities.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Images Section */}
      <section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel className="mb-3">MORE</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2463]">
              Additional Resources
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.other.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Images Overview (Optional - for reference) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed">
              This gallery showcases the authentic environment and experiences
              at Mhastar Probity College. We regularly update our gallery with
              new images from school events, activities, and campus life.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Gallery contains {ALL_IMAGES.length} images across{" "}
              {Object.keys(GALLERY_IMAGES).length} categories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
