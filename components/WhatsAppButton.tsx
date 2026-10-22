import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with Tejomay by V on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
