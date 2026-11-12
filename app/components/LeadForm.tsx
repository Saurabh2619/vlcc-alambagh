"use client";

import { useRef, useState } from "react";
import { COURSES, GADS, SITE, type CourseKey } from "@/app/lib/site";
import { WhatsAppIcon } from "./Icons";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_RE = /^[6-9]\d{9}$/;
// Obvious fake numbers like 9999999999 or 9876543210
const FAKE_RE = /^(\d)\1{9}$|^9876543210$|^1234567890$/;

function cleanPhone(v: string) {
  const digits = v.replace(/\D/g, "");
  return digits.length > 10 ? digits.slice(-10) : digits;
}

export default function LeadForm({ course, id = "lead-form" }: { course: CourseKey; id?: string }) {
  const startedAt = useRef<number>(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  function markStart() {
    if (!startedAt.current) startedAt.current = Date.now();
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = cleanPhone(String(form.get("phone") || ""));
    const selected = String(form.get("course") || course);

    if (name.length < 2) return setError("Please enter your name.");
    if (!PHONE_RE.test(phone) || FAKE_RE.test(phone)) return setError("Please enter a valid 10 digit mobile number.");
    setError("");
    setStatus("sending");

    const params = new URLSearchParams(window.location.search);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          course: selected,
          website: String(form.get("website") || ""), // honeypot, must stay empty
          elapsed: startedAt.current ? Date.now() - startedAt.current : 0,
          page: window.location.pathname,
          gclid: params.get("gclid") || "",
          keyword: params.get("utm_term") || params.get("keyword") || "",
          utm_source: params.get("utm_source") || "",
          utm_campaign: params.get("utm_campaign") || "",
        }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
      // Enhanced conversions: Google hashes the phone number in the browser before sending it.
      window.gtag?.("set", "user_data", { phone_number: `+91${phone}` });
      window.gtag?.("event", "conversion", { send_to: `${GADS.id}/${GADS.leadLabel}` });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us or try again.");
    }
  }

  if (status === "done") {
    const msg = encodeURIComponent("Hi, I just filled the form on your website. Please share course details and fees.");
    return (
      <div role="status" className="flex flex-col gap-4 text-center">
        <p className="font-heading text-2xl font-semibold text-navy">Thank you!</p>
        <p className="text-ink-soft">Our counsellor will call you shortly (9 AM to 9 PM).</p>
        <a
          href={`https://wa.me/91${SITE.whatsapp}?text=${msg}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green px-5 font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Get details on WhatsApp now
        </a>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} onFocus={markStart} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-name`} className="text-sm font-semibold">Your name</label>
        <input
          id={`${id}-name`}
          name="name"
          autoComplete="name"
          placeholder="Full name"
          className="min-h-12 rounded-xl border border-line px-4 text-base outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-phone`} className="text-sm font-semibold">Mobile number</label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          maxLength={14}
          placeholder="10 digit mobile number"
          className="min-h-12 rounded-xl border border-line px-4 text-base outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-course`} className="text-sm font-semibold">Course</label>
        <select
          id={`${id}-course`}
          name="course"
          defaultValue={course}
          className="min-h-12 rounded-xl border border-line bg-white px-3 text-base outline-none focus:border-navy focus:ring-2 focus:ring-navy/20"
        >
          {COURSES.map((c) => (
            <option key={c.key} value={c.key}>{c.name}</option>
          ))}
          <option value="brand">Not sure yet</option>
        </select>
      </div>

      {/* Honeypot: hidden from people, bots fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-13 cursor-pointer rounded-xl bg-orange px-5 text-lg font-bold text-white transition hover:bg-orange-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get a callback"}
      </button>
      <p className="text-xs text-ink-soft">
        By submitting, you agree to our <a href="/privacy" className="underline">privacy policy</a>. We only call about courses.
      </p>
    </form>
  );
}
