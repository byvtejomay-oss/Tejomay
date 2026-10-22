/** Shared validation helpers for the enquiry and contact forms. */

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export function validateName(value: string): string | undefined {
  const name = value.trim();
  if (!name) return "Please enter your full name.";
  if (name.length < 2) return "Please enter at least 2 characters.";
  return undefined;
}

/** Accepts Indian mobile numbers with an optional +91 / 0 prefix, spaces or dashes. */
export function validatePhone(value: string): string | undefined {
  const raw = value.trim();
  if (!raw) return "Please enter your phone number.";
  if (/[^\d\s()+-]/.test(raw)) return "Phone number can only contain digits, spaces, + or -.";
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  if (!/^[6-9]\d{9}$/.test(digits)) return "Please enter a valid 10-digit mobile number.";
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  const email = value.trim();
  if (!email) return undefined; // optional
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "Please enter a valid email address.";
  return undefined;
}

export function validateMessage(value: string): string | undefined {
  const message = value.trim();
  if (!message) return "Please enter a message.";
  if (message.length < 10) return "Please write a little more (at least 10 characters).";
  return undefined;
}

export function hasErrors<T extends string>(errors: FieldErrors<T>): boolean {
  return Object.values(errors).some(Boolean);
}
