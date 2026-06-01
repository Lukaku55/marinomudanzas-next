import ScrollToHash from "@/components/ScrollToHash";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceDetailResidencial from "@/components/ServiceDetailResidencial";
import ServiceDetailComercial from "@/components/ServiceDetailComercial";
import ServiceDetailGuardamuebles from "@/components/ServiceDetailGuardamuebles";
import ServiceDetailInterior from "@/components/ServiceDetailInterior";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import ZonasCoberturaFull from "@/components/ZonasCoberturaFull";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación recomiendan coordinar el servicio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos coordinar tu mudanza con al menos 15 a 20 días de anticipación. Esto nos permite garantizar disponibilidad de personal y vehículos, especialmente durante los períodos de mayor demanda como fin de mes y cambio de temporada."
      }
    },
    {
      "@type": "Question",
      "name": "¿Realizan mudanzas por soga o altura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, somos especialistas en movimientos por soga para muebles de gran tamaño que no caben en el ascensor o escalera."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué zonas cubren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Realizamos mudanzas y fletes en toda la Ciudad Autónoma de Buenos Aires (CABA) y el Gran Buenos Aires (GBA), con base en el barrio de Flores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Brindan servicio de embalaje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El embalaje tradicional está incluido: protección de muebles con mantas y film stretch. También ofrecemos un servicio adicional donde un embalador asiste al domicilio 48hs antes para embalar cristalería, loza, vajilla y objetos delicados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué formas de pago aceptan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aceptamos efectivo, transferencia bancaria y tarjetas de crédito y débito. También trabajamos con Mercado Pago."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas al interior del país?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos traslados y mudanzas de larga distancia a diferentes puntos del interior del país. Solo realizamos mudanzas exclusivas, no cargas parciales ni servicios de expreso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuentan con servicio de guardamuebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos espacios seguros, limpios y monitoreados para el almacenaje de tus pertenencias por tiempo corto o prolongado."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollToHash />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ServiceDetailResidencial />
        <ServiceDetailComercial />
        <ServiceDetailGuardamuebles />
        <ServiceDetailInterior />
        <AboutSection />
        <InnovationSection />
        <ZonasCoberturaFull />
        <TestimonialsSection />
        <CTASection />
        <ContactForm />
        <FAQSection />
        <TrustedBySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
