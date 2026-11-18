import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import IconFeatureStrip from "@/components/home/IconFeatureStrip";
import AboutPreview from "@/components/home/AboutPreview";
import VisionMission from "@/components/home/VisionMission";
import AcademicProgrammes from "@/components/home/AcademicProgrammes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mhastar Probity College - A co-educational private secondary school in Sango Ota, Ogun State, Nigeria, committed to academic excellence and moral development in a serene learning environment.",
};

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <IconFeatureStrip />
      <AboutPreview />
      <VisionMission />
      <AcademicProgrammes />
      <WhyChooseUs />
      <FacilitiesPreview />
      <GalleryPreview />
      <AdmissionCTA />
    </div>
  );
}
