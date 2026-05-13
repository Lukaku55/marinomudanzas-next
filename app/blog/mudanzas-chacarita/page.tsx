import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Chacarita Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Chacarita con más de 80 años de experiencia. Conocemos cada edificio del barrio. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Chacarita</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Chacarita es uno de los barrios más vibrantes del norte de Buenos Aires. Con una mezcla de edificios de mediana altura, casas bajas, PHs y una creciente oferta gastronómica y cultural, es un barrio donde la demanda de mudanzas crece año a año. En Marino Mudanzas realizamos mudanzas en Chacarita con más de 80 años de experiencia en CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Chacarita</h2>
            <p>Chacarita tiene una variedad de propiedades que requieren diferentes soluciones logísticas. Las calles del barrio son relativamente amplias cerca de las avenidas principales como Corrientes, Forest y Dorrego, pero se angosta considerablemente en las calles internas. Muchos edificios del barrio son de construcción antigua y carecen de ascensor.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gran cantidad de edificios sin ascensor de los años 50 y 60</li>
              <li>PHs y casas bajas con accesos alternativos</li>
              <li>Calles angostas en el interior del barrio que requieren camiones de menor porte</li>
              <li>Edificios nuevos en la zona de Dorrego con mejor acceso</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro servicio de mudanzas en Chacarita</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera en edificios sin ascensor.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de los permisos y horarios del edificio.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota de distintos tamaños:</strong> camiones chicos para calles angostas y grandes para mudanzas de mayor volumen.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Chacarita donde operamos</h2>
            <p>Cubrimos todo el barrio de Chacarita — desde las zonas lindantes con Palermo y Villa Crespo hasta los límites con Colegiales y Paternal. Las calles más frecuentes donde trabajamos incluyen Av. Corrientes, Av. Forest, Av. Dorrego, Jorge Newbery, Fraga, Céspedes, Charlone y todo el interior del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta una mudanza en Chacarita?</h2>
            <p>El precio depende del volumen, el piso, si hay ascensor y la distancia al destino. Como referencia orientativa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monoambiente o estudio: desde $150.000</li>
              <li>Departamento de 2 ambientes: desde $250.000</li>
              <li>Departamento de 3 ambientes: desde $400.000</li>
              <li>Casa o PH: presupuesto personalizado según volumen</li>
            </ul>
            <p>Todos los precios incluyen embalaje de muebles, carga, traslado y descarga. Pedí tu presupuesto sin cargo para obtener un precio exacto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Chacarita</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen camiones pequeños para calles angostas?</h3>
            <p>Sí, contamos con flota de distintos tamaños. Para calles angostas del interior de Chacarita usamos camiones de menor porte que facilitan la carga y descarga sin interrumpir el tráfico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en edificios sin ascensor?</h3>
            <p>Sí, tenemos amplia experiencia en edificios sin ascensor. Para muebles que no pasan por la escalera utilizamos técnicas de elevación por soga desde el exterior.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿También hacen mudanzas desde Chacarita hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactanos para tu mudanza en Chacarita</h2>
            <p>Pedí tu presupuesto sin cargo hoy. Respondemos de inmediato por WhatsApp o teléfono.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
