import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { PROGRAMMES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Boarding Programme",
  description:
    "Discover our boarding programme at Mhastar Probity College - a structured residential learning environment with supervised student life, fostering discipline and personal responsibility.",
};

export default function BoardingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-hostel.webp"
            alt="Boarding Facilities at Mhastar Probity College"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">BOARDING</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                A Home Away From Home
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
              Our boarding programme provides a structured residential learning
              environment where students can thrive academically while developing
              discipline, responsibility, and strong character in a supportive
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Boarding Programme Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                OVERVIEW
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {PROGRAMMES.boarding.name}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {PROGRAMMES.boarding.description}
                  </p>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Our boarding facilities offer students a comfortable and
                      secure environment where they can focus on their studies
                      and personal growth. The programme is designed to provide:
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
                        <span>Structured daily routines supporting academic success</span>
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
                        <span>Supervised learning and study periods</span>
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
                        <span>Development of independence and responsibility</span>
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
                        <span>A supportive community atmosphere</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/mp-hostel.webp"
                  alt="Boarding Accommodation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Learning Environment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/mp-laboratory.webp"
                    alt="Students in Learning Environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">ACADEMIC FOCUS</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Structured Learning Environment
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Academic Development
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our boarding programme is designed to maximize academic
                      achievement. Students benefit from dedicated study periods,
                      access to learning resources, and an environment that
                      encourages focus and concentration on their educational
                      goals.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Discipline and Structure
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The boarding environment instills strong discipline and
                      time management skills. Students learn to balance academic
                      responsibilities with personal development, preparing them
                      for future challenges in higher education and beyond.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Supervised Support
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our boarding students receive continuous supervision and
                      guidance from dedicated staff members who ensure a safe,
                      orderly, and productive living and learning environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                STUDENT LIFE
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Building Character & Responsibility
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Personal Responsibility */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Personal Responsibility
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Boarding students develop strong personal responsibility by
                  managing their daily routines, maintaining their living spaces,
                  and taking ownership of their academic progress.
                </p>
              </div>

              {/* Character Building */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Character Building
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Living in a boarding community teaches students important life
                  skills such as cooperation, respect, empathy, and effective
                  communication with peers and authority figures.
                </p>
              </div>

              {/* Supervised Environment */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Supervised Community
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our boarding staff provide continuous supervision and mentoring,
                  creating a safe and supportive environment where students can
                  grow academically and personally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                ADVANTAGES
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Boarding at Mhastar Probity College?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Focused Academic Environment
                  </h3>
                  <p className="text-gray-700">
                    Minimize distractions and maximize study time in a
                    structured learning setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Development of Independence
                  </h3>
                  <p className="text-gray-700">
                    Learn essential life skills and self-reliance in a
                    supportive environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Strong Discipline & Routine
                  </h3>
                  <p className="text-gray-700">
                    Build habits of discipline, punctuality, and time
                    management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Peer Learning & Support
                  </h3>
                  <p className="text-gray-700">
                    Benefit from collaborative learning and lasting friendships.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Continuous Supervision
                  </h3>
                  <p className="text-gray-700">
                    Safe and secure environment with caring staff oversight.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Character Formation
                  </h3>
                  <p className="text-gray-700">
                    Develop moral values, integrity, and social responsibility.
                  </p>
                </div>
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
              Experience Boarding Life at Mhastar Probity College
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Learn more about our boarding programme and how it can benefit
              your child&apos;s academic and personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" variant="secondary">
                  Apply for Boarding
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
