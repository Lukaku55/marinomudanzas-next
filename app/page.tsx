"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceDetailResidencial from "@/components/ServiceDetailResidencial";
import ServiceDetailComercial from "@/components/ServiceDetailComercial";
import ServiceDetailGuardamuebles from "@/components/ServiceDetailGuardamuebles";
import ServiceDetailInterior from "@/components/ServiceDetailInterior";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import ZonasCoberturaFull from "@/components/ZonasCoberturaFull";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServiceDetailResidencial />
        <ServiceDetailComercial />
        <ServiceDetailGuardamuebles />
        <ServiceDetailInterior />
        <AboutSection />
        <InnovationSection />
        <ZonasCoberturaFull />
        <TestimonialsSection />
        <CTASection />
        <ContactForm />
        <FAQSection />
        <TrustedBySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
