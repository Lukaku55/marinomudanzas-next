import BarraMovil from "@/components/BarraMovil";
import ComoFunciona from "@/components/ComoFunciona";
import Consejos from "@/components/Consejos";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Llamado from "@/components/Llamado";
import Nosotros from "@/components/Nosotros";
import Opiniones from "@/components/Opiniones";
import PorQue from "@/components/PorQue";
import Preguntas from "@/components/Preguntas";
import Presupuesto from "@/components/Presupuesto";
import Servicios from "@/components/Servicios";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Zonas from "@/components/Zonas";
import { EMPRESA } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

/** La portada completa, en el idioma que se le pida. La usan "/" y "/en". */
export default function Portada({ idioma }: { idioma: Idioma }) {
  const t = textos(idioma);

  /* Solo datos verificables: nombre, dirección, teléfono y horario. Sin reseñas inventadas. */
  const negocio = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: EMPRESA.nombre,
    url: idioma === "en" ? `${EMPRESA.url}/en` : EMPRESA.url,
    inLanguage: idioma === "en" ? "en" : "es-AR",
    description: t.hero.bajada,
    telephone: "+541146111818",
    image: `${EMPRESA.url}/fotos/camion-contrapicado.jpg`,
    sameAs: [EMPRESA.instagram.url],
    address: { "@type": "PostalAddress", streetAddress: "Av. Juan Bautista Alberdi 2968", addressLocality: "Flores", addressRegion: "Ciudad Autónoma de Buenos Aires", postalCode: "C1406", addressCountry: "AR" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "15:00" }],
    areaServed: ["Ciudad Autónoma de Buenos Aires", "Gran Buenos Aires"],
  };
  const preguntas = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: idioma === "en" ? "en" : "es-AR",
    mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.pregunta, acceptedAnswer: { "@type": "Answer", text: f.respuesta } })),
  };

  return (
    <>
      <Header />
      <main id="contenido">
        <Hero idioma={idioma} />
        <Nosotros idioma={idioma} />
        <Servicios idioma={idioma} />
        <PorQue idioma={idioma} />
        <ComoFunciona idioma={idioma} />
        <Galeria idioma={idioma} />
        <Llamado idioma={idioma} />
        <Consejos idioma={idioma} />
        <Opiniones idioma={idioma} />
        <Zonas idioma={idioma} />
        <Presupuesto idioma={idioma} />
        <Preguntas idioma={idioma} />
      </main>
      <Footer idioma={idioma} />
      <WhatsAppFloat />
      <BarraMovil idioma={idioma} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(negocio) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preguntas) }} />
    </>
  );
}
