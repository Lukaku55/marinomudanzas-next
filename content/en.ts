/**
 * English version of the home page content. Mirrors content/site.ts.
 * The blog and the service pages stay in Spanish: links to them say so.
 */
import { EMPRESA, FOTOS, type Foto, type Servicio } from "./site";

const alt = (foto: Foto, texto: string): Foto => ({ ...foto, alt: texto });

export const FOTOS_EN = {
  camion: alt(FOTOS.camion, "Marino Mudanzas truck parked in front of a building, seen from below"),
  camionLateral: alt(FOTOS.camionLateral, "White and red Marino Mudanzas truck, side view, with the phone number 4611-1818"),
  camionInterior: alt(FOTOS.camionInterior, "Inside the truck box, with a stack of moving blankets"),
  living: alt(FOTOS.living, "Table and furniture wrapped in blankets in a living room, ready to be loaded"),
  embalaje: alt(FOTOS.embalaje, "Piece of furniture wrapped in blankets and stretch film"),
  reja: alt(FOTOS.reja, "Two Marino Mudanzas movers entering a building with a wrapped item"),
  hall: alt(FOTOS.hall, "Marino Mudanzas movers carrying boxes through a marble and wood hall"),
  fragil: alt(FOTOS.fragil, "Marino Mudanzas movers bringing in a wrapped item marked as fragile"),
  soga: alt(FOTOS.soga, "Wrapped sofa being lowered by rope from a balcony"),
  guardamuebles: alt(FOTOS.guardamuebles, "Marino Mudanzas furniture storage, with locked storage units on both sides of an aisle"),
  sogaArriba: alt(FOTOS.sogaArriba, "Wrapped furniture being lowered by rope, seen from the balcony"),
};

export const HERO_EN = {
  titulo: "Moving in Buenos Aires, in good hands.",
  bajada: "More than moving things, we take care of what matters. Moving company in Buenos Aires City and Greater Buenos Aires, based in Flores.",
  foto: FOTOS_EN.camion,
};

export const NOSOTROS_EN = {
  titulo: "A company from Flores that moves families and businesses.",
  parrafos: [
    "We are a Buenos Aires moving company with over 80 years of experience, based at Av. Alberdi 2968 in Flores. We handle home moves, office relocations and furniture storage.",
    "Every move is different. That's why we take care of every detail, from the quote until the last piece of furniture is in place.",
  ],
  pendientes: ["company history", "size of the team and the fleet"],
  foto: FOTOS_EN.fragil,
};

export const SERVICIOS_EN: Servicio[] = [
  { nombre: "Home moves", href: "/mudanzas-residenciales", texto: "Houses, apartments and PHs. Packing, loading, transport and unloading.", foto: FOTOS_EN.living, icono: "casa" },
  { nombre: "Offices and businesses", href: "/mudanzas-oficinas", texto: "We plan the move so your business stops as little as possible.", foto: FOTOS_EN.hall, icono: "oficina" },
  { nombre: "Packing", texto: "Blankets and stretch film to protect furniture and belongings during the move.", foto: FOTOS_EN.embalaje, icono: "caja" },
  { nombre: "Long-distance moves", href: "/mudanzas-interior", texto: "Moves anywhere in Argentina, without sharing the truck with other moves.", foto: FOTOS_EN.camionLateral, icono: "ruta" },
  { nombre: "Furniture storage", href: "/guardamuebles", texto: "Spaces in Flores to store your furniture for as long as you need.", foto: FOTOS_EN.guardamuebles, icono: "deposito" },
  { nombre: "Rope hoisting", href: "/blog/mudanzas-por-soga", texto: "For large furniture that doesn't fit in the elevator or the stairs.", foto: FOTOS_EN.soga, icono: "soga" },
];

export const POR_QUE_EN = {
  titulo: "It's not just a truck. It's who takes care of your things.",
  motivos: [
    { titulo: "Free quote", texto: "Tell us what you're moving and we'll send you a quote, with no commitment.", icono: "presupuesto" },
    { titulo: "Blankets and film", texto: "Every piece travels protected so it arrives the way it left.", icono: "cuidado" },
    { titulo: "We coordinate with the building", texto: "We talk to the building manager and follow the building's schedule.", icono: "plan" },
    { titulo: "Our own trucks", texto: "We work with our own fleet, sized for each move.", icono: "camion" },
    { titulo: "WhatsApp support", texto: `We answer Monday to Saturday, ${EMPRESA.horarioEn}.`, icono: "chat" },
    { titulo: "Reviews you can read", texto: `${EMPRESA.resenas.puntuacion.replace(",", ".")} out of 5 on Google. Read what other customers say.`, icono: "estrella" },
  ] as const,
};

export const COMO_FUNCIONA_EN = {
  titulo: "This is how an organized move works.",
  pasos: [
    { titulo: "We pack your furniture", texto: "Before moving anything, we protect every piece with blankets and film." },
    { titulo: "We load the truck", texto: "Heavy items are carried by two people. Everything travels secured and in order." },
    { titulo: "We move it", texto: "Your belongings travel alone in the truck, from the old home to the new one." },
    { titulo: "We unload and place", texto: "We bring everything in, unwrap it and leave each piece where it goes." },
  ],
};

export const GALERIA_EN = {
  titulo: "Real jobs, no stock photos.",
  bajada: "Every photo is a move done by our team.",
  fotos: [FOTOS_EN.camionLateral, FOTOS_EN.soga, FOTOS_EN.reja, FOTOS_EN.camionInterior, FOTOS_EN.living, FOTOS_EN.sogaArriba],
};

/** The articles are in Spanish; titles and summaries are translated here. */
export const CONSEJOS_EN = {
  titulo: "Tips for a less stressful move.",
  articulos: [
    { slug: "checklist-mudanza", titulo: "Complete moving checklist 2026", intro: "Everything to do 4 weeks before, 1 week before and on moving day." },
    { slug: "como-embalar-muebles-mudanza", titulo: "How to pack furniture for a move", intro: "Professional techniques to pack furniture, fragile items and appliances before moving." },
    { slug: "que-incluye-una-mudanza", titulo: "What does a professional moving service include?", intro: "Packing, disassembly, loading, transport, unloading and coordination with the building." },
    { slug: "mudanzas-por-soga", titulo: "Rope hoisting in Buenos Aires", intro: "Raising and lowering furniture from outside when it doesn't fit in the elevator or stairs." },
    { slug: "cuanto-tiempo-dura-una-mudanza", titulo: "How long does a move take?", intro: "Real estimates by number of rooms, floor, elevator and amount of furniture." },
  ],
};

export const CONFIANZA_EN = ["Over 80 years of experience", `${EMPRESA.resenas.puntuacion.replace(",", ".")} on Google`, "Free quote"];

export const TIPOS_MUDANZA_EN = ["House or apartment", "Office or business", "Long-distance move", "Furniture storage", "A few items"];

export const NAV_EN = [
  { href: "/en", label: "Home" },
  { href: "/en#servicios", label: "Services" },
  { href: "/en#como-funciona", label: "How it works" },
  { href: "/en#trabajos", label: "Our work" },
  { href: "/blog", label: "Blog", hrefLang: "es" },
];

export const CTA_EN = { label: "Get a quote", href: "/en#presupuesto" };

export const ZONAS_TEXTO_EN: Record<string, string> = {
  "mudanzas-flores": "Our home neighborhood for over 80 years. Base at Av. Alberdi 2968, our own storage and the fastest arrival.",
  "mudanzas-palermo": "Palermo Soho, Hollywood and Chico. Packing included, rope hoisting in PHs and a fixed price with no surprises.",
  "mudanzas-belgrano": "Belgrano R, C and Chico. High-value furniture, demanding buildings and prior coordination included.",
  "mudanzas-caballito": "The most central neighborhood in the city. Buildings of every era, narrow stairs and a fixed price.",
  "mudanzas-recoleta": "Period buildings, cage elevators, marble floors and antiques. Specialists with a fixed price.",
  "mudanzas-almagro": "Buildings from the 40s and 50s, narrow streets and Corrientes traffic. We know how to move around.",
  "mudanzas-boedo": "A traditional neighborhood with garden houses, 60s buildings and quiet streets. Free quote.",
  "mudanzas-villa-crespo": "Renovated PHs, lofts and new buildings. The fastest-growing neighborhood, with lots of tenant turnover.",
  "mudanzas-san-telmo": "The most demanding neighborhood. Long houses, cobblestones and antiques. Specialists with a fixed price.",
  "mudanzas-villa-urquiza": "Tree-lined streets, large houses and the best truck access in the city. Fixed price.",
  "mudanzas-colegiales": "Narrow streets, PHs with stairs and 60s buildings. The right vehicle for each kind of access.",
  "mudanzas-nunez": "Towers by the river, houses with gardens and demanding buildings. We coordinate everything in advance.",
  "mudanzas-chacarita": "A residential neighborhood with good access. Houses, PHs and apartment buildings near Palermo.",
  "mudanzas-saavedra": "A quiet northern area with family houses and good access for trucks of every size.",
  "mudanzas-villa-devoto": "A family neighborhood with two-story houses and good vehicle access. Full service from the quote.",
  "mudanzas-liniers": "A commercial and residential area in the west of the city. We know every street and access.",
  "mudanzas-vicente-lopez": "Full coverage in Olivos, Munro, Florida and La Lucila, in the north of Greater Buenos Aires.",
  "mudanzas-san-isidro": "Trucks suited to residential neighborhoods and gated communities. Packing and storage available.",
  "mudanzas-tigre": "Specialized logistics for gated communities and Nordelta. Ask for a free quote.",
  "mudanzas-moron": "Fast service from our base in Flores. Coverage along the whole western corridor.",
  "mudanzas-la-matanza": "Coverage in Ramos Mejía, San Justo, Isidro Casanova and the whole area. Professional staff and packing.",
  "mudanzas-avellaneda": "Full service to the south. We know the access routes and the area's loading rules.",
  "mudanzas-quilmes": "Trucks of different sizes and experienced staff for the whole southern area.",
  "mudanzas-lanus": "Full coverage in Lanús Este and Oeste. Free quote for moves anywhere in the district.",
  "mudanzas-san-martin": "Coverage in Villa Maipú, Villa Lynch and the whole area. Full service with a fixed price.",
  "mudanzas-moreno": "Moves in the west with our own staff and equipment. Fixed price, no surprises.",
  "mudanzas-lomas-de-zamora": "Service to the south. Trucks of different sizes and a free quote.",
  "mudanzas-pilar": "Logistics for gated communities in the north. Prior coordination included.",
};

/** Same questions as the Spanish home page, translated. */
export const FAQ_EN = [
  { pregunta: "How far in advance should I book?", respuesta: "We recommend booking your move at least 15 to 20 days in advance. That lets us guarantee staff and trucks, especially in busy periods like the end of the month and season changes." },
  { pregunta: "Do you hoist furniture by rope?", respuesta: "Yes, we specialize in rope hoisting for large furniture that doesn't fit in the elevator or the stairs." },
  { pregunta: "Which areas do you cover?", respuesta: "We handle moves throughout the City of Buenos Aires (CABA) and Greater Buenos Aires (GBA), based in the Flores neighborhood." },
  { pregunta: "Do you offer packing?", respuesta: "Yes. Standard packing is included: furniture is protected with blankets and stretch film. We also offer an extra service where a packer comes to your home 48 hours before to pack glassware, dishes and delicate items." },
  { pregunta: "Which payment methods do you accept?", respuesta: "We accept cash, bank transfer and credit and debit cards. We also work with Mercado Pago." },
  { pregunta: "Do you move to other provinces?", respuesta: "Yes, we do long-distance moves to different parts of the country. We only do exclusive moves, not shared loads or express services." },
  { pregunta: "Do you offer furniture storage?", respuesta: "Yes, we offer safe, clean and monitored spaces to store your belongings for a short or long time." },
];
