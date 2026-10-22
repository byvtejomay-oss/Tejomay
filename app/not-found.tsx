import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function NotFound() {
  return (
    <section className="section page-hero">
      <div className="container">
        <SectionHeading
          as="h1"
          eyebrow="Page not found"
          title="This Light Seems to Have Wandered Off."
          intro="The page you are looking for doesn't exist. Let's take you back somewhere bright."
        />
        <div className="btn-row btn-row-center">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-outline">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
