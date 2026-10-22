import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tejomay by V by phone, email, WhatsApp or Instagram for enquiries about our creative diyas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Tejomay by V",
    description: "Questions about our diyas? We'd love to hear from you.",
    url: "/contact",
  },
};

const channels = [
  {
    icon: <Phone size={22} aria-hidden="true" />,
    label: "Call us",
    value: siteConfig.phone.display,
    href: `tel:${siteConfig.phone.tel}`,
    external: false,
  },
  {
    icon: <Mail size={22} aria-hidden="true" />,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: <WhatsAppIcon size={22} />,
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappUrl,
    external: true,
  },
  {
    icon: <InstagramIcon size={22} />,
    label: "Instagram",
    value: siteConfig.instagram.handle,
    href: siteConfig.instagram.url,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Light Up Your Celebrations."
        intro="Have a question about a diya, or planning something special? Reach out — we would love to hear from you."
      />

      <section className="section section-tight-top">
        <div className="container contact-grid">
          <aside className="contact-info" aria-labelledby="contact-info-title">
            <h2 id="contact-info-title" className="card-title">
              Reach us directly
            </h2>
            <p className="muted">Choose whichever is easiest for you.</p>
            <ul className="channel-list">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className="channel"
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="channel-icon">{channel.icon}</span>
                    <span>
                      <span className="channel-label">{channel.label}</span>
                      <span className="channel-value">{channel.value}</span>
                    </span>
                    {channel.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="contact-form-card">
            <h2 id="contact-form-title" className="card-title">
              Send us a message
            </h2>
            <p className="muted">Fields marked * are required.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
