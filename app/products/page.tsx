import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import ContactCTA from "@/components/ContactCTA";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Creative Diya Collection",
  description:
    "Browse the Tejomay by V collection of creative diyas — decorated with pearls, gold beads and kundan stones — and send an enquiry in a click.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Our Creative Diya Collection | Tejomay by V",
    description: "Creative diyas that bring warmth, colour and a special glow to your festive moments.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title="Our Creative Diya Collection"
        intro="Discover beautiful diyas that bring warmth, colour, and a special glow to your festive moments."
      />

      <section className="section section-tight-top" aria-label="Products">
        <div className="container">
          <p className="info-strip">
            <MessageCircle size={20} aria-hidden="true" />
            <span>
              Tap <strong>Buy Now</strong> on any diya to send us an enquiry on WhatsApp — we&apos;ll
              reply with availability and details.
            </span>
          </p>
          <ProductGrid products={products} variant="shop" />
        </div>
      </section>

      <ContactCTA
        title="Looking for Something Great?"
        text="Planning a celebration or a festive gift? Get in touch and we'll help you find the right diyas."
        primary={{ href: "/contact", label: "Contact Us" }}
        secondary={{ href: "/about", label: "Our Story" }}
      />
    </>
  );
}
