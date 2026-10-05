import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 w-16 h-16 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] rounded-full flex items-center justify-center shadow-2xl transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
      style={{ animation: "fade-up 0.8s 1.2s var(--ease-out-expo) both" }}
      aria-label="Contactar por WhatsApp"
    >
      {/* Expanding pulse rings */}
      <span aria-hidden className="absolute inset-0 rounded-full bg-[hsl(142,70%,40%)] animate-ping-ring" />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[hsl(142,70%,40%)] animate-ping-ring"
        style={{ animationDelay: "1.2s" }}
      />
      <MessageCircle className="relative w-8 h-8 text-primary-foreground transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
    </a>
  );
};

export default WhatsAppButton;
