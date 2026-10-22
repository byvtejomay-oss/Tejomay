import { CircleAlert, Info } from "lucide-react";
import type { HandoffStatus } from "@/lib/useWhatsAppHandoff";

/**
 * Explains the WhatsApp hand-off honestly: opening WhatsApp is not the same as
 * sending the enquiry, so the customer is asked to press Send there.
 */
export function EnquiryStatus({ status, url }: { status: HandoffStatus; url: string }) {
  if (status === "idle") return null;

  if (status === "blocked") {
    return (
      <div className="notice notice-warning" role="alert">
        <CircleAlert size={20} aria-hidden="true" className="notice-icon" />
        <div>
          <p className="notice-title">WhatsApp could not open automatically.</p>
          <p>
            Your browser may have blocked the new tab.{" "}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">
              Open WhatsApp with your message
            </a>{" "}
            and press <strong>Send</strong> to share your enquiry with us.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="notice" role="status" aria-live="polite">
      <Info size={20} aria-hidden="true" className="notice-icon" />
      <div>
        <p className="notice-title">One last step — press Send in WhatsApp.</p>
        <p>
          WhatsApp has been opened with your message filled in. Your enquiry reaches us only once
          you press <strong>Send</strong> there.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">
            Didn&apos;t open? Try again
          </a>
          .
        </p>
      </div>
    </div>
  );
}
