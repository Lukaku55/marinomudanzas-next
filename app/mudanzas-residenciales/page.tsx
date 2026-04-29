import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Residenciales en Buenos Aires | Marino Mudanzas",
  description: "Mudanzas de casas y departamentos en CABA y GBA. Embalaje profesional y más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

import ServiceDetailResidencial from "@/components/ServiceDetailResidencial";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas Residenciales en CABA y GBA",
  "description": "Servicio profesional de mudanzas residenciales en Buenos Aires.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-residenciales",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar",
    "telephone": "+541146111818",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Juan Bautista Alberdi 2968",
      "addressLocality": "Flores",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    }
  }
};

export default function Page() {
  return (
  <>
    
    
    <ServiceDetailResidencial />
    
  </>
);
}