/**
 * Central site configuration. Update business contact details here and they
 * change everywhere on the website (header, footer, forms, WhatsApp button).
 */
export const siteConfig = {
  name: "Tejomay by V",
  tagline: "Creative diyas for every celebration",
  description:
    "Tejomay by V brings you thoughtfully chosen creative diyas that add warmth to your home and a festive glow to every celebration.",
  /** Set NEXT_PUBLIC_SITE_URL to your live domain (e.g. https://www.example.com) before deploying. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "tejomaybyv@gmail.com",
  phone: {
    display: "+91 96048 09708",
    tel: "+919604809708",
  },
  /** WhatsApp number in international format, digits only (no "+" or spaces). */
  whatsappNumber: "919604809708",
  instagram: {
    handle: "@tejomaybyv",
    url: "https://www.instagram.com/tejomaybyv?psln=amcxaXpuOThxM3Bq&utm_source=qr",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

/** Builds a wa.me link that opens a chat with the business, pre-filled with `message`. */
export function buildWhatsAppUrl(message: string): string {
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}
