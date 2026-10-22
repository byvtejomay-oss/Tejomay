# Tejomay by V — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
```

Before deploying, set `NEXT_PUBLIC_SITE_URL` to the live domain (used for Open Graph links).

## Where to edit things

| What | File |
| --- | --- |
| Products (name, description, image, optional price, featured) | `data/products.ts` |
| Email, phone, WhatsApp number, Instagram link | `lib/site.ts` |
| Colours, fonts, spacing, component styles | `app/globals.css` |
| Logo / product photos | `public/images/`, `public/images/products/` |
| Favicon | `app/icon.png`, `app/apple-icon.png` |

The product names and descriptions are sample text written from the photos. Please replace them with
your real details. No prices are shown until you add a `price` to a product.

## Enquiries

The site has no backend. The **Buy Now** popup and the **Contact** form check the fields, then open
WhatsApp with the enquiry already typed in. The customer must press **Send** in WhatsApp, and the site
tells them so. It never says an enquiry was delivered.
