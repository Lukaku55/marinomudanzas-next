import type { Metadata } from "next";
import Portada from "@/components/Portada";
import { ALTERNATIVAS } from "@/content/idioma";

export const metadata: Metadata = { alternates: { canonical: "/", languages: ALTERNATIVAS } };

export default function Home() {
  return <Portada idioma="es" />;
}
