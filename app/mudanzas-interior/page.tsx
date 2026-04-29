import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas al Interior del Pais | Marino Mudanzas",
  description: "Mudanzas de larga distancia a todo el pais. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

import ServiceDetailInterior from "@/components/ServiceDetailInterior";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas al Interior del País",
  "description": "Mudanzas exclusivas desde Buenos Aires a todo el país.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-interior",
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
    
    
    <ServiceDetailInterior />
    
  </>
);
}