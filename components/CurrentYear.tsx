"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Reads the year on the client only, so the prerendered page never bakes in the
 * build date (Cache Components forbids `new Date()` during prerender).
 */
export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year}</>;
}
