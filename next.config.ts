import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Oculta el botón redondo "N" de Next que aparece solo mientras se desarrolla.
  devIndicators: false,
  // Las fotos se sirven en AVIF (o WebP si el navegador no lo soporta) y al ancho justo.
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 2678400 },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
