// Datos del negocio. Cambiar algo acá (teléfonos, horarios, reseñas…) lo
// actualiza en todo el sitio: header, footer, botones, schema.org y el asistente.

export const NEGOCIO = {
  nombre: "Marino Mudanzas",
  url: "https://www.mudanzasmarino.com.ar",
  fundacion: 1950,
  telefonos: [
    { visible: "4611-1818", e164: "+541146111818" },
    { visible: "4613-1818", e164: "+541146131818" },
    { visible: "4637-1818", e164: "+541146371818" },
  ],
  whatsapp: { numero: "5491154507435", visible: "11-5450-7435" },
  instagram: { usuario: "marino_mudanzas", url: "https://www.instagram.com/marino_mudanzas" },
  direccion: {
    calle: "Av. Juan Bautista Alberdi 2968",
    barrio: "Flores",
    region: "Ciudad Autónoma de Buenos Aires",
    codigoPostal: "C1407",
    pais: "AR",
  },
  geo: { lat: -34.6346, lng: -58.4685 },
  /** Horario de atención (hora de Buenos Aires). 0 = domingo. */
  horario: { dias: [1, 2, 3, 4, 5, 6] as number[], abre: 8, cierra: 18 },
  zonaHoraria: "America/Argentina/Buenos_Aires",
  stats: {
    anios: 80,
    mudanzas: 150000,
    rating: 4.7,
    resenas: 370,
  },
  /** Días de anticipación que recomendamos para coordinar (ver FAQ). */
  anticipacionRecomendada: 15,
} as const;

export const TELEFONO = NEGOCIO.telefonos[0];
export const TEL_HREF = `tel:${TELEFONO.e164}`;

export const MENSAJE_WHATSAPP_DEFAULT = "Hola, quiero cotizar una mudanza";

export function whatsappUrl(mensaje: string = MENSAJE_WHATSAPP_DEFAULT): string {
  return `https://wa.me/${NEGOCIO.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

export function absUrl(path = "/"): string {
  return path === "/" ? NEGOCIO.url : `${NEGOCIO.url}${path}`;
}
