import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { SCHOOL_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mhastar Probity College - a co-educational private secondary school committed to academic excellence and moral development in Sango Ota, Ogun State.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-externalbuilding.webp"
            alt="Mhastar Probity College"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">ABOUT US</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Towards Academic & Moral Excellence
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* School Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionLabel className="mb-4">OUR STORY</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A School Where Academic Excellence Meets Moral Values
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                <strong>{SCHOOL_INFO.name}</strong> is a{" "}
                {SCHOOL_INFO.type.toLowerCase()} located in{" "}
                {SCHOOL_INFO.location.address}. Our institution is committed to
                academic excellence and moral development, providing quality
                education in a serene and conducive learning environment.
              </p>
              <p>
                We believe in developing students who demonstrate discipline,
                integrity, responsibility, and strong academic performance. Our
                approach combines rigorous academic instruction with character
                development, ensuring that our students are well-prepared for
                both higher education and life beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                OUR DIRECTION
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {SCHOOL_INFO.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {SCHOOL_INFO.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                OUR APPROACH
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                School Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Excellence */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Academic Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to providing rigorous academic instruction
                  that prepares our students for outstanding performance in
                  WASSCE, UTME/JAMB, and beyond. Our qualified educators employ
                  proven teaching methodologies to ensure every student achieves
                  their full academic potential.
                </p>
              </div>

              {/* Moral Development */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Moral Discipline
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Character development is at the heart of our educational
                  philosophy. We instill values of discipline, integrity,
                  responsibility, and respect in our students, preparing them to
                  become morally upright individuals who contribute positively
                  to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/mp-compund.webp"
                    alt="Mhastar Probity College Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">OUR CAMPUS</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  A Serene and Conducive Learning Environment
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our campus is carefully designed to provide a peaceful and
                    focused atmosphere that promotes effective learning. The
                    serene environment allows students to concentrate on their
                    studies while enjoying a safe and comfortable space for
                    personal growth.
                  </p>
                  <p>
                    We maintain well-equipped facilities, clean surroundings,
                    and organized spaces that reflect our commitment to
                    excellence. From our science laboratories to our sporting
                    facilities, every aspect of our campus supports both
                    academic achievement and holistic student development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Relationship */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel className="mb-4 justify-center">
              COMMUNITY ENGAGEMENT
            </SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strong Community Ties
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mhastar Probity College maintains a strong and positive
              relationship with the surrounding community in Ijoko, Sango Ota.
              We believe in being responsible community members and actively
              engage with local stakeholders, parents, and community leaders to
              create a supportive environment for our students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This collaborative approach ensures that our students benefit from
              a network of support extending beyond the school gates, fostering
              a sense of belonging and shared responsibility for their success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Community of Excellence
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Discover how Mhastar Probity College can help your child achieve
              academic excellence and develop strong moral character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" variant="secondary">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
