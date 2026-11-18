import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { FACILITIES } from "@/lib/constants";
import {
  FlaskConical,
  MonitorSmartphone,
  BookOpen,
  Trophy,
  Home,
  Trees,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore the comprehensive facilities at Mhastar Probity College including science laboratories, ICT lab, library, sporting facilities, boarding accommodation, and conducive learning environment.",
};

// Map icon names to actual components
const iconMap = {
  FlaskConical,
  MonitorSmartphone,
  BookOpen,
  Trophy,
  Home,
  Trees,
};

// Map facility IDs to images
const facilityImages: Record<string, string> = {
  "science-labs": "/images/mp-laboratory.webp",
  "ict-lab": "/images/mp-ictlab.webp",
  library: "/images/mp-compund.webp",
  sports: "/images/mp-playground.webp",
  boarding: "/images/mp-hostel.webp",
  environment: "/images/mp-externalbuilding.webp",
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-compund.webp"
            alt="Mhastar Probity College Facilities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">FACILITIES</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                World-Class Learning Facilities
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Mhastar Probity College is equipped with modern facilities that
              support both academic excellence and holistic student development.
              Our infrastructure is designed to provide a conducive learning
              environment where students can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {FACILITIES.map((facility) => {
                const IconComponent =
                  iconMap[facility.icon as keyof typeof iconMap];
                const imageSrc = facilityImages[facility.id];

                return (
                  <div
                    key={facility.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Facility Image */}
                    <div className="relative h-64 w-full">
                      <Image
                        src={imageSrc}
                        alt={facility.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                          {IconComponent && (
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Facility Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {facility.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Facilities Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Science Laboratories */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel className="mb-4">STEM EDUCATION</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Equipped Science Laboratories
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our science laboratories are equipped to support practical
                    science education across Physics, Chemistry, and Biology.
                    Students gain hands-on experience that reinforces theoretical
                    knowledge and develops scientific inquiry skills.
                  </p>
                  <p>
                    The laboratories provide a safe and conducive environment for
                    experiments, fostering curiosity and deepening understanding
                    of scientific concepts essential for WASSCE and UTME success.
                  </p>
                </div>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mp-laboratory.webp"
                  alt="Science Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ICT Laboratory */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/mp-ictlab.webp"
                    alt="ICT Laboratory"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">TECHNOLOGY</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Modern ICT Laboratory
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our ICT laboratory provides students with access to modern
                    computer facilities for technology education. Students develop
                    essential digital literacy skills and gain proficiency in
                    computer applications.
                  </p>
                  <p>
                    The facility supports both curricular ICT education and
                    practical skills development, preparing students for the
                    digital demands of higher education and the modern workplace.
                  </p>
                </div>
              </div>
            </div>

            {/* Sporting Facilities */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel className="mb-4">SPORTS & RECREATION</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Sporting Facilities
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our sporting facilities support physical education and
                    extracurricular sports activities. We believe in holistic
                    development that includes physical fitness, teamwork, and
                    sportsmanship.
                  </p>
                  <p>
                    Students have opportunities to engage in various sports and
                    physical activities, promoting healthy lifestyles and
                    developing leadership, cooperation, and competitive spirit.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/mp-playground.webp"
                    alt="Sports Field"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/mp-playground2.webp"
                    alt="Playground"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-9 h-9 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              School Library
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our school library is well-stocked with educational resources that
              support research and promote a strong reading culture among
              students. The library provides a quiet space for independent study
              and access to books across various subjects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We continually expand our collection to meet the academic needs of
              our students and encourage lifelong learning habits.
            </p>
          </div>
        </div>
      </section>

      {/* Boarding Facilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mp-hostel.webp"
                  alt="Boarding Facilities"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <SectionLabel className="mb-4">RESIDENTIAL</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Boarding Facilities
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our boarding facilities provide comfortable residential
                    accommodation for boarding students. The facilities are
                    designed to offer a home-like environment where students can
                    live, study, and develop in a structured and supervised
                    setting.
                  </p>
                  <p>
                    Boarding students benefit from a conducive atmosphere for
                    academic focus while developing independence, discipline, and
                    personal responsibility.
                  </p>
                  <div className="mt-6">
                    <Link href="/boarding">
                      <Button variant="primary">
                        Learn More About Boarding
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Environment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel className="mb-4">OUR CAMPUS</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Conducive Learning Environment
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The overall campus environment at Mhastar Probity College is
                    serene, well-maintained, and designed to promote effective
                    learning. Our location in Ijoko, Sango Ota provides a
                    peaceful setting away from urban distractions.
                  </p>
                  <p>
                    We maintain clean, organized, and attractive surroundings
                    that reflect our commitment to excellence. The campus
                    atmosphere encourages concentration, discipline, and a
                    positive attitude toward learning.
                  </p>
                  <p>
                    Every aspect of our physical environment is carefully
                    considered to support both academic achievement and the
                    holistic development of our students.
                  </p>
                </div>
              </div>

              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mp-externalbuilding.webp"
                  alt="School Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Visit Our Campus
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Experience our facilities firsthand. Schedule a visit to see how
              Mhastar Probity College provides an excellent environment for
              learning and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Visit
                </Button>
              </Link>
              <Link href="/admissions">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Apply for Admission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
