import LuxuryHeroIT from "@/components/LuxuryHeroIT";
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhyLearnWithUs from "@/components/landing/WhyLearnWithUs";
import CourseCatalog from "@/components/landing/CourseCatalog";
import ProfessionalITProjects from "@/components/ProfessionalITProjects";
import InstructorsSection from "@/components/landing/InstructorsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <LuxuryHeroIT />
      <WhyLearnWithUs />
      <CourseCatalog />
      <ProfessionalITProjects />
      <InstructorsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}