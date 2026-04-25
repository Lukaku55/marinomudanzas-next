import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo organizar una mudanza paso a paso: guía completa | Marino Mudanzas",
  description: "Guía completa para organizar tu mudanza: checklist de 4 semanas, consejos de embalaje profesional y qué llevar el primer día. Por Marino Mudanzas, 80 años de experiencia.",
};

import { MessageCircle, Phone } from "lucide-react";

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Cómo organizar una mudanza paso a paso: guía completa
          </h1>
          <time className="font-body text-muted-foreground text-sm">25 de febrero de 2025</time>

          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>
              Organizar una mudanza puede parecer abrumador, pero con una buena planificación podés convertirlo en un proceso ordenado y hasta disfrutable. En <strong className="text-foreground">Marino Mudanzas</strong>, con más de 80 años de experiencia, hemos ayudado a miles de familias a mudarse de forma organizada. En esta guía te compartimos nuestro checklist probado para que no se te escape ningún detalle.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">4 semanas antes de la mudanza</h2>

            <p>
              El mes previo a la mudanza es el momento ideal para tomar las decisiones más importantes. Lo primero es contratar la empresa de mudanzas: solicitá presupuestos, compará servicios y asegurate de que incluyan seguro de carga. En Marino Mudanzas ofrecemos presupuestos sin cargo con visita previa o evaluación telefónica.
            </p>

            <p>
              También es el momento de hacer un inventario de todo lo que tenés en tu hogar. Recorré cada habitación y decidí qué llevar, qué donar, qué vender y qué descartar. Cuanto menos cosas mudes, menor será el costo y más rápido será el proceso. Organizá una venta de garage o publicá en marketplace los objetos que ya no uses.
            </p>

            <p>
              Si alquilás, avisá al propietario con la antelación que exija el contrato. Si sos propietario, empezá los trámites de cambio de domicilio en los servicios (luz, gas, internet, obras sociales, tarjetas de crédito, banco). Algunos trámites pueden demorar semanas, así que conviene iniciarlos temprano.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">1 semana antes: embalaje y preparación</h2>

            <p>
              Una semana antes empezá a embalar las cosas que no uses diariamente: libros, decoración, ropa fuera de temporada, vajilla de uso especial. Usá cajas de cartón resistentes y rotulálas por habitación y contenido. Los objetos frágiles deben ir envueltos individualmente en papel burbuja o papel de diario.
            </p>

            <p>
              Separá los documentos importantes (DNI, escrituras, contratos, facturas) en una carpeta que lleves personalmente, no en el camión. Hacé lo mismo con objetos de valor como joyas, dinero en efectivo y dispositivos electrónicos personales.
            </p>

            <p>
              Si contrataste embalaje profesional con Marino Mudanzas, nuestro equipo llega 24 a 48 horas antes del día de mudanza para embalar todo con materiales de primera calidad: mantas acolchadas para muebles, film stretch para electrodomésticos, cajas con relleno para objetos frágiles y precintos de seguridad.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">La semana de la mudanza</h2>

            <p>
              Confirmá el horario con la empresa de mudanzas y con el encargado del edificio (tanto en origen como en destino). Verificá que el ascensor esté disponible y que haya espacio para estacionar el camión. Si hay restricciones horarias, comunicáselas al equipo de mudanza con anticipación.
            </p>

            <p>
              Prepará una "caja de supervivencia" con lo esencial para el primer día en tu nuevo hogar: artículos de higiene personal, toallas, sábanas, cargadores de celular, algunos platos y cubiertos, café o mate, y medicamentos si los necesitás. Esta caja debe ser la última en cargarse y la primera en descargarse.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El día de la mudanza</h2>

            <p>
              Llegó el gran día. Lo ideal es arrancar temprano para aprovechar al máximo la jornada. Antes de que llegue el equipo de mudanza, hacé una última recorrida por cada habitación revisando armarios, bajo mesada, terraza y todos los espacios de guardado. Asegurate de que todas las cajas estén bien cerradas y rotuladas. Cuando lleguen los operarios, indicales cuáles son las cajas frágiles y en qué orden conviene cargarlas.
            </p>

            <p>
              Antes de cerrar la puerta de tu vieja casa, revisá llaves de gas, canillas, luces y que no quede nada olvidado. Tomate fotos del estado del inmueble si alquilás, para tener registro al momento de devolver las llaves.
            </p>

            <p>
              Al llegar al nuevo hogar, indicá al equipo dónde va cada mueble y cada grupo de cajas. Es mucho más fácil ubicar todo correctamente durante la descarga que mover muebles pesados después. Revisá que todo haya llegado bien antes de firmar la conformidad.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Después de la mudanza</h2>

            <p>
              Los primeros días en tu nuevo hogar, desembalá primero lo esencial: cocina, baño y dormitorio. El resto puede esperar. Actualizá tu dirección en todos los servicios pendientes y conocé a tus nuevos vecinos. ¡Ya estás en casa!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-border">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20sin%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamanos: 4611-1818
            </a>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
