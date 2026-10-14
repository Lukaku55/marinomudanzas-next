/** Idiomas del sitio. El español es el principal; el inglés cubre la portada. */
export type Idioma = "es" | "en";

export const idiomaDeRuta = (ruta: string | null | undefined): Idioma =>
  ruta === "/en" || ruta?.startsWith("/en/") || ruta?.startsWith("/en#") ? "en" : "es";

/** Dirección de la portada en cada idioma. */
export const portada = (idioma: Idioma) => (idioma === "en" ? "/en" : "/");

/** Enlace a una sección de la portada, por ejemplo seccion("en", "presupuesto") → "/en#presupuesto". */
export const seccion = (idioma: Idioma, id: string) => `${idioma === "en" ? "/en" : "/"}#${id}`;

/** Alternativas por idioma para Google (hreflang). */
export const ALTERNATIVAS = { "es-AR": "/", en: "/en", "x-default": "/" };
