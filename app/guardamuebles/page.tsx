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

export default function Page() {
  return (
  <>
    
    
    <ServiceDetailGuardamuebles />
    
  </>
);
}