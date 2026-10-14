import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Artículos traídos tal cual del sitio actual; el layout sí se revisa.
    "app/blog/*/**",
    "app/blog/page.tsx",
    "app/(paginas)/*/**",
    "components/InventarioForm.tsx",
  ]),
]);

export default eslintConfig;
