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

export default function Page() {
  return (
  <>
    
    
    <ServiceDetailResidencial />
    
  </>
);
}