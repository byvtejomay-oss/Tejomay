import type { Metadata } from "next";
import Image from "next/image";
import { HandHeart, Heart, Sparkles, Sun } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Tejomay by V — a celebration of light, creativity, tradition and the happiness found in little things.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tejomay by V",
    description: "The story behind every little light at Tejomay by V.",
    url: "/about",
  },
};

const meanings = [
  {
    icon: Sun,
    title: "Hope",
    text: "A single flame gently pushes back the dark — a quiet promise that brighter days are near.",
  },
  {
    icon: Heart,
    title: "Warmth",
    text: "The soft glow of a diya turns any corner into a place that feels welcoming and loved.",
  },
  {
    icon: HandHeart,
    title: "Togetherness",
    text: "Lighting diyas is a moment we share — with family, with friends, and with the ones we celebrate.",
  },
  {
    icon: Sparkles,
    title: "New Beginnings",
    text: "Every festival begins with a light, marking a fresh start filled with joy and good wishes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="The Story Behind Every Little Light."
        intro="Every little flame carries a beautiful feeling."
      />

      <section className="section" aria-labelledby="intro-title">
        <div className="container split split-reverse">
          <div className="split-copy prose-story">
            <h2 id="intro-title" className="section-title">
              A Celebration of Light
            </h2>
            <div className="gold-rule" aria-hidden="true" />
            <p className="lead">
              At Tejomay by V, we celebrate the timeless beauty of diyas and the emotions they bring
              into our lives. A glowing diya reminds us of hope, happiness, togetherness, and the
              beauty of new beginnings.
            </p>
            <p>
              We believe that festive decorations should do more than make a home look beautiful.
              They should make it feel warm, welcoming, and full of memories. Whether you are
              preparing your home for a festival, choosing a thoughtful gift, or adding a special
              touch to your favourite corner, we want our creative diya collection to become part of
              your meaningful moments.
            </p>
            <p>
              Tejomay by V is a celebration of light, creativity, tradition, and the happiness found
              in little things. We hope our diyas bring a beautiful glow to your home and become a
              small part of your biggest celebrations.
            </p>
          </div>
          <div className="split-media">
            <div className="frame frame-tall frame-arch">
              <Image
                src="/images/products/pink-kundan-tealight-diya.jpg"
                alt="A lit pink kundan diya glowing among green leaves"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 460px, 90vw"
                className="cover-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="meaning-title">
        <div className="container">
          <SectionHeading
            id="meaning-title"
            eyebrow="The Meaning of Light"
            title="What a Little Flame Holds"
            intro="For generations, the diya has been lit to welcome good things into our homes. Here is what that little flame means to us."
          />
          <ul className="meaning-grid">
            {meanings.map(({ icon: Icon, title, text }) => (
              <li key={title} className="meaning-card">
                <span className="meaning-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="meaning-title">{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading id="gallery-title" eyebrow="From Our Collection" title="Little Details, Lovingly Chosen" />
          <ul className="gallery">
            {products.map((product) => (
              <li key={product.id} className="gallery-item">
                <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 768px) 25vw, 50vw" className="cover-img" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA
        title="Find a Diya for Your Next Celebration."
        text="Explore the collection, or write to us — we would love to help you choose."
        primary={{ href: "/products", label: "Explore Products" }}
        secondary={{ href: "/contact", label: "Contact Us" }}
      />
    </>
  );
}
