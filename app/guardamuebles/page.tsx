import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Guardamuebles en Buenos Aires | Marino Mudanzas",
  description: "Guardamuebles seguro y monitoreado 24hs en Flores, CABA. Espacios individuales, retiro y entrega a domicilio. Más de 80 años de experiencia. Tel 4611-1818",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Guardamuebles en Buenos Aires",
  "description": "Servicio de guardamuebles seguro y monitoreado en Flores, CABA.",
  "url": "https://www.mudanzasmarino.com.ar/guardamuebles",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar",
    "telephone": "+541146111818",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Juan Bautista Alberdi 2968",
      "addressLocality": "Flores",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo acceder a mis cosas mientras están guardadas en el guardamuebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, podés acceder a tus pertenencias coordinando previamente con nosotros. Te pedimos que avises con al menos 24 horas de anticipación para organizar el acceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta el guardamuebles en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende del volumen a almacenar y el plazo. Contactanos para recibir un presupuesto personalizado sin cargo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Mis pertenencias están aseguradas en el guardamuebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el servicio de guardamuebles incluye cobertura de seguro. Consultanos los detalles de la cobertura al momento de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el plazo mínimo de almacenaje en el guardamuebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El plazo mínimo es de 15 días. A partir de ahí podés extender el servicio por el tiempo que necesites."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen el embalaje de los muebles antes de llevarlos al guardamuebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, podemos realizar el embalaje profesional de tus pertenencias antes de llevarlas al guardamuebles. Es un servicio adicional que recomendamos especialmente para objetos frágiles o muebles delicados."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al inicio</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Guardamuebles en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Nuestro servicio de guardamuebles en Buenos Aires ofrece almacenaje seguro, limpio y monitoreado las 24 horas en nuestras instalaciones en el barrio de Flores, CABA. Ideal para quien necesita guardar sus pertenencias durante una mudanza, una refacción, un viaje prolongado o cualquier situación que requiera espacio adicional.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de guardamuebles?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Espacios individuales:</strong> tus pertenencias se almacenan en un espacio propio, separado del resto de los clientes.</li>
              <li><strong>Monitoreo 24 horas:</strong> nuestras instalaciones cuentan con vigilancia y cámaras de seguridad las 24hs.</li>
              <li><strong>Ambiente limpio y seco:</strong> espacios protegidos de la humedad y el polvo para cuidar tus muebles a largo plazo.</li>
              <li><strong>Retiro a domicilio:</strong> buscamos tus pertenencias en tu domicilio y las trasladamos a nuestras instalaciones.</li>
              <li><strong>Entrega a domicilio:</strong> cuando lo necesités, te devolvemos todo en tu nuevo domicilio.</li>
              <li><strong>Flexibilidad de plazo:</strong> podés guardar tus cosas por días, semanas o meses según lo necesités.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuándo necesitás un guardamuebles?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Durante una mudanza:</strong> cuando hay un desfasaje de fechas entre entregar un lugar y tomar el nuevo.</li>
              <li><strong>Durante una refacción:</strong> para proteger tus muebles mientras remodelás tu casa u oficina.</li>
              <li><strong>Viaje prolongado:</strong> si te vas al exterior por trabajo o vacaciones y necesitás dejar tus pertenencias seguras.</li>
              <li><strong>Reducción de espacio:</strong> cuando te mudás a un lugar más chico y necesitás guardar lo que no entra.</li>
              <li><strong>Herencias o sucesiones:</strong> para almacenar el contenido de una vivienda mientras se resuelven los trámites legales.</li>
              <li><strong>Empresas y comercios:</strong> almacenaje de mobiliario, archivo o equipamiento en períodos de transición.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo funciona el servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Consultanos:</strong> nos contás qué necesitás guardar y por cuánto tiempo.</li>
              <li><strong>2. Presupuesto:</strong> te enviamos un presupuesto según el volumen y el plazo.</li>
              <li><strong>3. Retiro:</strong> vamos a tu domicilio, embalamos y retiramos tus pertenencias.</li>
              <li><strong>4. Almacenaje:</strong> guardamos todo en nuestras instalaciones seguras en Flores.</li>
              <li><strong>5. Entrega:</strong> cuando lo necesités, coordinamos la entrega en tu nuevo domicilio.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué se puede guardar?</h2>
            <p>Almacenamos muebles de todo tipo — camas, sillones, mesas, sillas, placards, bibliotecas — así como electrodomésticos, cajas con objetos personales, ropa, libros, cuadros y objetos de decoración. No almacenamos materiales peligrosos, inflamables ni alimentos perecederos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre guardamuebles</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Puedo acceder a mis cosas mientras están guardadas?</h3>
            <p>Sí, podés acceder a tus pertenencias coordinando previamente con nosotros. Te pedimos que avises con al menos 24 horas de anticipación para organizar el acceso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta el guardamuebles?</h3>
            <p>El precio depende del volumen a almacenar y el plazo. Contactanos para recibir un presupuesto personalizado sin cargo.</p>

            <h3 className="font-display text-xl font-semibond text-foreground mt-6 mb-2">¿Mis pertenencias están aseguradas?</h3>
            <p>Sí, el servicio de guardamuebles incluye cobertura de seguro. Consultanos los detalles de la cobertura al momento de contratar.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuál es el plazo mínimo de almacenaje?</h3>
            <p>El plazo mínimo es de 15 días. A partir de ahí podés extender el servicio por el tiempo que necesités.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen el embalaje antes de guardar?</h3>
            <p>Sí, podemos realizar el embalaje profesional de tus pertenencias antes de llevarlas al guardamuebles. Es un servicio adicional que recomendamos especialmente para objetos frágiles o muebles delicados.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Completá tu inventario online</h2>
            <p>¿Sabés qué muebles querés guardar? Completá el inventario online y nos llega el detalle para preparar todo con anticipación.</p>
            <div className="mt-4 mb-8">
              <a href="/guardamuebles/inventario" className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Completar inventario de muebles →
              </a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consultanos sin cargo</h2>
            <p>Contactanos hoy para recibir un presupuesto personalizado para tu guardamuebles. Respondemos de inmediato.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/guardamuebles-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Guardamuebles en Buenos Aires: todo lo que necesitás saber</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Qué incluye un servicio de mudanza?</Link>
              <Link href="/blog/mudanzas-larga-distancia-argentina" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de larga distancia en Argentina</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Cuánto cuesta una mudanza?</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
