/**
 * Todo el contenido del boceto vive acá. Los datos salen del sitio real
 * (mudanzasmarino.com.ar) y de la ficha de Google, vistos el 2026-10-10.
 *
 * `confirmar: true` marca lo que hay que validar con el negocio antes de
 * publicar. Con MOSTRAR_PENDIENTES en true se ve la etiqueta "A confirmar".
 */
export const MOSTRAR_PENDIENTES = false;

/**
 * Mientras sea false, el boceto le pide a los buscadores que no lo indexen
 * (el sitio publicado es otro). Al publicarlo en su dominio, pasarlo a true:
 * eso activa la indexación y el sitemap.
 */
export const PUBLICAR = true;

export type Foto = { src: string; srcSet?: string; alt: string; ancho: number; alto: number };

/** Fotos reales que pasó el negocio, guardadas en public/fotos. Next las sirve en AVIF o WebP al tamaño justo. */
const propia = (archivo: string, alt: string, ancho: number, alto: number): Foto => ({ src: `/fotos/${archivo}.jpg`, alt, ancho, alto });

export const FOTOS = {
  camion: propia("camion-contrapicado", "Camión de Marino Mudanzas estacionado frente a un edificio, visto desde abajo", 1600, 900),
  camionLateral: propia("camion-lateral", "Camión blanco y rojo de Marino Mudanzas, de costado, con el teléfono 4611-1818", 1600, 1201),
  camionInterior: propia("camion-interior-mantas", "Interior de la caja del camión, con una pila de mantas de embalaje", 1600, 1290),
  living: propia("muebles-embalados-living", "Mesa y muebles embalados con mantas en un living, listos para cargar", 1600, 1200),
  embalaje: propia("mueble-embalado-film", "Mueble embalado con mantas y film stretch", 1600, 1200),
  reja: propia("equipo-ingreso-reja", "Dos operarios de Marino Mudanzas entrando a un edificio con una pieza embalada", 1212, 1600),
  hall: propia("equipo-hall", "Operarios de Marino Mudanzas trasladando cajas por un hall de mármol y madera", 1214, 1600),
  fragil: propia("equipo-pieza-fragil", "Operarios de Marino Mudanzas ingresando una pieza embalada y marcada como frágil", 1216, 1600),
  soga: propia("soga-sofa", "Sofá embalado bajando por soga desde un balcón", 900, 1600),
  guardamuebles: propia("guardamuebles-deposito", "Depósito de guardamuebles de Marino Mudanzas, con bauleras enrejadas a los lados de un pasillo", 1050, 1400),
  sogaArriba: propia("soga-desde-arriba", "Mueble embalado bajando por soga, visto desde el balcón", 898, 1600),
};

export const EMPRESA = {
  nombre: "Marino Mudanzas",
  url: "https://www.mudanzasmarino.com.ar",
  logo: "/marca/logo-marino-nuevo.png",
  telefonos: [
    { visible: "4611-1818", href: "tel:+541146111818" },
    { visible: "4613-1818", href: "tel:+541146131818" },
    { visible: "4637-1818", href: "tel:+541146371818" },
  ],
  whatsapp: { numero: "5491154507435", visible: "11-5450-7435" },
  instagram: { usuario: "marino_mudanzas", url: "https://www.instagram.com/marino_mudanzas" },
  direccion: "Av. Juan Bautista Alberdi 2968, Flores, CABA",
  horario: "Atención presencial: lunes a viernes de 9 a 15 h y sábados de 9 a 13 h",
  horarioWhatsapp: "WhatsApp: lunes a sábados de 7 a 21 h",
  horarioEn: "from 7 a.m. to 9 p.m.", // atención por WhatsApp
  horarioCompletoEn: "In person: Monday to Friday, 9 a.m. to 3 p.m.; Saturday, 9 a.m. to 1 p.m.",
  horarioWhatsappEn: "WhatsApp: Monday to Saturday, 7 a.m. to 9 p.m.",
  /** Pendiente: confirmar cuál es el correo comercial antes de mostrarlo. */
  email: null as string | null,
  resenas: {
    puntuacion: "4,8",
    url: "https://www.google.com/maps/search/?api=1&query=Marino+Mudanzas+Av.+Juan+Bautista+Alberdi+2968+Buenos+Aires",
  },
};

export const whatsappUrl = (mensaje = "Hola, quiero pedir un presupuesto de mudanza.") =>
  `https://wa.me/${EMPRESA.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#trabajos", label: "Trabajos" },
  { href: "/blog", label: "Blog" },
];

export const CTA = { label: "Solicitar presupuesto", href: "/#presupuesto" };

export const HERO = {
  titulo: "Mudanzas en Buenos Aires, en buenas manos.",
  bajada: "Más que trasladar cosas, cuidamos lo que importa. Empresa de mudanzas en CABA y Gran Buenos Aires, con base en Flores.",
  foto: FOTOS.camion,
};

export const NOSOTROS = {
  titulo: "Una empresa de Flores que muda familias y empresas.",
  confirmar: true,
  parrafos: [
    "Somos una empresa de mudanzas de Buenos Aires con más de 80 años de trayectoria y base en Av. Alberdi 2968, en Flores. Hacemos mudanzas particulares, traslados de oficinas y guardamuebles.",
    "Entendemos que cada mudanza es distinta. Por eso cuidamos cada detalle, desde el presupuesto hasta que el último mueble queda en su lugar.",
  ],
  pendientes: ["historia de la empresa", "tamaño del equipo y de la flota"],
  foto: FOTOS.fragil,
};

export type Servicio = { nombre: string; texto: string; href?: string; foto?: Foto; icono: "casa" | "oficina" | "caja" | "deposito" | "ruta" | "soga" };

/** Servicios que figuran en el sitio actual. Para sumar o quitar uno, editá esta lista. */
export const SERVICIOS: Servicio[] = [
  { nombre: "Mudanzas residenciales", href: "/mudanzas-residenciales", texto: "Casas, departamentos y PH. Embalaje, carga, transporte y descarga.", foto: FOTOS.living, icono: "casa" },
  { nombre: "Oficinas y empresas", href: "/mudanzas-oficinas", texto: "Planificamos el traslado para que tu negocio pare lo menos posible.", foto: FOTOS.hall, icono: "oficina" },
  { nombre: "Embalaje", texto: "Mantas y film stretch para proteger muebles y objetos en el traslado.", foto: FOTOS.embalaje, icono: "caja" },
  { nombre: "Mudanzas al interior", href: "/mudanzas-interior", texto: "Traslados a todo el país, sin compartir la carga con otras mudanzas.", foto: FOTOS.camionLateral, icono: "ruta" },
  { nombre: "Guardamuebles", href: "/guardamuebles", texto: "Espacios en Flores para guardar tus muebles el tiempo que necesites.", foto: FOTOS.guardamuebles, icono: "deposito" },
  { nombre: "Mudanzas por soga", href: "/blog/mudanzas-por-soga", texto: "Para muebles grandes que no pasan por el ascensor ni la escalera.", foto: FOTOS.soga, icono: "soga" },
];

export const POR_QUE = {
  titulo: "No es solo un camión. Es quién cuida tus cosas.",
  confirmar: true,
  motivos: [
    { titulo: "Presupuesto sin cargo", texto: "Nos contás qué mudás y te pasamos el presupuesto, sin compromiso.", icono: "presupuesto" },
    { titulo: "Embalaje con mantas y film", texto: "Cada mueble viaja protegido para que llegue como salió.", icono: "cuidado" },
    { titulo: "Coordinación con el edificio", texto: "Hablamos con el encargado y respetamos los horarios del consorcio.", icono: "plan" },
    { titulo: "Camiones propios", texto: "Trabajamos con nuestra flota, del tamaño que pide cada mudanza.", icono: "camion" },
    { titulo: "Atención por WhatsApp", texto: "Te respondemos de lunes a sábados, de 7 a 21 h.", icono: "chat" },
    { titulo: "Reseñas a la vista", texto: "4,8 sobre 5 en Google. Podés leer lo que cuentan otros clientes.", icono: "estrella" },
  ] as const,
};

export const COMO_FUNCIONA = {
  titulo: "Así se hace una mudanza ordenada.",
  pasos: [
    { titulo: "Embalamos tus muebles", texto: "Antes de mover nada, protegemos cada mueble con mantas y film." },
    { titulo: "Cargamos el camión", texto: "Lo pesado lo llevamos entre dos. Todo viaja ordenado y sujeto." },
    { titulo: "Trasladamos", texto: "Tu mudanza viaja sola en el camión, del departamento viejo al nuevo." },
    { titulo: "Descargamos y ubicamos", texto: "Bajamos todo, lo desembalamos y dejamos cada mueble en su lugar." },
  ],
};

export const GALERIA = {
  titulo: "Trabajos reales, sin fotos de catálogo.",
  bajada: "Cada foto es una mudanza hecha por nuestro equipo.",
  fotos: [FOTOS.camionLateral, FOTOS.soga, FOTOS.reja, FOTOS.camionInterior, FOTOS.living, FOTOS.sogaArriba],
};

/** Cinco artículos del blog real, con su título y resumen originales. */
export const CONSEJOS = {
  titulo: "Consejos para mudarte con menos estrés.",
  articulos: [
    { slug: "checklist-mudanza", titulo: "Checklist de Mudanza Completo 2026", intro: "Todo lo que tenes que hacer 4 semanas antes, 1 semana antes y el dia de tu mudanza. Guia completa." },
    { slug: "como-embalar-muebles-mudanza", titulo: "Cómo Embalar Muebles para una Mudanza", intro: "Guía completa con técnicas profesionales para embalar muebles, objetos frágiles y electrodomésticos antes de mudarte." },
    { slug: "que-incluye-una-mudanza", titulo: "¿Qué Incluye un Servicio de Mudanza Profesional?", intro: "Todo lo que está incluido en un servicio de mudanza: embalaje, desarmado, carga, transporte, descarga y coordinación con el consorcio." },
    { slug: "mudanzas-por-soga", titulo: "Mudanzas por Soga en Buenos Aires", intro: "Especialistas en elevar y descender muebles por el exterior cuando no entran por ascensor o escalera." },
    { slug: "cuanto-tiempo-dura-una-mudanza", titulo: "¿Cuánto Tiempo Dura una Mudanza? Tiempos Reales por Tamaño", intro: "Estimaciones reales de cuánto tarda una mudanza según la cantidad de ambientes, el piso, el ascensor y el volumen de muebles. Guía práctica para planificar tu día." },
  ],
};

/** Ventajas cortas que se repiten cerca de los botones de contacto. */
export const CONFIANZA = ["Más de 80 años de trayectoria", `${EMPRESA.resenas.puntuacion} en Google`, "Presupuesto sin cargo"];

export const TIPOS_MUDANZA = ["Casa o departamento", "Oficina o comercio", "Mudanza al interior", "Guardamuebles", "Traslado de pocos muebles"];
