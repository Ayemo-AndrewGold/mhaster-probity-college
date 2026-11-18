import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { PROGRAMMES, STRENGTHS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore our comprehensive academic programmes at Mhastar Probity College - Junior Secondary School (JSS) and Senior Secondary School (SSS) with outstanding WASSCE and UTME/JAMB preparation.",
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-laboratory.webp"
            alt="Academic Excellence at Mhastar Probity College"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">ACADEMICS</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Academic Excellence & Student Success
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
              At Mhastar Probity College, we provide comprehensive academic
              programmes designed to build strong foundations, develop critical
              thinking, and prepare students for outstanding performance in
              examinations and future academic pursuits.
            </p>
          </div>
        </div>
      </section>

      {/* JSS Programme */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel className="mb-4">
                  JUNIOR SECONDARY SCHOOL
                </SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {PROGRAMMES.jss.name}
                </h2>

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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {PROGRAMMES.jss.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">Programme Levels</h3>
                    <div className="flex flex-wrap gap-3">
                      {PROGRAMMES.jss.levels.map((level) => (
                        <div
                          key={level}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                        >
                          {level}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Our Junior Secondary School programme focuses on:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Building strong academic foundations across all subjects
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Developing critical thinking and analytical skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Preparing students for higher education and senior
                        secondary challenges
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Cultivating good study habits and discipline</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mp-ictlab.webp"
                  alt="JSS Students Learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS Programme */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/mhaster-probity1.webp"
                    alt="SSS Students in Class"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">
                  SENIOR SECONDARY SCHOOL
                </SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {PROGRAMMES.sss.name}
                </h2>

                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {PROGRAMMES.sss.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h3 className="font-bold text-gray-900">Programme Levels</h3>
                    <div className="flex flex-wrap gap-3">
                      {PROGRAMMES.sss.levels.map((level) => (
                        <div
                          key={level}
                          className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg font-medium"
                        >
                          {level}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900">
                      Examination Preparation
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {PROGRAMMES.sss.examinations.map((exam) => (
                        <div
                          key={exam}
                          className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium border border-green-200"
                        >
                          {exam}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Our Senior Secondary School programme emphasizes:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Advanced subject development and mastery</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Comprehensive examination preparation strategies</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        Preparation for university entrance and future careers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Academic excellence and personal development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Preparation */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                EXAMINATION EXCELLENCE
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Outstanding Examination Preparation
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We are committed to preparing our students for exceptional
                performance in all major examinations, setting them up for
                success in higher education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* WASSCE */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {
                      STRENGTHS.find((s) => s.id === "wassce-results")
                        ?.title
                    }
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {
                    STRENGTHS.find((s) => s.id === "wassce-results")
                      ?.description
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our dedicated approach to WASSCE preparation includes
                  comprehensive curriculum coverage, regular practice sessions,
                  and targeted support to ensure students are fully prepared for
                  success.
                </p>
              </div>

              {/* UTME/JAMB */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mr-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {
                      STRENGTHS.find((s) => s.id === "utme-performance")
                        ?.title
                    }
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {
                    STRENGTHS.find((s) => s.id === "utme-performance")
                      ?.description
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We provide specialized coaching and practice for UTME/JAMB,
                  helping students achieve the scores they need for admission
                  into their preferred universities and courses.
                </p>
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
              Ready to Excel Academically?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join Mhastar Probity College and experience academic excellence
              with qualified educators dedicated to your success.
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
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
