import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Fernando GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en San Fernando y zona norte del GBA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en San Fernando</h1>
          <div className="article-body">
            <p>San Fernando es un partido del norte del Gran Buenos Aires con una rica historia y una gran variedad de barrios residenciales. En Marino Mudanzas realizamos mudanzas en San Fernando y toda la zona norte del GBA con flota propia y personal capacitado.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en San Fernando</h2>
            <p>San Fernando tiene zonas con acceso complicado por las vías del tren y los pasos a nivel. Conocemos las mejores rutas de acceso para optimizar los tiempos de cada mudanza.</p>
            <h2 className="article-h2">Por qué elegirnos para tu mudanza en San Fernando</h2>
            <p>Con más de 80 años de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada zona del GBA y está capacitado para resolver cualquier situación logística. Flota propia, embalaje incluido y seguro de carga en todos nuestros servicios.</p>
            <h2 className="article-h2">Zonas cercanas donde también operamos</h2>
            <p>Si tu mudanza involucra zonas limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-tigre" className="text-gold hover:underline">Mudanzas en Tigre</a></li>
              <li><a href="/blog/mudanzas-san-isidro" className="text-gold hover:underline">Mudanzas en San Isidro</a></li>
              <li><a href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline">Mudanzas en Vicente López</a></li>
              <li><a href="/blog/mudanzas-malvinas-argentinas" className="text-gold hover:underline">Mudanzas en Malvinas Argentinas</a></li>
              <li><a href="/blog/mudanzas-pilar" className="text-gold hover:underline">Mudanzas en Pilar</a></li>
            </ul>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
