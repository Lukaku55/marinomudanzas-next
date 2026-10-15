import type { MetadataRoute } from "next";
import { EMPRESA, PUBLICAR } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return PUBLICAR
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${EMPRESA.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
