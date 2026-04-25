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

export default function Page() {
  return (
  <>
    
    
    <ServiceDetailComercial />
    
  </>
);
}