import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { EMPRESA } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

export default function Footer({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <footer className="on-dark bg-navy-deep text-white">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Image src={EMPRESA.logo} alt="" width={64} height={64} className="h-16 w-16 rounded-full bg-white object-contain p-1" />
            <p className="display text-[clamp(1.7rem,3.4vw,2.4rem)]">{EMPRESA.nombre}</p>
          </div>
          <p className="mt-5 max-w-[36ch] text-white/70">{t.ui.pieTexto}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={t.whatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2.5 text-white/90 hover:text-white">
              <WhatsappLogo size={24} /> <span className="link-sub">WhatsApp</span>
            </a>
            <a href={EMPRESA.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2.5 text-white/90 hover:text-white">
              <InstagramLogo size={24} /> <span className="link-sub">@{EMPRESA.instagram.usuario}</span>
            </a>
          </div>
        </div>

        <nav aria-label={t.ui.pieAccesos} className="md:col-span-3">
          <p className="font-medium text-white/60">{t.ui.pieSecciones}</p>
          <ul className="mt-3 grid">
            {[...t.nav, t.cta].map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-[40px] items-center text-white/90 hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="font-medium text-white/60">{t.ui.pieContacto}</p>
          <ul className="mt-3 grid text-white/90">
            {EMPRESA.telefonos.map((t) => (
              <li key={t.href}><a href={t.href} className="link-sub inline-flex min-h-[40px] items-center">{t.visible}</a></li>
            ))}
          </ul>
          <p className="mt-3 text-white/70">{EMPRESA.direccion}</p>
          <p className="text-white/70">{t.horario}</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1320px] px-5 py-6 text-sm text-white/60 md:px-8">
          © {EMPRESA.nombre} · {EMPRESA.direccion}
        </p>
      </div>
    </footer>
  );
}
