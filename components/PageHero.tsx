import SectionHeading from "@/components/SectionHeading";

/** Compact hero banner used at the top of inner pages. Contains the page's H1. */
export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}
