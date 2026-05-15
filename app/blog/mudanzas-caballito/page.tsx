import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Caballito Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Caballito, Buenos Aires. El barrio mas centrico de CABA. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Caballito Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Caballito, Buenos Aires. El barrio mas centrico de CABA. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-caballito",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Caballito</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Caballito es el barrio más céntrico de Buenos Aires y uno de los más densamente poblados, con más de 180.000 habitantes. Su ubicación geográfica en el corazón de la ciudad lo convierte en uno de los barrios con mayor demanda de mudanzas de toda CABA. En Marino Mudanzas tenemos décadas de experiencia realizando mudanzas en Caballito, conociendo cada edificio y cada restricción de tráfico del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Caballito</h2>
            <p>Caballito tiene una alta densidad de edificios de departamentos construidos entre los años 60 y 90, muchos de los cuales tienen ascensores pequeños o escaleras angostas. La avenida Rivadavia, que atraviesa el barrio, tiene restricciones de carga y descarga en horarios pico. Las calles internas del barrio suelen ser más tranquilas pero con estacionamiento limitado para camiones grandes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Caballito que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Caballito Norte</strong> — zona de edificios modernos cerca de Rivadavia</li>
              <li><strong>Caballito Sur</strong> — casas y PH cerca del Parque Rivadavia</li>
              <li><strong>Primera Junta</strong> — zona comercial con mucha rotación de inquilinos</li>
              <li><strong>Acoyte</strong> — zona residencial tranquila con casas de familia</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Caballito</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden subir muebles grandes por escalera en Caballito?</h3>
            <p>Sí, nuestro equipo está capacitado para subir muebles por escalera o por soga en edificios sin ascensor o con ascensores pequeños, algo muy común en los edificios de Caballito.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan en fin de semana en Caballito?</h3>
            <p>Sí, trabajamos de lunes a sábado. Para mudanzas en fin de semana recomendamos coordinar con al menos 15 días de anticipación para asegurar disponibilidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Gestionan el permiso de carga en Rivadavia?</h3>
            <p>Sí, conocemos los horarios permitidos para carga y descarga en Av. Rivadavia y sus alrededores, y coordinamos la mudanza para evitar contratiempos con el tráfico.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes a Caballito, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-flores" className="text-gold hover:underline">Mudanzas en Flores</a></li>
              <li><a href="/blog/mudanzas-almagro" className="text-gold hover:underline">Mudanzas en Almagro</a></li>
              <li><a href="/blog/mudanzas-boedo" className="text-gold hover:underline">Mudanzas en Boedo</a></li>
              <li><a href="/blog/mudanzas-villa-crespo" className="text-gold hover:underline">Mudanzas en Villa Crespo</a></li>
              <li><a href="/blog/mudanzas-parque-chacabuco" className="text-gold hover:underline">Mudanzas en Parque Chacabuco</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
