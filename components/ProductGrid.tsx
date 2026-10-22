"use client";

import { useCallback, useRef, useState } from "react";
import BuyNowModal from "@/components/BuyNowModal";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
  /**
   * "showcase" links every card to the Products page (homepage).
   * "shop" shows Buy Now buttons that open the enquiry popup.
   */
  variant?: "showcase" | "shop";
};

export default function ProductGrid({ products, variant = "shop" }: Props) {
  const [selected, setSelected] = useState<Product | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openModal = useCallback((product: Product, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(product);
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
    // Return keyboard focus to the Buy Now button that opened the popup.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  if (products.length === 0) {
    return <p className="empty-state">New diyas are on their way — please check back soon.</p>;
  }

  return (
    <>
      <ul className={`product-grid${variant === "showcase" ? " product-grid-featured" : ""}`}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              compact={variant === "showcase"}
              action={
                variant === "showcase"
                  ? { kind: "link", href: "/products", label: "View Product" }
                  : { kind: "buy", onBuy: openModal }
              }
            />
          </li>
        ))}
      </ul>
      {selected && <BuyNowModal key={selected.id} product={selected} onClose={closeModal} />}
    </>
  );
}
