import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511992049001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#FF731D] text-white p-4 rounded-full shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;
