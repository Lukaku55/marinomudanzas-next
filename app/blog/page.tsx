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
  { slug: "cuanto-cuesta-mudanza-buenos-aires", title: "¿Cuánto cuesta una mudanza en Buenos Aires en 2026?", excerpt: "Descubrí los factores que afectan el precio de una mudanza y rangos de precios orientativos según el tamaño de tu vivienda.", date: "2026-04-22" },
  { slug: "checklist-mudanza", title: "Checklist de Mudanza Completo 2026", excerpt: "Todo lo que tenes que hacer 4 semanas antes, 1 semana antes y el dia de tu mudanza. Guia completa.", date: "2026-04-22" },
  { slug: "como-embalar-muebles-mudanza", title: "Cómo Embalar Muebles para una Mudanza", excerpt: "Guía completa con técnicas profesionales para embalar muebles, objetos frágiles y electrodomésticos antes de mudarte.", date: "2026-04-23" },
  { slug: "que-incluye-una-mudanza", title: "¿Qué Incluye un Servicio de Mudanza Profesional?", excerpt: "Todo lo que está incluido en un servicio de mudanza: embalaje, desarmado, carga, transporte, descarga y coordinación con el consorcio.", date: "2026-04-23" },
  { slug: "mudanzas-por-soga", title: "Mudanzas por Soga en Buenos Aires", excerpt: "Especialistas en elevar y descender muebles por el exterior cuando no entran por ascensor o escalera.", date: "2026-04-22" },
  { slug: "mudanzas-departamentos-buenos-aires", title: "Mudanzas de Departamentos en Buenos Aires", excerpt: "Todo lo que necesitas saber para hacer una mudanza de departamento en Buenos Aires. Consorcios, ascensores y soluciones para cada caso.", date: "2026-04-23" },
  { slug: "mudanzas-con-y-sin-ascensor", title: "Mudanzas con Ascensor y sin Ascensor en Buenos Aires", excerpt: "Todo sobre mudanzas en edificios con y sin ascensor. Tecnicas, soluciones por soga y como afecta el piso al costo.", date: "2026-04-23" },
  { slug: "empresa-mudanzas-confiable-buenos-aires", title: "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires", excerpt: "Qué verificar antes de contratar una empresa de mudanzas. Señales de alerta y preguntas clave para tomar la mejor decision.", date: "2026-04-23" },
  { slug: "fletes-buenos-aires", title: "Fletes en Buenos Aires", excerpt: "Servicio de fletes para trasladar muebles, electrodomesticos y objetos en CABA y GBA. Rapido, seguro y con presupuesto sin cargo.", date: "2026-04-23" },
  { slug: "mudanzas-oficinas-buenos-aires", title: "Mudanzas de Oficinas en Buenos Aires", excerpt: "Servicio especializado de mudanzas corporativas. Minimizamos el tiempo de inactividad de tu empresa con planificacion detallada.", date: "2026-04-23" },
  { slug: "guardamuebles-buenos-aires", title: "Guardamuebles en Buenos Aires: Todo lo que Necesitas Saber", excerpt: "Como funciona el guardamuebles, que incluye y cuando lo necesitas. Marino Mudanzas tiene guardamuebles en Flores, CABA.", date: "2026-04-22" },
  { slug: "mudanzas-larga-distancia-argentina", title: "Mudanzas de Larga Distancia en Argentina", excerpt: "Mudanzas exclusivas desde Buenos Aires a todo el pais y paises limitrofes. Sin cargas parciales, mayor seguridad y tiempos precisos.", date: "2026-04-23" },
  { slug: "como-organizar-mudanza-paso-a-paso", title: "Cómo organizar una mudanza paso a paso: guía completa", excerpt: "Checklist de 4 semanas antes de la mudanza, consejos de embalaje y qué llevar el primer día en tu nuevo hogar.", date: "2026-04-22" },
  { slug: "mudanzas-edificios-buenos-aires", title: "Mudanzas en edificios de Buenos Aires: todo lo que tenés que saber", excerpt: "Horarios permitidos, documentación necesaria, coordinación con el encargado y diferencias entre mudanzas con y sin ascensor.", date: "2026-04-22" },
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
  {slug:'mudanzas-chacarita',title:'Mudanzas en Chacarita Buenos Aires',excerpt:'Servicio de mudanzas en Chacarita. Experiencia en edificios sin ascensor y calles angostas. Flota de distintos tamaños. Presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-parque-chacabuco',title:'Mudanzas en Parque Chacabuco Buenos Aires',excerpt:'Servicio de mudanzas en Parque Chacabuco. Experiencia en casas de familia y edificios sin ascensor. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-paternal',title:'Mudanzas en Paternal Buenos Aires',excerpt:'Servicio de mudanzas en Paternal. Experiencia en casas de familia y edificios sin ascensor. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-villa-pueyrredon',title:'Mudanzas en Villa Pueyrredón Buenos Aires',excerpt:'Servicio de mudanzas en Villa Pueyrredón. Experiencia en casas de familia y edificios sin ascensor. Calles arboladas y tranquilas. Presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-agronomia',title:'Mudanzas en Agronomía Buenos Aires',excerpt:'Servicio de mudanzas en Agronomía. Barrio tranquilo con predominio de casas bajas. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-villa-lugano',title:'Mudanzas en Villa Lugano Buenos Aires',excerpt:'Servicio de mudanzas en Villa Lugano. Experiencia en el sur de CABA con flota de distintos tamaños. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-balvanera',title:'Mudanzas en Balvanera Buenos Aires',excerpt:'Mudanzas en Balvanera, Once, Abasto y Congreso. Experiencia en edificios antiguos y alta densidad. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-floresta',title:'Mudanzas en Floresta Buenos Aires',excerpt:'Mudanzas en Floresta, barrio vecino a Flores nuestro lugar de origen. Calles tranquilas y arboladas. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-13'},
  {slug:'mudanzas-villa-santa-rita',title:'Mudanzas en Villa Santa Rita Buenos Aires',excerpt:'Servicio de mudanzas en Villa Santa Rita. Barrio tranquilo del oeste con predominio de casas bajas. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-monte-castro',title:'Mudanzas en Monte Castro Buenos Aires',excerpt:'Servicio de mudanzas en Monte Castro. Casas bajas y calles tranquilas del oeste de CABA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-villa-luro',title:'Mudanzas en Villa Luro Buenos Aires',excerpt:'Servicio de mudanzas en Villa Luro. Experiencia en calles angostas y edificios de mediana altura. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-villa-general-mitre',title:'Mudanzas en Villa General Mitre Buenos Aires',excerpt:'Servicio de mudanzas en Villa General Mitre. Uno de los barrios más tranquilos de CABA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-barracas',title:'Mudanzas en Barracas Buenos Aires',excerpt:'Servicio de mudanzas en Barracas. Barrio histórico del sur de CABA con lofts, edificios de época y nuevas torres. Presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-constitucion',title:'Mudanzas en Constitución Buenos Aires',excerpt:'Servicio de mudanzas en Constitución. Barrio céntrico del sur con alta densidad de edificios. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-nueva-pompeya',title:'Mudanzas en Nueva Pompeya Buenos Aires',excerpt:'Servicio de mudanzas en Nueva Pompeya. Barrio tradicional del sur de CABA con casas bajas. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-villa-soldati',title:'Mudanzas en Villa Soldati Buenos Aires',excerpt:'Servicio de mudanzas en Villa Soldati. Alta densidad poblacional en el sur de CABA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-villa-riachuelo',title:'Mudanzas en Villa Riachuelo Buenos Aires',excerpt:'Servicio de mudanzas en Villa Riachuelo. Barrio tranquilo del sur de CABA con predominio de casas bajas. Presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-boca',title:'Mudanzas en La Boca Buenos Aires',excerpt:'Servicio de mudanzas en La Boca. Barrio histórico y colorido del sur de CABA. Experiencia en propiedades de época. Presupuesto sin cargo.',date:'2026-05-14'},
  {slug:'mudanzas-merlo',title:'Mudanzas en Merlo GBA',excerpt:'Servicio de mudanzas en Merlo. Cubrimos todo el partido incluyendo Libertad, Pontevedra y San Antonio de Padua. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-moreno',title:'Mudanzas en Moreno GBA',excerpt:'Servicio de mudanzas en Moreno. Cubrimos todo el partido incluyendo Francisco Álvarez, La Reja y Cuartel V. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-san-martin',title:'Mudanzas en San Martín GBA',excerpt:'Servicio de mudanzas en San Martín. Villa Ballester, José León Suárez y todo el partido. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-tres-de-febrero',title:'Mudanzas en Tres de Febrero GBA',excerpt:'Servicio de mudanzas en Tres de Febrero. Caseros, Ciudadela, El Palomar y todo el partido. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-berazategui',title:'Mudanzas en Berazategui GBA',excerpt:'Servicio de mudanzas en Berazategui. Hudson, Ranelagh y todo el partido. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-jose-c-paz',title:'Mudanzas en José C. Paz GBA',excerpt:'Servicio de mudanzas en José C. Paz. Cubrimos todo el partido del noroeste del GBA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-malvinas-argentinas',title:'Mudanzas en Malvinas Argentinas GBA',excerpt:'Servicio de mudanzas en Malvinas Argentinas. Grand Bourg, Los Polvorines, Tortuguitas y todo el partido. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-esteban-echeverria',title:'Mudanzas en Esteban Echeverría GBA',excerpt:'Servicio de mudanzas en Esteban Echeverría. Monte Grande, El Jagüel y todo el partido del sur del GBA. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-florencio-varela',title:'Mudanzas en Florencio Varela GBA',excerpt:'Servicio de mudanzas en Florencio Varela. Bosques, Villa Brown y todo el partido del sur del GBA. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-ezeiza',title:'Mudanzas en Ezeiza GBA',excerpt:'Servicio de mudanzas en Ezeiza. Canning, Carlos Spegazzini y todo el partido. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-marcos-paz',title:'Mudanzas en Marcos Paz GBA',excerpt:'Servicio de mudanzas en Marcos Paz. Partido tranquilo del oeste del GBA con casas de familia. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-general-rodriguez',title:'Mudanzas en General Rodríguez GBA',excerpt:'Servicio de mudanzas en General Rodríguez. Partido en crecimiento del oeste del GBA. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-retiro',title:'Mudanzas en Retiro Buenos Aires',excerpt:'Servicio de mudanzas en Retiro. Barrio céntrico con edificios de alto nivel. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-villa-ortuzar',title:'Mudanzas en Villa Ortúzar Buenos Aires',excerpt:'Servicio de mudanzas en Villa Ortúzar. Barrio tranquilo del norte de CABA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-versalles',title:'Mudanzas en Versalles Buenos Aires',excerpt:'Servicio de mudanzas en Versalles. Barrio exclusivo del oeste con calles sinuosas y casas de alto nivel. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-villa-real',title:'Mudanzas en Villa Real Buenos Aires',excerpt:'Servicio de mudanzas en Villa Real. Barrio tranquilo del oeste con predominio de casas bajas. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-lujan',title:'Mudanzas en Luján GBA',excerpt:'Servicio de mudanzas en Luján. Ciudad histórica del oeste del GBA a 70 km de Buenos Aires. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'mudanzas-zarate',title:'Mudanzas en Zárate GBA',excerpt:'Servicio de mudanzas en Zárate. Ciudad industrial del norte del GBA a orillas del Río Paraná. Presupuesto sin cargo.',date:'2026-05-15'},
  {slug:'como-calcular-volumen-mudanza',title:'¿Cómo calcular el volumen de una mudanza?',excerpt:'Guía práctica para calcular el volumen de tu mudanza y elegir el camión correcto. Tablas de referencia por tipo de vivienda y consejos de expertos.',date:'2026-05-15'},
  {slug:'como-preparar-electrodomesticos-mudanza',title:'Cómo Preparar los Electrodomésticos para una Mudanza',excerpt:'Guía paso a paso para desconectar y preparar heladera, lavarropas, TV y más antes de tu mudanza. Consejos para evitar roturas y daños.',date:'2026-05-21'},
  {slug:'mudanzas-con-ninos',title:'Cómo Mudarse con Niños en Buenos Aires',excerpt:'Consejos para hacer la transición más fácil para toda la familia. Cómo hablar con los chicos, involucrarlos en el proceso y facilitar la adaptación al nuevo hogar.',date:'2026-05-21'},
  {slug:'mudanzas-de-piano-buenos-aires',title:'Mudanzas de Piano en Buenos Aires',excerpt:'Especialistas en el traslado de pianos verticales y de cola. Equipamiento profesional, técnica segura y más de 80 años de experiencia en Buenos Aires.',date:'2026-05-26'},
  {slug:'que-no-transportan-las-empresas-de-mudanzas',title:'Qué No Transportan las Empresas de Mudanzas',excerpt:'Guía completa sobre objetos prohibidos en una mudanza: garrafas, joyas, mascotas, alimentos perecederos y más. Evitá sorpresas el día del traslado.',date:'2026-05-26'},
  {slug:'como-armar-cajas-mudanza',title:'Cómo Armar Cajas para Mudanza: Guía Completa',excerpt:'Técnicas profesionales para armar y empacar cajas correctamente. Cómo proteger objetos frágiles, elegir los materiales y organizar el contenido para una mudanza sin roturas.',date:'2026-05-28'},
  {slug:'mudanzas-express-buenos-aires',title:'Mudanzas Express en Buenos Aires',excerpt:'¿Necesitás mudarte con poco tiempo? Conocé cómo funciona el servicio de mudanza express en Buenos Aires, qué incluye y cómo coordinar una mudanza urgente en 24 a 48 horas.',date:'2026-05-28'},
  {slug:'mudanzas-tortuguitas',title:'Mudanzas en Tortuguitas, Malvinas Argentinas',excerpt:'Servicio de mudanzas en Tortuguitas, partido de Malvinas Argentinas. Más de 80 años de experiencia en el noroeste del GBA. Embalaje incluido y presupuesto sin cargo.',date:'2026-05-29'},
  {slug:'mudanzas-en-invierno',title:'Mudanzas en Invierno en Buenos Aires',excerpt:'Todo lo que necesitás saber para mudarte durante el invierno porteño. Ventajas de la temporada baja, cómo proteger tus muebles de la lluvia y qué hacer si el día de la mudanza está complicado.',date:'2026-06-02'},
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
              <Link key={article.slug} href={`/blog/${article.slug}`} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-gold/40 transition-all group">
                <time className="font-body text-sm text-muted-foreground">{new Date(article.date).toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" })}</time>
                <h2 className="font-display text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-gold transition-colors">{article.title}</h2>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <span className="flex items-center gap-1 font-body text-gold font-semibold text-sm">Leer más <ArrowRight className="w-4 h-4" /></span>
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
