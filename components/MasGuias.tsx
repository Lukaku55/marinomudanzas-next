import Link from "next/link";
import { MAS_GUIAS } from "@/content/mas-guias";

export default function MasGuias() {
  return (
    <section className="container mx-auto mt-16 max-w-4xl px-4" aria-labelledby="mas-guias">
      <h2 id="mas-guias" className="font-display text-2xl font-bold text-foreground">Más guías</h2>
      <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {MAS_GUIAS.map((g) => (
          <li key={g.slug} className="border-b border-border">
            <Link href={`/blog/${g.slug}`} className="flex min-h-[52px] items-center py-3 font-body font-medium text-foreground hover:underline">{g.titulo}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
