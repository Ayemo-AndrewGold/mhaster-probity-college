import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROGRAMMES } from "@/lib/constants";

export default function BoardingPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1">
            <SectionLabel>BOARDING PROGRAMME</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937] mt-4 mb-6 leading-tight">
              Structured Learning. Personal Growth.
            </h2>
            <div className="space-y-4 text-[#6b7280] text-lg leading-relaxed">
              <p>{PROGRAMMES.boarding.description}</p>
              <p>
                Our boarding programme provides a supportive residential
                environment where students develop independence, discipline, and
                strong academic habits under professional supervision. Students
                benefit from structured study time, peer learning, and a
                community that encourages both academic excellence and moral
                development.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">•</span>
                  <span>24/7 supervised residential environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">•</span>
                  <span>Structured study and recreational time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">•</span>
                  <span>Development of personal responsibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f59e0b] mr-2">•</span>
                  <span>Supportive peer learning community</span>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <Link href="/boarding">
                <Button variant="primary" size="md">
                  Learn About Boarding
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/mp-hostel.webp"
                alt="Mhastar Probity College Boarding Facilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
