// Guías del blog que el asistente puede recomendar. Solo incluir artículos ya
// publicados (los que figuran en app/sitemap.ts). La lista completa del blog la
// maneja app/blog/page.tsx, que se actualiza sola cada lunes (GitHub Action).

export const GUIAS = {
  "como-calcular-volumen-mudanza": "Cómo calcular el volumen de tu mudanza",
  "mudanzas-con-y-sin-ascensor": "Mudanzas con y sin ascensor",
  "mudanzas-por-soga": "Mudanzas por soga: cuándo hacen falta",
  "mudanzas-edificios-buenos-aires": "Mudanzas en edificios: lo que tenés que saber",
  "mudanzas-fin-de-mes": "Mudanzas a fin de mes",
  "checklist-mudanza": "Checklist para tu mudanza",
  "guardamuebles-buenos-aires": "Guardamuebles en Buenos Aires",
  "mudanzas-larga-distancia-argentina": "Mudanzas de larga distancia en Argentina",
  "mudanzas-oficinas-buenos-aires": "Mudanzas de oficinas en Buenos Aires",
  "mudanzas-2-ambientes-buenos-aires": "Mudanzas de 2 ambientes en Buenos Aires",
  "mudanzas-3-ambientes-buenos-aires": "Mudanzas de 3 ambientes en Buenos Aires",
  "como-embalar-muebles-mudanza": "Cómo embalar muebles para una mudanza",
  "como-preparar-electrodomesticos-mudanza": "Cómo preparar los electrodomésticos",
  "que-incluye-una-mudanza": "Qué incluye una mudanza",
} as const;

export type SlugGuia = keyof typeof GUIAS;

export interface Guia {
  slug: SlugGuia;
  titulo: string;
  href: string;
}

export function guia(slug: SlugGuia): Guia {
  return { slug, titulo: GUIAS[slug], href: `/blog/${slug}` };
}
