import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, AlertCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROGRAMMES, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Join Mhastar Probity College - learn about our admission process, academic programmes, and how to apply. Visit our administrative office to obtain the entrance application form.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-externalbuilding.webp"
            alt="Mhastar Probity College - Admissions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/70 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">ADMISSIONS</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Join Our Community
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                Begin your journey towards academic excellence and moral
                development at Mhastar Probity College.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel className="mb-4 justify-center">
              WELCOME
            </SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Welcome Your Family to Mhastar Probity College
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are delighted that you are considering Mhastar Probity College
              for your child&apos;s education. Our institution provides a nurturing
              environment where students develop academically, morally, and
              socially. We offer comprehensive programmes designed to prepare
              students for success in examinations and beyond, all within a
              serene and conducive learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programmes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                OUR PROGRAMMES
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Academic Programmes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* JSS Card */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {PROGRAMMES.jss.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {PROGRAMMES.jss.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {PROGRAMMES.jss.levels.map((level) => (
                    <span
                      key={level}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              {/* SSS Card */}
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {PROGRAMMES.sss.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {PROGRAMMES.sss.description}
                </p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {PROGRAMMES.sss.levels.map((level) => (
                      <span
                        key={level}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium rounded-lg"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      Examination Preparation:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PROGRAMMES.sss.examinations.map((exam) => (
                        <span
                          key={exam}
                          className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-lg"
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day and Boarding Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Day School */}
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {PROGRAMMES.day.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {PROGRAMMES.day.description}
                </p>
              </div>

              {/* Boarding School */}
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {PROGRAMMES.boarding.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {PROGRAMMES.boarding.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                APPLICATION PROCESS
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How to Apply
              </h2>
            </div>

            {/* Important Notice Card */}
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 md:p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A2463] mb-3">
                    Entrance Application Form
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    The entrance application form is available physically at the
                    school&apos;s administrative office. Parents and guardians
                    are welcome to visit the school during working hours to
                    obtain and submit the entrance form.
                  </p>
                </div>
              </div>
            </div>

            {/* Application Steps */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0A2463] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#0A2463] mb-2">
                    Visit the School
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Schedule a visit to our administrative office during working
                    hours to collect the entrance application form and learn
                    more about our programmes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0A2463] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#0A2463] mb-2">
                    Complete the Application Form
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Fill out the application form carefully with accurate
                    information about your child and family details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0A2463] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-[#0A2463] mb-2">
                    Submit Your Application
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Return the completed form to the administrative office along
                    with any required documents. Our admissions team will review
                    your application and contact you with next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Location and Contact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                VISIT US
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                School Location and Contact
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Address */}
                <div>
                  <div className="flex items-start gap-3 mb-6">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Address
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {CONTACT.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Phone Numbers
                      </h3>
                      <div className="space-y-2">
                        {CONTACT.phones.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="block text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <p className="text-gray-700 text-center leading-relaxed">
                  We encourage parents and guardians to visit our campus to see
                  our facilities firsthand and meet our staff. Our team is
                  available to answer any questions about the admission process
                  and our educational programmes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0A2463]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to learn more about our admission process and
              schedule a visit to our campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition-colors"
              >
                Enquire Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-[#0A2463] hover:bg-gray-100 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
