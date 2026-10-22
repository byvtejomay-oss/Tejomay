"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/site";

/**
 * The site has no backend, so enquiries are handed to WhatsApp as a pre-filled
 * message. The customer still has to press Send inside WhatsApp — this hook only
 * tracks whether the chat was opened, never whether a message was delivered.
 */
export type HandoffStatus = "idle" | "opening" | "opened" | "blocked";

const LOCK_MS = 2000;

export function useWhatsAppHandoff() {
  const [status, setStatus] = useState<HandoffStatus>("idle");
  const [url, setUrl] = useState<string>("");
  const lockRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const send = useCallback((message: string) => {
    if (lockRef.current) return;
    lockRef.current = true;

    const chatUrl = buildWhatsAppUrl(message);
    setUrl(chatUrl);

    // Must run synchronously inside the submit event so browsers allow the new tab.
    const win = window.open(chatUrl, "_blank");
    if (!win) {
      lockRef.current = false;
      setStatus("blocked");
      return;
    }
    win.opener = null;
    setStatus("opening");

    // Keep the button disabled briefly so a double tap can't open two chats.
    timerRef.current = setTimeout(() => {
      lockRef.current = false;
      setStatus("opened");
    }, LOCK_MS);
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    lockRef.current = false;
    setStatus("idle");
    setUrl("");
  }, []);

  return { status, url, send, reset, isBusy: status === "opening" };
}
