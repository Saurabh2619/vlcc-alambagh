import Image from "next/image";
import { COURSES, FAQS, HERO, SITE, type CourseKey } from "@/app/lib/site";
import LeadForm from "./LeadForm";
import {
  AwardIcon,
  CheckIcon,
  ClockIcon,
  COURSE_ART,
  HandsIcon,
  PhoneIcon,
  PinIcon,
  UsersIcon,
  WhatsAppIcon,
} from "./Icons";

const TRUST = [
  { icon: AwardIcon, h: "Certified course", d: "Certificate on completion" },
  { icon: HandsIcon, h: "Hands-on practice", d: "Learn on real models" },
  { icon: UsersIcon, h: "Small batches", d: "Personal attention" },
  { icon: PinIcon, h: "Alambagh centre", d: "Opposite Phoenix Mall" },
];

const WHY = [
  "Trained faculty from the VLCC network",
  "Most class time spent on practicals, not theory",
  "Beginners welcome, no experience needed",
  "Easy to reach in Alambagh, opposite Phoenix Mall",
];

export default function Landing({ course }: { course: CourseKey }) {
  const hero = HERO[course];
  const heroArtKey = course === "brand" ? "makeup" : course;
  const HeroArt = COURSE_ART[heroArtKey];
  const ordered = [...COURSES].sort((a, b) => (a.key === course ? -1 : b.key === course ? 1 : 0));

  return (
    <div className="flex min-h-full flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" aria-label="VLCC School of Beauty, Alambagh Lucknow" className="shrink-0">
            <Image src="/vlcc-logo-lko.webp" alt="VLCC School of Beauty, Alambagh Lucknow" width={200} height={83} priority className="h-12 w-auto md:h-14" />
          </a>
          <a
            href={`tel:+91${SITE.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange px-4 font-semibold text-white hover:bg-orange-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="hidden sm:inline">Call</span> {SITE.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        {hero.image ? (
          <section className="relative isolate overflow-hidden bg-ink">
            <Image src={hero.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-[1.15fr_1fr] md:py-20">
              <div className="flex flex-col gap-5 text-white">
                <span className="self-start rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold backdrop-blur">
                  {SITE.centre} · Opposite Phoenix Mall
                </span>
                <h1 className="font-heading text-3xl leading-tight font-bold md:text-5xl">{hero.h1}</h1>
                <p className="text-lg leading-relaxed text-white/90">{hero.sub}</p>
                <ul className="flex flex-col gap-2.5">
                  {["Practical training on real models", "Certificate on completion", "Weekday and weekend batches"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-medium">
                      <CheckIcon className="h-5 w-5 shrink-0 text-orange-light" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-[0_12px_32px_rgba(0,0,0,0.25)] md:p-7">
                <h2 className="font-heading text-xl font-semibold text-navy">Get course details and fees</h2>
                <p className="mt-1 mb-5 text-sm text-ink-soft">Our counsellor will call you back, 9 AM to 9 PM.</p>
                <LeadForm course={course} />
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-cream">
            <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-10 md:grid-cols-[1.15fr_1fr] md:py-16">
              <div className="flex flex-col gap-5">
                <span className="self-start rounded-full bg-navy-soft px-3 py-1.5 text-sm font-semibold text-navy">
                  {SITE.centre} · Opposite Phoenix Mall
                </span>
                <h1 className="font-heading text-3xl leading-tight font-bold text-navy md:text-5xl">{hero.h1}</h1>
                <p className="text-lg leading-relaxed text-ink-soft">{hero.sub}</p>
                <ul className="flex flex-col gap-2.5">
                  {["Practical training on real models", "Certificate on completion", "Weekday and weekend batches"].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-medium">
                      <CheckIcon className="h-5 w-5 shrink-0 text-green" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="hidden items-center justify-center rounded-3xl bg-white/70 p-6 text-orange md:flex">
                  <HeroArt className="h-44 w-44" />
                </div>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-[0_12px_32px_rgba(0,71,133,0.14)] md:p-7">
                <h2 className="font-heading text-xl font-semibold text-navy">Get course details and fees</h2>
                <p className="mt-1 mb-5 text-sm text-ink-soft">Our counsellor will call you back, 9 AM to 9 PM.</p>
                <LeadForm course={course} />
              </div>
            </div>
          </section>
        )}

        {/* Trust strip */}
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 md:grid-cols-4">
            {TRUST.map(({ icon: Icon, h, d }) => (
              <div key={h} className="flex items-start gap-3 rounded-2xl bg-mist p-4">
                <Icon className="h-7 w-7 shrink-0 text-orange" />
                <div>
                  <p className="font-heading font-semibold text-navy">{h}</p>
                  <p className="text-sm text-ink-soft">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses */}
        <section id="courses">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">Courses at our Alambagh centre</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ordered.map((c) => {
                const Art = COURSE_ART[c.key];
                return (
                  <article key={c.key} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white">
                    <div className="flex h-36 items-center justify-center bg-cream text-orange">
                      <Art className="h-24 w-24" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <h3 className="font-heading text-lg font-semibold text-navy">{c.name}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">{c.short}</p>
                      <ul className="flex flex-col gap-1.5 text-sm">
                        {c.learn.map((l) => (
                          <li key={l} className="flex gap-2">
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                            {l}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex flex-wrap gap-2 pt-2 text-xs font-semibold">
                        <span className="rounded-lg bg-cream px-2.5 py-1.5">Duration: {c.duration || "Ask on call"}</span>
                        <span className="rounded-lg bg-cream px-2.5 py-1.5">Fees: {c.fees || "Ask on call"}</span>
                      </div>
                      <a
                        href="#lead-form"
                        className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-navy font-semibold text-navy hover:bg-navy hover:text-white"
                      >
                        Ask about this course
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">Why learn at VLCC Alambagh</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {WHY.map((w) => (
                  <li key={w} className="flex gap-3 text-lg leading-relaxed">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-orange-light" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/20 bg-white/5 p-8 text-center">
              <AwardIcon className="h-16 w-16 text-orange-light" />
              <p className="font-heading text-xl font-semibold">{SITE.certificate}</p>
              <p className="text-white/80">Given on successful completion of your course.</p>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">Visit our centre</h2>
              <p className="flex gap-3 text-lg">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-orange" />
                <span>
                  {SITE.brand}
                  <br />
                  {SITE.address}
                </span>
              </p>
              {SITE.timing && (
                <p className="flex gap-3 text-lg">
                  <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-orange" />
                  {SITE.timing}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                <a href={`tel:+91${SITE.phone}`} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-orange px-5 font-semibold text-white hover:bg-orange-dark">
                  <PhoneIcon className="h-5 w-5" /> Call now
                </a>
                <a href={`https://wa.me/91${SITE.whatsapp}`} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-green px-5 font-semibold text-white">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-navy px-5 font-semibold text-navy hover:bg-navy hover:text-white">
                  <PinIcon className="h-5 w-5" /> Directions
                </a>
              </div>
            </div>
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-3xl bg-white p-6 text-center text-navy">
              <PinIcon className="h-12 w-12 text-orange" />
              <p className="font-heading text-lg font-semibold">Alambagh, Lucknow</p>
              <p className="text-ink-soft">Right opposite Phoenix Mall</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mx-auto max-w-3xl px-4 py-14">
            <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">Common questions</h2>
            <div className="mt-6 flex flex-col gap-3">
              {FAQS.map((f, i) => (
                <details key={f.q} open={i === 0} className="group rounded-2xl border border-line bg-white">
                  <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-semibold">
                    {f.q}
                    <span aria-hidden="true" className="text-xl text-orange group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="px-5 pb-5 leading-relaxed text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10">
            <h2 className="font-heading text-2xl font-bold md:text-3xl">Start your beauty career this month</h2>
            <a href="#lead-form" className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 font-bold text-orange-dark">
              Get course details
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-24 text-white/75 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-6 text-sm">
          <span>© {SITE.brand}, {SITE.centre}</span>
          <span>
            <a href="/privacy" className="underline">Privacy policy</a> · <a href={`tel:+91${SITE.phone}`}>{SITE.phone}</a>
          </span>
        </div>
      </footer>

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
        <a href={`tel:+91${SITE.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange font-semibold text-white">
          <PhoneIcon className="h-5 w-5" /> Call
        </a>
        <a href={`https://wa.me/91${SITE.whatsapp}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green font-semibold text-white">
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
