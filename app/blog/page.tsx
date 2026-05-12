import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consejos de Mudanza | Blog de Marino Mudanzas",
  description: "Guias practicas y consejos de nuestros expertos con mas de 80 anos de experiencia en mudanzas.",
};

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "cuanto-cuesta-mudanza-buenos-aires",
    title: "¿Cuánto cuesta una mudanza en Buenos Aires en 2026?",
    excerpt: "Descubrí los factores que afectan el precio de una mudanza y rangos de precios orientativos según el tamaño de tu vivienda.",
    date: "2026-04-22",
  },
  {
    slug: "checklist-mudanza",
    title: "Checklist de Mudanza Completo 2026",
    excerpt: "Todo lo que tenes que hacer 4 semanas antes, 1 semana antes y el dia de tu mudanza. Guia completa.",
    date: "2026-04-22",
  },
  {
    slug: "como-embalar-muebles-mudanza",
    title: "Cómo Embalar Muebles para una Mudanza",
    excerpt: "Guía completa con técnicas profesionales para embalar muebles, objetos frágiles y electrodomésticos antes de mudarte.",
    date: "2026-04-23",
  },
  {
    slug: "que-incluye-una-mudanza",
    title: "¿Qué Incluye un Servicio de Mudanza Profesional?",
    excerpt: "Todo lo que está incluido en un servicio de mudanza: embalaje, desarmado, carga, transporte, descarga y coordinación con el consorcio.",
    date: "2026-04-23",
  },
  {
    slug: "mudanzas-por-soga",
    title: "Mudanzas por Soga en Buenos Aires",
    excerpt: "Especialistas en elevar y descender muebles por el exterior cuando no entran por ascensor o escalera.",
    date: "2026-04-22",
  },
  {
    slug: "mudanzas-departamentos-buenos-aires",
    title: "Mudanzas de Departamentos en Buenos Aires",
    excerpt: "Todo lo que necesitas saber para hacer una mudanza de departamento en Buenos Aires. Consorcios, ascensores y soluciones para cada caso.",
    date: "2026-04-23",
  },
  {
    slug: "mudanzas-con-y-sin-ascensor",
    title: "Mudanzas con Ascensor y sin Ascensor en Buenos Aires",
    excerpt: "Todo sobre mudanzas en edificios con y sin ascensor. Tecnicas, soluciones por soga y como afecta el piso al costo.",
    date: "2026-04-23",
  },
  {
    slug: "empresa-mudanzas-confiable-buenos-aires",
    title: "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires",
    excerpt: "Qué verificar antes de contratar una empresa de mudanzas. Señales de alerta y preguntas clave para tomar la mejor decision.",
    date: "2026-04-23",
  },
  {
    slug: "fletes-buenos-aires",
    title: "Fletes en Buenos Aires",
    excerpt: "Servicio de fletes para trasladar muebles, electrodomesticos y objetos en CABA y GBA. Rapido, seguro y con presupuesto sin cargo.",
    date: "2026-04-23",
  },
  {
    slug: "mudanzas-oficinas-buenos-aires",
    title: "Mudanzas de Oficinas en Buenos Aires",
    excerpt: "Servicio especializado de mudanzas corporativas. Minimizamos el tiempo de inactividad de tu empresa con planificacion detallada.",
    date: "2026-04-23",
  },
  {
    slug: "guardamuebles-buenos-aires",
    title: "Guardamuebles en Buenos Aires: Todo lo que Necesitas Saber",
    excerpt: "Como funciona el guardamuebles, que incluye y cuando lo necesitas. Marino Mudanzas tiene guardamuebles en Flores, CABA.",
    date: "2026-04-22",
  },
  {
    slug: "mudanzas-larga-distancia-argentina",
    title: "Mudanzas de Larga Distancia en Argentina",
    excerpt: "Mudanzas exclusivas desde Buenos Aires a todo el pais y paises limitrofes. Sin cargas parciales, mayor seguridad y tiempos precisos.",
    date: "2026-04-23",
  },
  {
    slug: "como-organizar-mudanza-paso-a-paso",
    title: "Cómo organizar una mudanza paso a paso: guía completa",
    excerpt: "Checklist de 4 semanas antes de la mudanza, consejos de embalaje y qué llevar el primer día en tu nuevo hogar.",
    date: "2026-04-22",
  },
  {
    slug: "mudanzas-edificios-buenos-aires",
    title: "Mudanzas en edificios de Buenos Aires: todo lo que tenés que saber",
    excerpt: "Horarios permitidos, documentación necesaria, coordinación con el encargado y diferencias entre mudanzas con y sin ascensor.",
    date: "2026-04-22",
  },
  {slug:'mudanzas-palermo',title:'Mudanzas en Palermo Buenos Aires',excerpt:'Todo lo que necesitas saber para hacer una mudanza en Palermo. Consejos, permisos y por que elegirnos.',date:'2026-04-22'},
  {slug:'mudanzas-belgrano',title:'Mudanzas en Belgrano Buenos Aires',excerpt:'Servicio especializado de mudanzas en Belgrano. Conocemos cada edificio y cada particularidad del barrio.',date:'2026-04-22'},
  {slug:'mudanzas-caballito',title:'Mudanzas en Caballito Buenos Aires',excerpt:'Mudanzas en el barrio mas centrico de Buenos Aires. Coordinacion de permisos y acceso incluido.',date:'2026-04-22'},
  {slug:'mudanzas-recoleta',title:'Mudanzas en Recoleta Buenos Aires',excerpt:'Mudanzas en uno de los barrios mas exclusivos de Buenos Aires. Manejo de muebles de alto valor.',date:'2026-04-22'},
  {slug:'mudanzas-flores',title:'Mudanzas en Flores Buenos Aires',excerpt:'Nuestro barrio de origen desde 1950. Conocemos cada calle y cada edificio de Flores.',date:'2026-04-22'},
  {slug:'mudanzas-almagro',title:'Mudanzas en Almagro Buenos Aires',excerpt:'Mudanzas en Almagro con mas de 80 anos de experiencia. Conocemos cada calle y edificio del barrio.',date:'2026-04-22'},
  {slug:'mudanzas-villa-urquiza',title:'Mudanzas en Villa Urquiza Buenos Aires',excerpt:'Servicio especializado de mudanzas en Villa Urquiza. Flota propia y personal capacitado.',date:'2026-04-22'},
  {slug:'mudanzas-san-telmo',title:'Mudanzas en San Telmo Buenos Aires',excerpt:'Experiencia en traslado de muebles antiguos y objetos de valor en el historico barrio de San Telmo.',date:'2026-04-22'},
  {slug:'mudanzas-boedo',title:'Mudanzas en Boedo Buenos Aires',excerpt:'Mudanzas en el tradicional barrio de Boedo. Eficiencia y cuidado en cada traslado.',date:'2026-04-22'},
  {slug:'mudanzas-villa-crespo',title:'Mudanzas en Villa Crespo Buenos Aires',excerpt:'Mudanzas en Villa Crespo, uno de los barrios que mas crece en Buenos Aires. Presupuesto sin cargo.',date:'2026-04-22'},
  {slug:'mudanzas-nunez',title:'Mudanzas en Nunez Buenos Aires',excerpt:'Barrio residencial exclusivo del norte de CABA cerca del rio.',date:'2026-04-22'},
  {slug:'mudanzas-colegiales',title:'Mudanzas en Colegiales Buenos Aires',excerpt:'Barrio bohemio entre Palermo y Belgrano con PHs y casas bajas.',date:'2026-04-22'},
  {slug:'mudanzas-villa-devoto',title:'Mudanzas en Villa Devoto Buenos Aires',excerpt:'Barrio familiar del oeste con casas amplias y calles arboladas.',date:'2026-04-22'},
  {slug:'mudanzas-liniers',title:'Mudanzas en Liniers Buenos Aires',excerpt:'Barrio vibrante del oeste con historia y diversidad cultural.',date:'2026-04-22'},
  {slug:'mudanzas-mataderos',title:'Mudanzas en Mataderos Buenos Aires',excerpt:'Barrio tradicional del sur de CABA con casas de familia amplias.',date:'2026-04-22'},
  {slug:'mudanzas-vicente-lopez',title:'Mudanzas en Vicente Lopez GBA',excerpt:'Servicio de mudanzas en Vicente Lopez, Olivos, La Lucila y todo el partido. Mas de 80 anos de experiencia.',date:'2026-04-22'},
  {slug:'mudanzas-san-isidro',title:'Mudanzas en San Isidro GBA',excerpt:'Mudanzas en San Isidro, Beccar, Martinez y barrios privados. Manejo de mobiliario de alto valor.',date:'2026-04-22'},
  {slug:'mudanzas-tigre',title:'Mudanzas en Tigre GBA',excerpt:'Mudanzas a Tigre, Nordelta y countries del partido. Experiencia en barrios privados y countries.',date:'2026-04-22'},
  {slug:'mudanzas-moron',title:'Mudanzas en Moron GBA',excerpt:'Mudanzas en Moron, Haedo y El Palomar. Eficiencia y cuidado en cada traslado del oeste del GBA.',date:'2026-04-22'},
  {slug:'mudanzas-lanus',title:'Mudanzas en Lanus GBA',excerpt:'Mudanzas en Lanus Este, Lanus Oeste y Remedios de Escalada. Presupuesto sin cargo.',date:'2026-04-22'},
  {slug:'mudanzas-quilmes',title:'Mudanzas en Quilmes GBA',excerpt:'Servicio de mudanzas en Quilmes, Bernal y Berazategui. Mas de 80 anos de experiencia en el sur del GBA.',date:'2026-04-23'},
  {slug:'mudanzas-avellaneda',title:'Mudanzas en Avellaneda GBA',excerpt:'Mudanzas en Avellaneda y zona sur del GBA. Lindero con CABA, uno de los destinos mas frecuentes.',date:'2026-04-23'},
  {slug:'mudanzas-la-matanza',title:'Mudanzas en La Matanza GBA',excerpt:'Mudanzas en San Justo, Ramos Mejia y todo el partido de La Matanza. El partido mas poblado del GBA.',date:'2026-04-23'},
  {slug:'mudanzas-fin-de-mes',title:'Mudanzas a Fin de Mes en Buenos Aires',excerpt:'Todo lo que necesitas saber para organizarte cuando te mudas a fin de mes. La fecha mas demandada del mes y como reservar con anticipacion.',date:'2026-05-11'},
  {slug:'mudanzas-villa-del-parque',title:'Mudanzas en Villa del Parque Buenos Aires',excerpt:'Servicio de mudanzas en Villa del Parque. Experiencia en edificios sin ascensor, casas con jardin y PHs. Presupuesto sin cargo.',date:'2026-05-12'},
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Consejos de Mudanza
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Guías prácticas y consejos de nuestros expertos con más de 80 años de experiencia en mudanzas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-gold/40 transition-all group"
              >
                <time className="font-body text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}</time>
                <h2 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h2>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="flex items-center gap-1 font-body text-gold font-semibold text-sm">
                  Leer más <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};


