import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import CurrentYear from "@/components/CurrentYear";
import { navLinks, siteConfig, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label={`${siteConfig.name} — Home`} className="footer-logo">
            <Image
              src="/images/tejomay-logo-light.png"
              alt={siteConfig.name}
              width={968}
              height={402}
              sizes="170px"
            />
          </Link>
          <p>
            Creative diyas chosen to bring warmth to your home, beauty to your celebrations and a
            little extra magic to every festive moment.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Get in touch</h2>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="footer-link footer-contact">
                <Mail size={18} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.tel}`} className="footer-link footer-contact">
                <Phone size={18} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="footer-link footer-contact">
                <InstagramIcon size={18} />
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-link footer-contact">
                <WhatsAppIcon size={18} />
                WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; <CurrentYear /> {siteConfig.name}. All rights reserved.
        </p>
        <p className="footer-motto">Made with love, lit with light.</p>
      </div>
    </footer>
  );
}
