import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "../lib/site";

export const metadata: Metadata = { title: "Privacy Policy | VLCC School of Beauty Alambagh" };

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 leading-relaxed">
      <Link href="/" className="text-sm font-semibold text-navy underline">← Back</Link>
      <h1 className="mt-4 font-heading text-3xl font-bold text-navy">Privacy Policy</h1>
      <p className="mt-4">
        This page explains how {SITE.brand}, {SITE.centre}, uses the details you share on this website.
      </p>
      <h2 className="mt-8 font-heading text-xl font-semibold text-navy">What we collect</h2>
      <p className="mt-2">Your name, mobile number and the course you are interested in, when you fill the enquiry form.</p>
      <h2 className="mt-8 font-heading text-xl font-semibold text-navy">How we use it</h2>
      <p className="mt-2">
        Only to call or message you about our courses, fees, batches and admission. We do not sell or share your details with
        anyone outside our centre.
      </p>
      <h2 className="mt-8 font-heading text-xl font-semibold text-navy">Cookies and ads</h2>
      <p className="mt-2">
        We use Google Ads tags to measure which ads bring enquiries. Google may use cookies for this. You can manage ad
        settings in your Google account.
      </p>
      <h2 className="mt-8 font-heading text-xl font-semibold text-navy">Removing your details</h2>
      <p className="mt-2">
        To stop calls or remove your details, call or WhatsApp us on {SITE.phone} and we will delete them.
      </p>
      <h2 className="mt-8 font-heading text-xl font-semibold text-navy">Contact</h2>
      <p className="mt-2">
        {SITE.brand}, {SITE.address}. Phone: {SITE.phone}
      </p>
    </main>
  );
}
