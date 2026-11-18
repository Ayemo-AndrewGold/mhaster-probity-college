import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SCHOOL_INFO, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mhastar Probity College. Visit us at Ijoko, Sango Ota, or call us for enquiries about admissions, programmes, and school information.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/mp-externalbuilding.webp"
            alt="Mhastar Probity College - Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/70 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <SectionLabel className="mb-4">CONTACT US</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get In Touch
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                We&apos;re here to answer your questions and provide information
                about Mhastar Probity College.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* School Information Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    School Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {SCHOOL_INFO.name}
                    </h3>
                    <p className="text-sm text-gray-600 italic">
                      {SCHOOL_INFO.motto}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {CONTACT.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact Details
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Phone Numbers
                    </h3>
                    <div className="space-y-3">
                      {CONTACT.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                        >
                          <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-900 font-medium group-hover:text-amber-600 transition-colors">
                            {phone}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Our administrative office is available during school hours
                      to assist with enquiries about admissions, programmes, and
                      general information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                CONNECT WITH US
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Follow Us on Social Media
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Stay updated with school news, events, and announcements.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* LinkedIn */}
                <a
                  href={CONTACT.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      LinkedIn
                    </h3>
                    <p className="text-sm text-gray-600">
                      Connect with us professionally
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={CONTACT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-pink-50 to-purple-100/50 rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Instagram
                    </h3>
                    <p className="text-sm text-gray-600">
                      See our daily highlights
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mb-4 justify-center">
                REACH OUT
              </SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                We&apos;d Love to Hear From You
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12">
              <div className="text-center space-y-6">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Whether you&apos;re interested in enrolling your child,
                  learning more about our programmes, or scheduling a campus
                  visit, we&apos;re here to help.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Contact us via phone or email, or visit our campus to speak
                  with our admissions team and tour our facilities.
                </p>

                <div className="pt-6">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-[#0A2463] hover:bg-[#051733] text-white transition-colors"
                  >
                    Enquire About Admission
                  </Link>
                </div>
              </div>
            </div>

            {/* Future Features Note */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong className="text-gray-900">Coming Soon:</strong> Google
                Maps integration and WhatsApp contact are planned for future
                updates to make it even easier to find and reach us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 md:py-20 bg-[#0A2463]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Visit Our Campus
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              We welcome prospective students and parents to visit our campus
              and experience the serene learning environment firsthand.
            </p>
            <p className="text-lg text-gray-300">
              Schedule your visit by calling us or sending an email. We look
              forward to meeting you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
