"use client";

import { useEffect, useRef, type MouseEvent, type PointerEvent } from "react";
import { LoaderCircle, X } from "lucide-react";
import { FormField } from "@/components/FormField";
import { EnquiryStatus } from "@/components/EnquiryStatus";
import { WhatsAppIcon } from "@/components/icons";
import type { Product } from "@/data/products";
import { siteConfig } from "@/lib/site";
import { useValidatedForm } from "@/lib/useValidatedForm";
import { useWhatsAppHandoff } from "@/lib/useWhatsAppHandoff";
import { validateMessage, validateName, validatePhone } from "@/lib/validation";

type Values = { fullName: string; phone: string; message: string };

const validate = (values: Values) => ({
  fullName: validateName(values.fullName),
  phone: validatePhone(values.phone),
  message: validateMessage(values.message),
});

type Props = {
  product: Product;
  onClose: () => void;
};

/**
 * Enquiry popup for a single product. Mount it with `key={product.id}` so the
 * form resets for each product. Uses a native <dialog> for focus trapping.
 */
export default function BuyNowModal({ product, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerDownOnBackdrop = useRef(false);
  const { status, url, send, isBusy } = useWhatsAppHandoff();
  const { values, errors, handleChange, handleSubmit } = useValidatedForm<Values>(
    {
      fullName: "",
      phone: "",
      message: `Hello, I am interested in ${product.name}. Please share more details.`,
    },
    validate,
  );

  // Open as a modal and lock background scrolling while mounted.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    dialog?.querySelector<HTMLInputElement>("#fullName")?.focus();

    const root = document.documentElement;
    const scrollbar = window.innerWidth - root.clientWidth;
    const previous = { overflow: root.style.overflow, paddingRight: root.style.paddingRight };
    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

    return () => {
      root.style.overflow = previous.overflow;
      root.style.paddingRight = previous.paddingRight;
      if (dialog?.open) dialog.close();
    };
  }, []);

  // Close only when a click both starts and ends on the backdrop.
  const onPointerDown = (event: PointerEvent<HTMLDialogElement>) => {
    pointerDownOnBackdrop.current = event.target === event.currentTarget;
  };
  const onBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (pointerDownOnBackdrop.current && event.target === event.currentTarget) onClose();
    pointerDownOnBackdrop.current = false;
  };

  const onValid = (form: Values) => {
    send(
      [
        `Hello ${siteConfig.name}! I have a product enquiry from your website.`,
        "",
        `Product: ${product.name}`,
        `Name: ${form.fullName.trim()}`,
        `Phone: ${form.phone.trim()}`,
        "",
        form.message.trim(),
      ].join("\n"),
    );
  };

  const titleId = `buy-now-title-${product.id}`;

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onPointerDown={onPointerDown}
      onClick={onBackdropClick}
    >
      <div className="modal-panel">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close enquiry form">
          <X size={22} aria-hidden="true" />
        </button>

        <p className="eyebrow">Product enquiry</p>
        <h2 id={titleId} className="modal-title">
          {product.name}
        </h2>
        <p className="modal-intro">
          Share your details and we&apos;ll get back to you with availability and more information.
        </p>

        <form noValidate onSubmit={handleSubmit(onValid)} className="form-stack">
          <FormField
            id="fullName"
            label="Full Name"
            required
            autoComplete="name"
            value={values.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <FormField
            id="phone"
            label="Phone Number"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 98765 43210"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <FormField
            as="textarea"
            id="message"
            label="Message"
            required
            rows={4}
            value={values.message}
            onChange={handleChange}
            error={errors.message}
          />

          <EnquiryStatus status={status} url={url} />

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary" disabled={isBusy} aria-disabled={isBusy}>
              {isBusy ? (
                <LoaderCircle size={20} aria-hidden="true" className="spin" />
              ) : (
                <WhatsAppIcon size={20} />
              )}
              {isBusy ? "Opening WhatsApp…" : "Submit Enquiry"}
            </button>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Close
            </button>
          </div>
          <p className="form-note">
            Submitting opens WhatsApp with your enquiry ready to send. Please press Send in WhatsApp
            to complete it.
          </p>
        </form>
      </div>
    </dialog>
  );
}
