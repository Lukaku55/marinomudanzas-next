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

export default function Page() {
  return (
  <>
    
    
    <ServiceDetailInterior />
    
  </>
);
}