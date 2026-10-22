"use client";

import { LoaderCircle } from "lucide-react";
import { FormField } from "@/components/FormField";
import { EnquiryStatus } from "@/components/EnquiryStatus";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { useValidatedForm } from "@/lib/useValidatedForm";
import { useWhatsAppHandoff } from "@/lib/useWhatsAppHandoff";
import { validateEmail, validateMessage, validateName, validatePhone } from "@/lib/validation";

type Values = { fullName: string; phone: string; email: string; subject: string; message: string };

const validate = (values: Values) => ({
  fullName: validateName(values.fullName),
  phone: validatePhone(values.phone),
  email: validateEmail(values.email),
  message: validateMessage(values.message),
});

export default function ContactForm() {
  const { status, url, send, isBusy } = useWhatsAppHandoff();
  const { values, errors, handleChange, handleSubmit } = useValidatedForm<Values>(
    { fullName: "", phone: "", email: "", subject: "", message: "" },
    validate,
  );

  const onValid = (form: Values) => {
    const lines = [
      `Hello ${siteConfig.name}! I have an enquiry from your website.`,
      "",
      `Name: ${form.fullName.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    if (form.subject.trim()) lines.push(`Subject: ${form.subject.trim()}`);
    lines.push("", form.message.trim());
    send(lines.join("\n"));
  };

  return (
    <form noValidate onSubmit={handleSubmit(onValid)} className="form-stack" aria-labelledby="contact-form-title">
      <div className="form-row">
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
      </div>
      <div className="form-row">
        <FormField
          id="email"
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormField id="subject" label="Subject" value={values.subject} onChange={handleChange} />
      </div>
      <FormField
        as="textarea"
        id="message"
        label="Message"
        required
        placeholder="Tell us what you're looking for…"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      <EnquiryStatus status={status} url={url} />

      <div>
        <button type="submit" className="btn btn-primary" disabled={isBusy} aria-disabled={isBusy}>
          {isBusy ? <LoaderCircle size={20} aria-hidden="true" className="spin" /> : <WhatsAppIcon size={20} />}
          {isBusy ? "Opening WhatsApp…" : "Send via WhatsApp"}
        </button>
        <p className="form-note">
          This form opens WhatsApp with your message ready to send — please press Send in WhatsApp to
          complete it. Prefer email? Write to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-link">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
