export interface Servicio {
  slug: string;
  nombre: string;
  /** Ruta de la página del servicio, o de la guía del blog que lo explica. */
  href: string;
}

export const SERVICIOS = {
  residencial: { slug: "residencial", nombre: "Mudanzas Residenciales", href: "/mudanzas-residenciales" },
  oficinas: { slug: "oficinas", nombre: "Mudanzas de Oficinas", href: "/mudanzas-oficinas" },
  guardamuebles: { slug: "guardamuebles", nombre: "Guardamuebles", href: "/guardamuebles" },
  interior: { slug: "interior", nombre: "Mudanzas al Interior", href: "/mudanzas-interior" },
  soga: { slug: "soga", nombre: "Mudanzas por soga", href: "/blog/mudanzas-por-soga" },
} satisfies Record<string, Servicio>;

export type ClaveServicio = keyof typeof SERVICIOS;
