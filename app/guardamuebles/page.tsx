import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guardamuebles en Buenos Aires | Marino Mudanzas",
  description: "Guardamuebles seguro en Buenos Aires. Espacios monitoreados 24hs en Flores CABA. Consultanos sin cargo.",
};

import ServiceDetailGuardamuebles from "@/components/ServiceDetailGuardamuebles";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Guardamuebles en Buenos Aires",
  "description": "Almacenaje seguro y monitoreado en Flores, CABA.",
  "url": "https://www.mudanzasmarino.com.ar/guardamuebles",
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
    
    
    <ServiceDetailGuardamuebles />
    
  </>
);
}