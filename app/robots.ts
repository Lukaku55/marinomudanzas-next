import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // No bloquear /_next/: Google necesita el CSS y JS para renderizar la página.
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.mudanzasmarino.com.ar/sitemap.xml",
    host: "https://www.mudanzasmarino.com.ar",
  };
}
