import type { Metadata } from "next";
import Portada from "@/components/Portada";
import IdiomaDocumento from "@/components/IdiomaDocumento";
import { ALTERNATIVAS } from "@/content/idioma";

const descripcion =
  "Marino Mudanzas: home moves, office relocations and furniture storage in Buenos Aires City and Greater Buenos Aires, based in Flores. Get a free quote.";

export const metadata: Metadata = {
  title: "Moving Company in Buenos Aires | Marino Mudanzas",
  description: descripcion,
  alternates: { canonical: "/en", languages: ALTERNATIVAS },
  openGraph: {
    title: "Marino Mudanzas | Moving in Buenos Aires",
    description: descripcion,
    locale: "en_US",
    alternateLocale: ["es_AR"],
    type: "website",
    images: [{ url: "/fotos/camion-contrapicado.jpg", alt: "Marino Mudanzas truck" }],
  },
};

export default function HomeEn() {
  return (
    <>
      <IdiomaDocumento lang="en" />
      <Portada idioma="en" />
    </>
  );
}
