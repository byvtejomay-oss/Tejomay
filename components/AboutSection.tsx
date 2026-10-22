import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Homepage preview of the brand story. */
export default function AboutSection() {
  return (
    <section className="section section-soft" aria-labelledby="about-preview-title">
      <div className="container split">
        <div className="split-media">
          <div className="frame frame-tall">
            <Image
              src="/images/products/pink-lotus-kundan-diya.jpg"
              alt="Close-up of a rose-pink lotus diya with layered petals, kundan stones and a pearl rim"
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="cover-img"
            />
          </div>
          <div className="frame frame-inset" aria-hidden="true">
            <Image src="/images/products/red-pearl-wax-diya-set.jpg" alt="" fill sizes="200px" className="cover-img" />
          </div>
        </div>

        <div className="split-copy">
          <p className="eyebrow">About Tejomay</p>
          <h2 id="about-preview-title" className="section-title">
            A Little Light, A Lot of Love.
          </h2>
          <div className="gold-rule" aria-hidden="true" />
          <p className="lead">
            At Tejomay by V, we believe that a diya is more than a beautiful decoration. It
            represents hope, warmth, togetherness, and new beginnings. Our creative diya collection
            is inspired by the beauty of Indian traditions and the little details that make every
            celebration special.
          </p>
          <Link href="/about" className="btn btn-primary">
            Discover Our Story
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
