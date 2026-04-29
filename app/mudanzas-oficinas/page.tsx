import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Oficinas en Buenos Aires | Marino Mudanzas",
  description: "Traslado de oficinas y empresas en CABA y GBA. Mas de 80 años de experiencia. Presupuesto sin cargo.",
};

import ServiceDetailComercial from "@/components/ServiceDetailComercial";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas de Oficinas en Buenos Aires",
  "description": "Servicio especializado de mudanzas corporativas en CABA y GBA.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-oficinas",
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
    
    
    <ServiceDetailComercial />
    
  </>
);
}