import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiyaOrnament } from "@/components/icons";

type CTALink = { href: string; label: string };

type Props = {
  title?: string;
  text?: string;
  primary?: CTALink;
  secondary?: CTALink;
};

export default function ContactCTA({
  title = "Make Your Celebrations Glow.",
  text = "Looking for a beautiful diya for your next celebration? Explore our collection and get in touch with us.",
  primary = { href: "/products", label: "Explore Products" },
  secondary = { href: "/contact", label: "Contact Us" },
}: Props) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner">
        <DiyaOrnament size={40} className="cta-ornament" />
        <h2 id="cta-title" className="section-title">
          {title}
        </h2>
        <p className="cta-text">{text}</p>
        <div className="btn-row btn-row-center">
          <Link href={primary.href} className="btn btn-gold">
            {primary.label}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href={secondary.href} className="btn btn-outline-light">
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
