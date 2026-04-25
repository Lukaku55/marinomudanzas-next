import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Oficinas en Buenos Aires | Marino Mudanzas",
  description: "Servicio especializado de mudanzas de oficinas en Buenos Aires. Minimizamos el tiempo de inactividad de tu empresa. Mas de 80 anos de experiencia. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas de Oficinas en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Las mudanzas de oficinas son un proceso complejo que requiere planificación detallada y experiencia para minimizar el impacto en la operación de tu empresa. En Marino Mudanzas llevamos más de 80 años realizando mudanzas corporativas en Buenos Aires, entendiendo que cada hora de inactividad tiene un costo para tu negocio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué hace diferente a una mudanza de oficina?</h2>
            <p>A diferencia de una mudanza residencial, una mudanza de oficina involucra equipamiento tecnológico delicado, mobiliario corporativo específico, archivos y documentación importante, y la necesidad de coordinación con múltiples personas y departamentos. Además, muchas empresas necesitan mantener parte de la operación activa durante el traslado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro proceso para mudanzas de oficinas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Visita previa</strong> — evaluamos el volumen y características del mobiliario</li>
              <li><strong>Plan de mudanza</strong> — organizamos el traslado por sectores o departamentos</li>
              <li><strong>Etiquetado sistemático</strong> — cada mueble y caja tiene su destino identificado</li>
              <li><strong>Desarmado y armado</strong> — de escritorios, estanterías y sistemas de archivos</li>
              <li><strong>Traslado de equipos tecnológicos</strong> — con el cuidado especial que requieren</li>
              <li><strong>Mudanzas fuera de horario</strong> — fines de semana o fuera del horario laboral si es necesario</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de mudanzas corporativas que realizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mudanzas de oficinas pequeñas y estudios profesionales</li>
              <li>Traslado de empresas medianas y grandes</li>
              <li>Mudanzas de locales comerciales</li>
              <li>Traslado de consultorios médicos y clínicas</li>
              <li>Mudanzas de estudios jurídicos y contables</li>
              <li>Traslado de depósitos y almacenes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de oficinas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden hacer la mudanza un fin de semana para no interrumpir la operación?</h3>
            <p>Sí, ofrecemos mudanzas en fines de semana y fuera del horario laboral para minimizar el impacto en tu empresa. Coordinamos el horario según tus necesidades.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trasladan equipos de computación y servidores?</h3>
            <p>Sí, pero recomendamos que el equipo de IT de tu empresa se encargue de desconectar y reconectar los equipos. Nosotros nos encargamos del traslado físico con el embalaje adecuado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en mudanzas de edificios corporativos con normas estrictas?</h3>
            <p>Sí, conocemos los requisitos de los principales edificios corporativos de Buenos Aires y coordinamos previamente con la administración para cumplir con todas las normas.</p>

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
