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
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/" className="article-back">← Volver al inicio</Link>
          <h1 className="article-title">Guardamuebles en Buenos Aires</h1>
          <div className="article-body">
            <p>Nuestro servicio de guardamuebles en Buenos Aires ofrece almacenaje seguro, limpio y monitoreado las 24 horas en nuestras instalaciones en el barrio de Flores, CABA. Ideal para quien necesita guardar sus pertenencias durante una mudanza, una refacción, un viaje prolongado o cualquier situación que requiera espacio adicional.</p>

            <h2 className="article-h2">¿Qué incluye nuestro servicio de guardamuebles?</h2>
            <ul className="article-list">
              <li><strong>Espacios individuales:</strong> tus pertenencias se almacenan en un espacio propio, separado del resto de los clientes.</li>
              <li><strong>Monitoreo 24 horas:</strong> nuestras instalaciones cuentan con vigilancia y cámaras de seguridad las 24hs.</li>
              <li><strong>Ambiente limpio y seco:</strong> espacios protegidos de la humedad y el polvo para cuidar tus muebles a largo plazo.</li>
              <li><strong>Retiro a domicilio:</strong> buscamos tus pertenencias en tu domicilio y las trasladamos a nuestras instalaciones.</li>
              <li><strong>Entrega a domicilio:</strong> cuando lo necesités, te devolvemos todo en tu nuevo domicilio.</li>
              <li><strong>Flexibilidad de plazo:</strong> podés guardar tus cosas por días, semanas o meses según lo necesités.</li>
            </ul>

            <h2 className="article-h2">¿Cuándo necesitás un guardamuebles?</h2>
            <ul className="article-list">
              <li><strong>Durante una mudanza:</strong> cuando hay un desfasaje de fechas entre entregar un lugar y tomar el nuevo.</li>
              <li><strong>Durante una refacción:</strong> para proteger tus muebles mientras remodelás tu casa u oficina.</li>
              <li><strong>Viaje prolongado:</strong> si te vas al exterior por trabajo o vacaciones y necesitás dejar tus pertenencias seguras.</li>
              <li><strong>Reducción de espacio:</strong> cuando te mudás a un lugar más chico y necesitás guardar lo que no entra.</li>
              <li><strong>Herencias o sucesiones:</strong> para almacenar el contenido de una vivienda mientras se resuelven los trámites legales.</li>
              <li><strong>Empresas y comercios:</strong> almacenaje de mobiliario, archivo o equipamiento en períodos de transición.</li>
            </ul>

            <h2 className="article-h2">¿Cómo funciona el servicio?</h2>
            <ul className="article-list">
              <li><strong>1. Consultanos:</strong> nos contás qué necesitás guardar y por cuánto tiempo.</li>
              <li><strong>2. Presupuesto:</strong> te enviamos un presupuesto según el volumen y el plazo.</li>
              <li><strong>3. Retiro:</strong> vamos a tu domicilio, embalamos y retiramos tus pertenencias.</li>
              <li><strong>4. Almacenaje:</strong> guardamos todo en nuestras instalaciones seguras en Flores.</li>
              <li><strong>5. Entrega:</strong> cuando lo necesités, coordinamos la entrega en tu nuevo domicilio.</li>
            </ul>

            <h2 className="article-h2">¿Qué se puede guardar?</h2>
            <p>Almacenamos muebles de todo tipo — camas, sillones, mesas, sillas, placards, bibliotecas — así como electrodomésticos, cajas con objetos personales, ropa, libros, cuadros y objetos de decoración. No almacenamos materiales peligrosos, inflamables ni alimentos perecederos.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre guardamuebles</h2>

            <h3 className="article-h3">¿Puedo acceder a mis cosas mientras están guardadas?</h3>
            <p>Sí, podés acceder a tus pertenencias coordinando previamente con nosotros. Te pedimos que avises con al menos 24 horas de anticipación para organizar el acceso.</p>

            <h3 className="article-h3">¿Cuánto cuesta el guardamuebles?</h3>
            <p>El precio depende del volumen a almacenar y el plazo. Contactanos para recibir un presupuesto personalizado sin cargo.</p>

            <h3 className="article-h3">¿Mis pertenencias están aseguradas?</h3>
            <p>Sí, el servicio de guardamuebles incluye cobertura de seguro. Consultanos los detalles de la cobertura al momento de contratar.</p>

            <h3 className="article-h3">¿Hacen el embalaje antes de guardar?</h3>
            <p>Sí, podemos realizar el embalaje profesional de tus pertenencias antes de llevarlas al guardamuebles. Es un servicio adicional que recomendamos especialmente para objetos frágiles o muebles delicados.</p>

            <h2 className="article-h2">Completá tu inventario online</h2>
            <p>¿Sabés qué muebles querés guardar? Completá el inventario online y nos llega el detalle para preparar todo con anticipación.</p>
            <div className="mt-4 mb-8">
              <a href="/guardamuebles/inventario" className="btn-gold btn-shimmer !text-navy">
                Completar inventario de muebles →
              </a>
            </div>

            <h2 className="article-h2">Consultanos sin cargo</h2>
            <p>Contactanos hoy para recibir un presupuesto personalizado para tu guardamuebles. Respondemos de inmediato.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="btn-navy">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="article-related">
            <h3 className="article-related-title">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/guardamuebles-buenos-aires" className="article-related-link">Guardamuebles en Buenos Aires: todo lo que necesitás saber</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="article-related-link">¿Qué incluye un servicio de mudanza?</Link>
              <Link href="/blog/mudanzas-larga-distancia-argentina" className="article-related-link">Mudanzas de larga distancia en Argentina</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="article-related-link">¿Cuánto cuesta una mudanza?</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
