import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511992049001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-[0_8px_32px_rgba(255,106,26,0.3)] hover:scale-110 hover:shadow-[0_12px_48px_rgba(255,106,26,0.4)] transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;
