import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/cerebro";

/** Botón flotante de WhatsApp. `mensaje` permite contextualizarlo por página. */
const WhatsAppButton = ({ mensaje }: { mensaje?: string }) => {
  return (
    <a
      href={whatsappUrl(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] rounded-full flex items-center justify-center shadow-2xl transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
