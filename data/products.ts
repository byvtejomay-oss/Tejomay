/**
 * Product catalogue for Tejomay by V.
 *
 * ─── HOW TO EDIT ────────────────────────────────────────────────────────────
 * • The names and descriptions below are EDITABLE SAMPLE TEXT written from the
 *   supplied product photographs. Replace them with your own product details.
 * • No prices have been supplied, so `price` is left out. Add a price (in ₹,
 *   as a number, e.g. `price: 349`) and it will appear on the product card.
 *   Leave it out and the card simply shows the enquiry button.
 * • To add a product: put its photo in `public/images/products/`, then copy one
 *   of the objects below, give it a unique `id`, and update the fields.
 * • Set `featured: true` to show a product in the homepage "Featured" section.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type Product = {
  /** Unique, URL-friendly identifier. */
  id: string;
  name: string;
  /** One-line summary used on homepage cards. */
  shortDescription: string;
  /** Fuller description used on the Products page. */
  description: string;
  /** Path under /public, e.g. "/images/products/my-diya.jpg". */
  image: string;
  /** Describes the photo for screen-reader users. */
  imageAlt: string;
  /** Price in Indian Rupees. Optional — omit if not yet decided. */
  price?: number;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "lotus-bloom-kundan-diya",
    name: "Lotus Bloom Kundan Diya",
    shortDescription: "A rose-pink lotus diya with gold beadwork and kundan stones.",
    description:
      "A lotus-shaped diya in soft rose pink. Each petal is edged in gold beadwork and set with kundan stones, and the bowl is finished with a delicate pearl-lined rim.",
    image: "/images/products/pink-lotus-kundan-diya.jpg",
    imageAlt:
      "Rose-pink lotus-shaped diya with layered petals edged in gold beads and kundan stones, and a pearl-lined rim",
    featured: true,
  },
  {
    id: "rose-kundan-tealight-diya",
    name: "Rose Kundan Tealight Diya",
    shortDescription: "A pink tealight diya framed in pearls, gold beads and kundan.",
    description:
      "A pink diya that cradles a tealight, framed with rows of pearls, gold beads and teardrop kundan stones for a rich, jewel-like glow.",
    image: "/images/products/pink-kundan-tealight-diya.jpg",
    imageAlt:
      "Lit pink tealight diya decorated with pearls, gold beads and teardrop kundan stones, surrounded by green leaves",
    featured: true,
  },
  {
    id: "scarlet-pearl-wax-diyas",
    name: "Scarlet Pearl Wax Diyas",
    shortDescription: "Bright red wax-filled diyas with a pearl and gold-bead border.",
    description:
      "Bright scarlet diyas filled with red wax and ready to light. Each one has a scalloped edge and a border of pearls and gold beads.",
    image: "/images/products/red-pearl-wax-diya-set.jpg",
    imageAlt:
      "Five bright red wax-filled diyas with scalloped edges and pearl and gold-bead borders, arranged in a circle",
    featured: true,
  },
  {
    id: "ivory-glow-stone-diyas",
    name: "Ivory Glow Stone Diyas",
    shortDescription: "Red diyas with ivory wax and a sparkling ring of stones.",
    description:
      "Red diyas filled with ivory-white wax, each finished with a sparkling ring of stones around the rim. A classic red-and-white look for festive decor.",
    image: "/images/products/red-kundan-wax-diya-set.jpg",
    imageAlt:
      "Six red diyas filled with ivory-white wax, each rimmed with a ring of sparkling stones",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(price: number): string {
  return priceFormatter.format(price);
}
