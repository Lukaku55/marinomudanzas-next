import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Tigre GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Tigre, Nordelta y countries del partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Tigre GBA | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas en Tigre, Nordelta y countries del partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tigre",
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
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Tigre</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Tigre es un partido que ha crecido enormemente en los ultimos anos, con countries y barrios privados que se han convertido en destino de familias que buscan mayor tranquilidad. En Marino Mudanzas realizamos mudanzas a Tigre, Nordelta, General Pacheco y todas las localidades del partido.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Tigre que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nordelta</strong> — barrio privado de alta categoria</li>
              <li><strong>Tigre centro</strong> — zona comercial cerca del puerto</li>
              <li><strong>General Pacheco</strong> — zona residencial accesible</li>
              <li><strong>Don Torcuato</strong> — barrio en pleno crecimiento</li>
              <li><strong>Ricardo Rojas</strong> — zona de countries y barrios cerrados</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Tigre</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden ingresar a Nordelta con el camión de mudanzas?</h3>
            <p>Si, coordinamos el acceso con la administracion de Nordelta previamente. Conocemos los requisitos y horarios permitidos para el ingreso de camiónes de mudanza.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Tigre?</h3>
            <p>Si, es una de las rutas mas frecuentes. Muchas familias se mudan de CABA a Tigre y Nordelta buscando mayor espacio y calidad de vida.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
