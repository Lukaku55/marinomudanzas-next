import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checklist de Mudanza Completo 2026 | Marino Mudanzas",
  description: "Checklist completo para organizar tu mudanza paso a paso. Que hacer 4 semanas antes, 1 semana antes y el dia de la mudanza. Guia de Marino Mudanzas.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Checklist de Mudanza Completo 2026", "item": "https://www.mudanzasmarino.com.ar/blog/checklist-mudanza" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Checklist de Mudanza Completo 2026",
  "description": "Checklist completo para organizar tu mudanza paso a paso. Que hacer 4 semanas antes, 1 semana antes y el dia de la mudanza.",
  "url": "https://www.mudanzasmarino.com.ar/blog/checklist-mudanza",
  "datePublished": "2024-01-15",
  "dateModified": "2026-06-25",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mudanzasmarino.com.ar/blog/checklist-mudanza"
  },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que empezar a organizar una mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal es comenzar con al menos 4 semanas de anticipación. Con ese margen podés contratar la empresa de mudanzas, conseguir materiales de embalaje, avisar al consorcio y organizar el cambio de domicilio en bancos y organismos oficiales sin apuro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la caja de primer día y qué debe incluir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La caja de primer día es un bolso o caja separado con todo lo que vas a necesitar antes de desembalar: ropa para ese día, documentos personales, medicamentos, cargadores de celular, artículos de higiene, las llaves del nuevo hogar y algo para comer o beber."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo hay que avisar al consorcio del edificio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Avisá al consorcio de ambos edificios con al menos 2 semanas de anticipación. En muchos edificios hay que reservar el ascensor de carga y presentar documentación de la empresa de mudanzas con anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué debo hacer el día antes de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El día antes debés terminar de embalar todo, preparar la caja de primer día, confirmar el horario con la empresa de mudanzas y asegurarte de que el acceso al ascensor esté reservado en ambos edificios. También conviene descongelar y limpiar la heladera con al menos 24 horas de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hacer justo antes de entregar las llaves del departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antes de entregar las llaves hacé una recorrida completa para verificar que no quedó nada en placards, balcón, cajones, baulera y cochera. Documentá el estado del departamento con fotos y confirmá que todos los servicios estén dados de baja o transferidos."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Checklist de Mudanza Completo 2026</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Para organizar una mudanza sin estrés, empezá con al menos 4 semanas de anticipación: contratá la empresa de mudanzas, avisá al consorcio, consiguí materiales de embalaje y hacé un inventario de muebles. Este checklist completo te guía semana a semana para que no olvides nada antes, durante y después de tu mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">4 semanas antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contratar la empresa de mudanzas y coordinar la fecha</li>
              <li>Avisar al consorcio del edificio de origen y destino</li>
              <li>Solicitar el permiso de carga y descarga si es necesario</li>
              <li>Conseguir cajas y materiales de embalaje, o coordinar la provisión con la empresa de mudanzas</li>
              <li>Empezar a clasificar objetos: lo que te llevas, lo que donas y lo que tiras</li>
              <li>Hacer inventario de los muebles y electrodomesticos</li>
              <li>Avisar el cambio de domicilio al trabajo, banco y organismos oficiales</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">2 semanas antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Empezar a embalar libros, adornos y objetos que no uses</li>
              <li>Etiquetar cada caja con su contenido y el cuarto de destino</li>
              <li>Separar los objetos fragiles para embalarlos con cuidado especial</li>
              <li>Descongelar la heladera y limpiarla</li>
              <li>Dar de baja o transferir los servicios: luz, gas, agua, internet</li>
              <li>Organizar el traslado de mascotas y plantas</li>
              <li>Hacer una lista de los muebles que necesitan desarmarse</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">1 semana antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Terminar de embalar todo excepto lo de uso diario</li>
              <li>Confirmar horario y detalles con la empresa de mudanzas</li>
              <li>Preparar una caja de "primer dia" con lo esencial: ropa, documentos, medicamentos, cargadores</li>
              <li>Limpiar y ordenar el nuevo hogar si es posible</li>
              <li>Confirmar el acceso al ascensor en ambos edificios</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El dia de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estar presente desde el inicio para supervisar</li>
              <li>Tener a mano el inventario de muebles y cajas</li>
              <li>Proteger los pisos y marcos de puertas en ambas propiedades</li>
              <li>Hacer una ultima revision del departamento antes de entregar las llaves</li>
              <li>Verificar que todos los objetos llegaron al nuevo hogar</li>
              <li>Revisar que ningun mueble haya sufrido danos durante el traslado</li>
              <li>Firmar la conformidad del servicio con la empresa de mudanzas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Despues de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cambiar las cerraduras del nuevo hogar</li>
              <li>Dar de alta los servicios en el nuevo domicilio</li>
              <li>Actualizar el domicilio en el DNI y todos los documentos</li>
              <li>Presentarte al encargado del nuevo edificio</li>
              <li>Conocer las normas del nuevo consorcio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre la organización de mudanzas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que empezar?</h3>
            <p>Lo ideal es comenzar con al menos 4 semanas de anticipación. Con ese margen podés contratar la empresa de mudanzas, conseguir materiales de embalaje, avisar al consorcio y organizar el cambio de domicilio sin apuro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué es la caja de primer día?</h3>
            <p>La caja de primer día es un bolso o caja separado con todo lo que vas a necesitar antes de desembalar: ropa para ese día, documentos personales, medicamentos, cargadores de celular, artículos de higiene y las llaves del nuevo hogar.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuándo hay que avisar al consorcio?</h3>
            <p>Avisá al consorcio de ambos edificios con al menos 2 semanas de anticipación. En muchos edificios hay que reservar el ascensor de carga y presentar documentación de la empresa de mudanzas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué hacer antes de entregar las llaves?</h3>
            <p>Hacé una recorrida completa: verificá placards, balcón, cajones, baulera y cochera. Documentá el estado del departamento con fotos y confirmá que todos los servicios estén dados de baja o transferidos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Guías relacionadas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/que-preguntar-antes-de-contratar-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">10 preguntas antes de contratar una mudanza</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Qué incluye un servicio de mudanza?</Link>
              <Link href="/blog/empresa-mudanzas-confiable-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Cómo elegir una empresa de mudanzas confiable</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
