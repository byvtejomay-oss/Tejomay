import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiyaOrnament } from "@/components/icons";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <DiyaOrnament size={22} className="eyebrow-ornament" />
            Creative diyas by Tejomay
          </p>
          <h1 id="hero-title" className="display-title">
            Bring Home the <em>Beauty of Light.</em>
          </h1>
          <p className="hero-text">
            Thoughtfully chosen creative diyas to bring warmth to your home, beauty to your
            celebrations, and a little extra magic to every festive moment.
          </p>
          <div className="btn-row">
            <Link href="/products" className="btn btn-primary">
              Explore Our Collection
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-arch">
            <Image
              src="/images/products/pink-kundan-tealight-diya.jpg"
              alt="A lit pink diya decorated with pearls, gold beads and kundan stones, framed by green leaves"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 440px, (min-width: 768px) 50vw, 80vw"
              className="cover-img"
            />
          </div>
          <div className="hero-medallion">
            <Image
              src="/images/products/pink-lotus-kundan-diya.jpg"
              alt="Rose-pink lotus diya with gold beadwork"
              fill
              sizes="180px"
              className="cover-img"
            />
          </div>
          <p className="hero-caption" aria-hidden="true">
            Handpicked for festive moments
          </p>
        </div>
      </div>
    </section>
  );
}
