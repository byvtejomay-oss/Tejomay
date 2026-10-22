import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import ContactCTA from "@/components/ContactCTA";
import SectionHeading from "@/components/SectionHeading";
import { featuredProducts } from "@/data/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <SectionHeading
            id="featured-title"
            eyebrow="Featured Collection"
            title="Diyas Made to Shine"
            intro="A glimpse of our creative diyas — each one finished with pearls, gold beads and little sparkling details."
          />
          <ProductGrid products={featuredProducts} variant="showcase" />
          <div className="btn-row btn-row-center section-actions">
            <Link href="/products" className="btn btn-primary">
              View All Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
