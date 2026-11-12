"use client";

import { useEffect } from "react";
import { GADS } from "@/app/lib/site";

// Sends a Google Ads conversion when someone taps a Call or WhatsApp link.
// Only active once NEXT_PUBLIC_GADS_CONTACT_LABEL is set (create a "Contact click" conversion in Google Ads first).
export default function ContactTracker() {
  useEffect(() => {
    if (!GADS.contactLabel) return;
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:") || href.includes("wa.me/")) {
        window.gtag?.("event", "conversion", { send_to: `${GADS.id}/${GADS.contactLabel}` });
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
