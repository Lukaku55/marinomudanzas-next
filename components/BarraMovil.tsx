import { ClipboardText, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

/** En celular, las dos acciones principales quedan siempre a mano. */
export default function BarraMovil({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <>
      <div className="h-[76px] md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href={t.cta.href} className="btn btn-primario px-3"><ClipboardText size={20} weight="bold" aria-hidden="true" />{t.ui.presupuestoCorto}</a>
        <a href={t.whatsapp()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp px-3"><WhatsappLogo size={20} weight="fill" />WhatsApp</a>
      </div>
    </>
  );
}
