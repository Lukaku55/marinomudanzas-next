import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guardamuebles en Buenos Aires: Todo lo que Necesitas Saber | Marino Mudanzas",
  description: "Todo sobre guardamuebles en Buenos Aires. Como funciona, que incluye, cuanto cuesta y como elegir el mejor servicio. Marino Mudanzas tiene guardamuebles en Flores, CABA.",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guardamuebles en Buenos Aires: Todo lo que Necesitas Saber | Marino Mudanzas",
  "description": "Todo sobre guardamuebles en Buenos Aires. Como funciona, que incluye, cuanto cuesta y como elegir el mejor servicio. Marino Mudanzas tiene guardamuebles en Flores, CABA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/guardamuebles-buenos-aires",
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Guardamuebles en Buenos Aires: Todo lo que Necesitas Saber</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>El servicio de guardamuebles es una solución muy util cuando necesitas almacenar tus muebles y pertenencias de forma segura por un tiempo determinado. Ya sea por una refaccion, un viaje largo, una separacion o simplemente porque te sobra espacio, en Marino Mudanzas ofrecemos guardamuebles en Flores, CABA, con más de 80 años de experiencia.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cuando necesitas un guardamuebles?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refaccion o remodelacion del hogar o la oficina</li>
              <li>Mudanza con fecha de entrega del nuevo hogar posterior</li>
              <li>Viaje largo al exterior o al interior del pais</li>
              <li>Separacion o divorcio con necesidad de almacenar temporalmente</li>
              <li>Herencia de muebles sin espacio disponible</li>
              <li>Reduccion del tamano del hogar o la oficina</li>
              <li>Negocio en transicion entre locales</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Como funciona nuestro servicio de guardamuebles</h2>
            <p>En Marino Mudanzas ofrecemos espacios de guardamuebles individuales, limpios y monitoreados las 24 horas en nuestras instalaciones en Flores, CABA. El proceso es simple: coordinamos el retiro de tus muebles con nuestro equipo, los trasladamos a nuestro deposito y los almacenamos de forma segura hasta que los necesites. Cuando quieras recuperar tus pertenencias, coordinamos la entrega en el lugar que indiques.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Que incluye nuestro guardamuebles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Espacio individual asignado exclusivamente a tus pertenencias</li>
              <li>Seguridad y monitoreo las 24 horas</li>
              <li>Instalaciones limpias y libres de humedad</li>
              <li>Acceso coordinado a tus pertenencias cuando lo necesites</li>
              <li>Seguro de contenido incluido</li>
              <li>Flexibilidad de plazos: desde una semana hasta el tiempo que necesites</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre guardamuebles</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Cuanto tiempo puedo tener mis muebles en el guardamuebles?</h3>
            <p>No hay un plazo maximo. Ofrecemos almacenaje por tiempo corto (desde una semana) o prolongado (meses o incluso anos). El precio se ajusta segun el tiempo contratado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Puedo acceder a mis cosas mientras estan en el guardamuebles?</h3>
            <p>Si, coordinando previamente con nuestro equipo podes acceder a tus pertenencias en horario de atención. No es un acceso libre e irrestricto, pero si coordinado y seguro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Que no puedo guardar en el guardamuebles?</h3>
            <p>No admitimos materiales inflamables, explosivos, alimentos perecederos, animales o plantas. Tampoco objetos ilegales o que requieran condiciones especiales de temperatura.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen el retiro y la entrega de los muebles?</h3>
            <p>Si, con nuestro servicio completo nos encargamos del retiro de tus muebles en tu domicilio y de la entrega cuando los necesites, usando nuestros camiónes y personal especializado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto de guardamuebles sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Conocé nuestros servicios</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas Residenciales</Link>
              <Link href="/mudanzas-oficinas" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de Oficinas</Link>
              <Link href="/guardamuebles" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Ver servicio de Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas al Interior</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
