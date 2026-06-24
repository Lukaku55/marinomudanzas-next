import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Ahorrar en tu Mudanza: 12 Consejos para Reducir el Costo | Marino Mudanzas",
  description: "12 consejos prácticos para reducir el presupuesto de tu mudanza en Buenos Aires. Cuándo mudarte, cómo embalar vos mismo, qué negociar con la empresa y más.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Ahorrar en tu Mudanza: 12 Consejos para Reducir el Costo",
  "description": "12 consejos prácticos para reducir el presupuesto de tu mudanza en Buenos Aires.",
  "author": { "@type": "Organization", "name": "Marino Mudanzas" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.marinomudanzas.com.ar/logo.png" }
  },
  "datePublished": "2026-06-24",
  "dateModified": "2026-06-24",
  "url": "https://www.marinomudanzas.com.ar/blog/como-ahorrar-en-tu-mudanza"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo es más barato mudarse en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las mudanzas son más económicas entre semana (lunes a jueves), en los primeros 15 días del mes y durante los meses de invierno (junio-agosto). Evitar los fines de mes y el verano puede representar un ahorro importante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Conviene embalar solo para reducir el costo de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el embalaje propio puede reducir significativamente el costo. Lo más conveniente es que vos mismo embalés ropa, libros y objetos no frágiles, y dejes el embalaje de muebles grandes, colchones y objetos delicados para los profesionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde consigo cajas gratis para la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podés conseguir cajas gratis en supermercados (pedí al encargado del depósito), librerías, farmacias y tiendas de electrónica. También hay grupos de Facebook y marketplace donde personas que acaban de mudarse regalan sus cajas. Asegurate de que estén en buen estado y sin humedad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Vale la pena pedir varios presupuestos de mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, pedir 2 o 3 presupuestos te da una referencia clara del precio de mercado y poder de negociación. Sin embargo, no elijas solo por precio: verificá la reputación de la empresa, que tenga seguro de carga y personal profesional."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">
            ← Volver al blog
          </Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Cómo Ahorrar en tu Mudanza: 12 Consejos para Reducir el Costo
          </h1>
          <p className="text-sm text-muted-foreground mb-8 font-body">24 de junio de 2026 · Marino Mudanzas</p>

          <div className="prose prose-lg mt-4 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>
              Una mudanza puede ser un gasto importante, pero hay muchas formas de reducir el presupuesto sin sacrificar calidad ni seguridad para tus muebles. En Marino Mudanzas llevamos más de 80 años haciendo mudanzas en Buenos Aires y sabemos exactamente dónde se puede ahorrar y dónde no conviene recortar. Estos son los 12 consejos más efectivos.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              1. Elegí bien la fecha: evitá el fin de mes
            </h2>
            <p>
              Los días 25 al 31 de cada mes son los más demandados del año — casi todos los contratos de alquiler vencen a fin de mes. Si podés mudarte entre el 1 y el 20, vas a encontrar mayor disponibilidad de fechas y en muchos casos mejores precios. También podés aprovechar la flexibilidad para elegir el horario más conveniente.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              2. Mudarte entre semana en vez de sábado
            </h2>
            <p>
              Los sábados concentran una gran parte de la demanda semanal. Mudarte de lunes a viernes te da más opciones de horario y, en algunos casos, mejores condiciones. Si trabajás y no podés tomar un día hábil, consultá si podés combinar un sábado a la mañana con parte de la semana para el embalaje previo.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              3. Aprovechá la temporada baja: invierno
            </h2>
            <p>
              Junio, julio y agosto son los meses de menor demanda de mudanzas en Buenos Aires. Las empresas tienen más disponibilidad, los tiempos de respuesta son mejores y en algunos casos los precios son más accesibles. Si tenés flexibilidad de fechas, el invierno puede ser tu mejor aliado.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              4. Reservá con anticipación
            </h2>
            <p>
              Las mudanzas de último momento son más caras y más estresantes. Reservar con 3 a 4 semanas de anticipación te da tiempo para comparar presupuestos, organizar el embalaje y elegir la fecha más conveniente. En temporada alta (enero, febrero y fin de mes) la anticipación es todavía más importante.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              5. Embalá vos mismo lo que podés
            </h2>
            <p>
              El embalaje propio es una de las formas más efectivas de reducir el costo. La regla es simple: embalá lo que podés solo y dejá lo técnico para los profesionales.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Podés embalar vos:</strong> ropa, libros, zapatos, juguetes, artículos de cocina no frágiles, ropa de cama</li>
              <li><strong>Dejalo para los profesionales:</strong> muebles grandes, colchones, TV, electrodomésticos, cristalería y objetos frágiles</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              6. Conseguí cajas gratis o baratas
            </h2>
            <p>
              No hace falta comprar cajas nuevas. Estas son las mejores fuentes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supermercados:</strong> andá al sector de depósito y pedí cajas de frutas, verduras o electrodomésticos. Son resistentes y gratis.</li>
              <li><strong>Librerías y farmacias:</strong> también suelen tener cajas de buen tamaño disponibles.</li>
              <li><strong>Grupos de Facebook y Marketplace:</strong> buscá "cajas mudanza [tu barrio]" — hay muchas personas que acaban de mudarse y las regalan.</li>
              <li><strong>Vecinos y conocidos:</strong> preguntá en el grupo de WhatsApp del edificio o entre amigos que se hayan mudado recientemente.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              7. Descartá antes de mudarte
            </h2>
            <p>
              Cada mueble, caja y electrodoméstico que no llevás es dinero que ahorrás. Antes de la mudanza, hacé una revisión honesta de todo lo que tenés:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ropa que no usás hace más de un año → donar o vender</li>
              <li>Muebles viejos o en mal estado → vender en Marketplace o donar</li>
              <li>Electrodomésticos que no funcionan → reciclar o tirar</li>
              <li>Libros y revistas acumulados → donar a bibliotecas o escuelas</li>
            </ul>
            <p>
              Menos volumen = camión más chico = menos costo. Y además llegás al nuevo hogar con solo lo que realmente necesitás.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              8. Pedí 2 o 3 presupuestos y comparalos bien
            </h2>
            <p>
              Tener más de un presupuesto te da contexto real del precio de mercado. Pero al comparar, fijate en más que el número:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>¿Incluye embalaje o es aparte?</li>
              <li>¿Tiene seguro de carga?</li>
              <li>¿Cuántos operarios incluye?</li>
              <li>¿La empresa tiene reseñas verificadas?</li>
            </ul>
            <p>
              El presupuesto más barato no siempre es el más conveniente — una empresa sin seguro puede salirte muy cara si algo se rompe.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              9. Usá tu propia ropa como material de embalaje
            </h2>
            <p>
              No hace falta comprar papel de burbujas para todo. La ropa, toallas, sábanas y almohadas son excelentes amortiguadores para objetos medianos. Envolvé platos, tazas y objetos de cerámica con remeras o toallas — llegan igual de seguros y ahorrás en materiales de embalaje.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              10. Organizá las cajas por peso y tamaño
            </h2>
            <p>
              Una mudanza bien organizada es más rápida, y menos horas de trabajo significa menor costo si el servicio se cobra por hora. Algunos tips:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cajas chicas para objetos pesados (libros, herramientas)</li>
              <li>Cajas grandes para objetos livianos (ropa, almohadas)</li>
              <li>Rotulá cada caja con el contenido y el ambiente de destino</li>
              <li>Tené todo embalado antes de que lleguen los operarios — el tiempo de embalaje en el momento se cobra</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              11. Evaluá si necesitás guardamuebles
            </h2>
            <p>
              Si hay un desfasaje entre la fecha en que tenés que salir de tu vivienda y cuando podés entrar a la nueva, el guardamuebles puede ser una solución económica para no pagar dos alquileres ni apurarte. Es más barato que creés y te da flexibilidad para mudarte sin presión.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              12. No escatimes en lo que sí importa
            </h2>
            <p>
              Hay cosas en las que no conviene ahorrar: el seguro de carga, el embalaje de muebles de valor y la contratación de una empresa con trayectoria. Una mudanza mal hecha puede costar mucho más cara en reparaciones, reposición de muebles rotos o daños en el piso del nuevo departamento.
            </p>
            <p>
              La clave es ahorrar en lo logístico (fecha, embalaje propio, cajas recicladas) y no en la calidad del servicio en sí.
            </p>

            <div className="bg-muted rounded-xl p-6 mt-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                ¿Querés un presupuesto justo sin sorpresas?
              </h3>
              <p className="mb-4">
                En Marino Mudanzas te damos un presupuesto detallado sin cargo. Trabajamos de lunes a sábado de 8 a 18hs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5491154507435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Pedí presupuesto por WhatsApp
                </a>
                <a
                  href="tel:+541146111818"
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Llamanos: 4611-1818
                </a>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Artículos relacionados
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline font-medium">
                    ¿Cuánto cuesta una mudanza en Buenos Aires?
                  </Link>
                  {" "}— rangos de precios orientativos según el tamaño de tu vivienda.
                </li>
                <li>
                  <Link href="/blog/mudanzas-en-invierno" className="text-gold hover:underline font-medium">
                    Mudanzas en invierno en Buenos Aires
                  </Link>
                  {" "}— ventajas de la temporada baja para ahorrar en tu mudanza.
                </li>
                <li>
                  <Link href="/blog/mudanzas-fin-de-mes" className="text-gold hover:underline font-medium">
                    Mudanzas a fin de mes en Buenos Aires
                  </Link>
                  {" "}— por qué es la fecha más cara y cómo evitarla.
                </li>
                <li>
                  <Link href="/blog/checklist-mudanza" className="text-gold hover:underline font-medium">
                    Checklist completo para tu mudanza
                  </Link>
                  {" "}— todo lo que tenés que hacer antes, durante y después.
                </li>
                <li>
                  <Link href="/blog/como-armar-cajas-mudanza" className="text-gold hover:underline font-medium">
                    Cómo armar cajas para mudanza
                  </Link>
                  {" "}— guía para embalar vos mismo sin que nada se rompa.
                </li>
              </ul>
            </div>

          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
