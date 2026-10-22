import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";

export type ProductCardAction =
  | { kind: "link"; href: string; label: string }
  | { kind: "buy"; onBuy: (product: Product, trigger: HTMLButtonElement) => void };

type Props = {
  product: Product;
  action: ProductCardAction;
  /** Use the short one-line description (homepage) instead of the full one. */
  compact?: boolean;
};

export default function ProductCard({ product, action, compact = false }: Props) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 92vw"
          className="product-card-img"
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-text">{compact ? product.shortDescription : product.description}</p>
        {product.price !== undefined && (
          <p className="product-card-price">
            <span className="sr-only">Price: </span>
            {formatPrice(product.price)}
          </p>
        )}
        <div className="product-card-footer">
          {action.kind === "link" ? (
            <Link href={action.href} className="btn btn-outline btn-block">
              {action.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-block"
              aria-haspopup="dialog"
              onClick={(event) => action.onBuy(product, event.currentTarget)}
            >
              <ShoppingBag size={18} aria-hidden="true" />
              Buy Now
              <span className="sr-only"> — {product.name}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
