import Image from "next/image";
import Link from "next/link";
import { CITY, COURSE_PAGE, COURSES, HERO, SITE, WORK, workFor, type CourseKey } from "@/app/lib/site";
import LeadForm from "./LeadForm";
import {
  AwardIcon,
  CheckIcon,
  ClockIcon,
  COURSE_ART,
  HandsIcon,
  PhoneIcon,
  PinIcon,
  SparkIcon,
  UsersIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "./Icons";

const TRUST = [
  { icon: AwardIcon, h: "Certified course", d: "Certificate on completion" },
  { icon: HandsIcon, h: "Hands-on practice", d: "Learn on real models" },
  { icon: UsersIcon, h: "Small batches", d: "Personal attention" },
  { icon: PinIcon, h: CITY.trust.h, d: CITY.trust.d },
];

const STEPS = [
  { h: "Fill the form", d: "Share your name and number. It takes less than a minute." },
  { h: "Free counselling call", d: "Our counsellor explains courses, fees and batch timings." },
  { h: "Visit the centre", d: CITY.visitStep },
  { h: "Join your batch", d: "Pick a weekday or weekend batch and start learning." },
];

const CAREERS = [
  { icon: SparkIcon, h: "Makeup artist", d: "Bridal, party and event makeup for clients." },
  { icon: HandsIcon, h: "Salon professional", d: "Work in salons, spas and beauty clinics." },
  { icon: UsersIcon, h: "Freelancer", d: "Take home and event bookings on your own time." },
  { icon: PinIcon, h: "Your own parlour", d: "Start a parlour or studio with the right skills." },
];

const HERO_POINTS = ["Practical training on real models", "Certificate on completion", "Weekday and weekend batches"];

// Fees, duration and offer (values live in app/lib/site.ts and app/lib/kanpur.ts). Shown right above the form.
function FeeBox() {
  const p = CITY.pricing;
  if (!p.amount) return null;
  return (
    <div className="mb-3 rounded-xl border border-orange/30 bg-orange/5 p-2.5 md:mb-4 md:rounded-2xl md:p-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-ink-soft uppercase md:text-xs">Fees starting from</p>
          <p className="font-heading text-xl leading-none font-bold text-navy md:text-3xl">
            {p.amount}
            <span className="text-xs font-medium text-ink-soft md:text-base">{p.unit}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-semibold tracking-wide text-ink-soft uppercase md:text-xs">Course duration</p>
          <p className="font-heading text-sm font-semibold whitespace-nowrap text-navy md:text-base">{p.duration}</p>
        </div>
      </div>
      {p.offer && (
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 md:mt-3 md:block">
          <p className="inline-flex items-center rounded-full bg-orange px-2.5 py-0.5 text-xs font-bold text-white md:px-3 md:py-1 md:text-sm">{p.offer}*</p>
          <p className="text-[10px] text-ink-soft md:mt-1.5 md:text-xs">*{p.offerNote}</p>
        </div>
      )}
    </div>
  );
}

export default function Landing({ course }: { course: CourseKey }) {
  const hero = HERO[course];
  const page = COURSE_PAGE[course];
  const work = workFor(course);
  const heroArtKey = course === "brand" ? "makeup" : course;
  const HeroArt = COURSE_ART[heroArtKey];
  const ordered = [...COURSES].sort((a, b) => (a.key === course ? -1 : b.key === course ? 1 : 0));
  const bold = !hero.image && CITY.heroStyle === "bold";
  // Kanpur: same photo banner as Alambagh, plus the "Admissions open" chip, counselling ribbon and stats strip.
  const emphasis = CITY.heroStyle === "bold";
  const place = `${CITY.short}, ${CITY.city}`;
  // The scrolling photo row needs enough photos to fill the screen. With only a few photos, repeat them
  // (5 or more photos are used as they are, so the Alambagh row does not change).
  const rowPhotos = work.length >= 5 || work.length === 0 ? work : Array.from({ length: Math.ceil(6 / work.length) }, () => work).flat();

  return (
    <div className={`flex min-h-full flex-col ${CITY.stickyBar ? "pb-16 md:pb-0" : ""}`}>
      {/* Authorised centre strip */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-medium sm:py-2 sm:justify-between sm:text-sm">
          <span className="flex items-center gap-2">
            <AwardIcon className="h-4 w-4 shrink-0 text-orange-light" />
            <span className="sm:hidden">{CITY.stripShort}</span>
            <span className="hidden sm:inline">{CITY.strip}</span>
          </span>
          <span className="hidden sm:inline">{CITY.stripRight}</span>
        </div>
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 md:py-3">
          <a href="#top" aria-label={CITY.logoAlt} className="shrink-0">
            <Image src="/vlcc-logo-lko.webp" alt={CITY.logoAlt} width={200} height={83} priority className="h-10 w-auto md:h-14" />
          </a>
          <a
            href={`tel:+91${SITE.phone}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange px-3 text-sm font-semibold text-white hover:bg-orange-dark md:px-4 md:text-base"
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
            <div className={`mx-auto grid max-w-6xl items-center px-4 md:grid-cols-[1.15fr_1fr] md:gap-8 md:py-20 ${emphasis ? "gap-4 py-4" : "gap-5 py-6"}`}>
              <div className={`flex flex-col text-white md:gap-5 ${emphasis ? "gap-2" : "gap-3"}`}>
                <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold md:py-1.5 md:text-sm ${emphasis ? "bg-orange font-bold" : "bg-white/15 backdrop-blur"}`}>
                  {emphasis ? `Admissions open · ${SITE.centre}` : `${SITE.centre} · ${CITY.landmark}`}
                </span>
                <h1 className="font-heading text-[26px] leading-tight font-bold md:text-5xl">{hero.h1}</h1>
                <p className={`leading-relaxed text-white/90 md:text-lg ${emphasis ? "text-sm" : "text-base"}`}>{hero.sub}</p>
                <ul className={`flex-col ${emphasis ? "flex gap-1.5 text-sm md:gap-2.5 md:text-base" : "hidden gap-2.5 md:flex"}`}>
                  {HERO_POINTS.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-medium">
                      <CheckIcon className="h-5 w-5 shrink-0 text-orange-light" />
                      {t}
                    </li>
                  ))}
                </ul>
                {work.length > 0 && (
                  <div className="mt-2 hidden flex-col gap-2 md:flex">
                    <p className="text-sm font-semibold text-white/80">Real work by our students</p>
                    <div className="flex gap-3">
                      {work.slice(0, course === "brand" ? 4 : 3).map((w) => (
                        <Image key={w.src} src={w.src} alt={`${w.course} work by a student at VLCC ${CITY.short}`} width={112} height={140} className="h-36 w-28 rounded-xl object-cover ring-2 ring-white/70" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={`relative rounded-3xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] md:p-7 ${emphasis ? "p-3 pt-5 md:pt-9" : "p-5"}`}>
                {emphasis && (
                  <span className="absolute -top-3 left-5 rounded-full bg-orange px-3.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md">
                    Free counselling call
                  </span>
                )}
                <h2 className={`font-heading font-semibold text-navy md:text-xl ${emphasis ? "text-base" : "text-xl"}`}>Get course details and fees</h2>
                <p className={`text-ink-soft md:mt-1 md:mb-5 md:text-sm ${emphasis ? "mt-0.5 mb-2 text-xs" : "mt-1 mb-4 text-sm"}`}>{CITY.callback}</p>
                <FeeBox />
                <LeadForm course={course} />
              </div>
            </div>
            {emphasis && CITY.stats.length > 0 && (
              <div className="border-t border-white/10 bg-black/30">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 md:grid-cols-4">
                  {CITY.stats.map((s) => (
                    <div key={s.n} className="text-center text-white md:text-left">
                      <p className="font-heading text-xl font-bold text-orange-light md:text-2xl">{s.n}</p>
                      <p className="text-xs text-white/80 md:text-sm">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : bold ? (
          <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-[#003a6e] to-[#002447] text-white">
            <div aria-hidden="true" className="absolute -top-24 -right-20 -z-10 h-80 w-80 rounded-full bg-orange/30 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-orange-light/15 blur-3xl" />
            <div aria-hidden="true" className="absolute top-10 right-1/3 -z-10 hidden h-40 w-40 rounded-full border border-white/10 md:block" />
            <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-7 md:grid-cols-[1.15fr_1fr] md:gap-10 md:py-16">
              <div className="flex flex-col gap-4 md:gap-5">
                <span className="self-start rounded-full bg-orange px-3 py-1 text-xs font-bold md:text-sm">
                  Admissions open · {SITE.centre}
                </span>
                <h1 className="font-heading text-[28px] leading-tight font-bold md:text-5xl">{hero.h1}</h1>
                <p className="text-base leading-relaxed text-white/90 md:text-lg">{hero.sub}</p>
                <ul className="flex flex-col gap-2.5">
                  {HERO_POINTS.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-medium">
                      <CheckIcon className="h-5 w-5 shrink-0 text-orange-light" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="flex items-center gap-2 text-sm text-white/80">
                  <PinIcon className="h-4 w-4 shrink-0 text-orange-light" />
                  {CITY.landmark}
                </p>
                <div className="hidden items-center justify-center self-start rounded-3xl border border-white/15 bg-white/5 p-5 text-orange-light md:flex">
                  <HeroArt className="h-28 w-28" />
                </div>
              </div>
              <div className="relative rounded-3xl bg-white p-5 pt-7 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:p-7 md:pt-9">
                <span className="absolute -top-3 left-5 rounded-full bg-orange px-3.5 py-1 text-xs font-bold tracking-wide text-white uppercase shadow-md">
                  Free counselling call
                </span>
                <h2 className="font-heading text-xl font-semibold text-navy">Get course details and fees</h2>
                <p className="mt-1 mb-4 text-sm text-ink-soft md:mb-5">{CITY.callback}</p>
                <FeeBox />
                <LeadForm course={course} />
              </div>
            </div>
            {CITY.stats.length > 0 && (
              <div className="border-t border-white/10 bg-black/15">
                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 md:grid-cols-4">
                  {CITY.stats.map((s) => (
                    <div key={s.n} className="text-center md:text-left">
                      <p className="font-heading text-xl font-bold text-orange-light md:text-2xl">{s.n}</p>
                      <p className="text-xs text-white/80 md:text-sm">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ) : (
          <section className="bg-cream">
            <div className="mx-auto grid max-w-6xl items-start gap-5 px-4 py-6 md:grid-cols-[1.15fr_1fr] md:gap-8 md:py-16">
              <div className="flex flex-col gap-3 md:gap-5">
                <span className="self-start rounded-full bg-navy-soft px-3 py-1 text-xs font-semibold text-navy md:py-1.5 md:text-sm">
                  {SITE.centre} · {CITY.landmark}
                </span>
                <h1 className="font-heading text-[26px] leading-tight font-bold text-navy md:text-5xl">{hero.h1}</h1>
                <p className="text-base leading-relaxed text-ink-soft md:text-lg">{hero.sub}</p>
                <ul className="hidden flex-col gap-2.5 md:flex">
                  {HERO_POINTS.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 font-medium">
                      <CheckIcon className="h-5 w-5 shrink-0 text-green" />
                      {t}
                    </li>
                  ))}
                </ul>
                {work.length >= 4 ? (
                  <div className="hidden grid-cols-4 gap-3 md:grid">
                    {work.slice(0, 4).map((w) => (
                      <figure key={w.src} className="relative overflow-hidden rounded-2xl">
                        <Image src={w.src} alt={`${w.course} work by a student at VLCC ${CITY.short}`} width={200} height={250} className="aspect-[4/5] h-auto w-full object-cover" />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pt-6 pb-1.5 text-xs font-semibold text-white">{w.course}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="hidden items-center justify-center rounded-3xl bg-white/70 p-6 text-orange md:flex">
                    <HeroArt className="h-44 w-44" />
                  </div>
                )}
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-[0_12px_32px_rgba(0,71,133,0.14)] md:p-7">
                <h2 className="font-heading text-xl font-semibold text-navy">Get course details and fees</h2>
                <p className="mt-1 mb-4 text-sm text-ink-soft md:mb-5">{CITY.callback}</p>
                <FeeBox />
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

        {/* About (keyword-relevant copy for Quality Score) */}
        <section>
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-orange uppercase">About the course</p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">
                {page.label.charAt(0).toUpperCase() + page.label.slice(1)} at VLCC {place}
              </h2>
              <div className="mt-4 flex flex-col gap-3 text-lg leading-relaxed text-ink-soft">
                {page.about.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 overflow-hidden rounded-3xl bg-navy p-7 text-white">
              {course !== "brand" && CITY.centrePhoto && (
                <figure className="mb-2">
                  <Image
                    src={CITY.centrePhoto}
                    alt={`Faculty and students at VLCC School of Beauty, ${place}`}
                    width={1024}
                    height={682}
                    sizes="(min-width: 768px) 420px, 100vw"
                    className="aspect-[3/2] h-auto w-full rounded-2xl object-cover"
                  />
                  <figcaption className="pt-3 text-sm text-white/75">Our faculty and students at the {CITY.centresLabel}</figcaption>
                </figure>
              )}
              <p className="font-heading text-xl font-semibold">Get fees and batch details</p>
              <p className="text-white/80">Talk to our counsellor today. No obligation.</p>
              <a href="#lead-form" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange px-5 font-bold text-white hover:bg-orange-dark">
                Get a callback
              </a>
              <a href={`tel:+91${SITE.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-5 font-semibold text-white hover:bg-white/10">
                <PhoneIcon className="h-5 w-5" /> Call {SITE.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Student work gallery (real photos) */}
        {work.length > 0 && (
          <section className="bg-cream">
            <div className="mx-auto max-w-6xl px-4 py-14">
              <p className="text-sm font-semibold tracking-widest text-orange uppercase">Student work</p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">
                {course === "parlour" ? `Inside our beautician classes at VLCC ${CITY.short}` : `Real work by our students at VLCC ${CITY.short}`}
              </h2>
              <p className="mt-2 text-ink-soft">
                {course === "parlour"
                  ? "Students practise every service on real models, guided by our trainers."
                  : "Every look below was created by students in our classes."}
              </p>
              <div className="marquee -mx-4 mt-6 overflow-hidden md:mx-0">
                <div className="marquee-track flex w-max gap-3">
                  {[...rowPhotos, ...rowPhotos].map((w, i) => (
                    <figure key={`${w.src}-${i}`} aria-hidden={i >= rowPhotos.length} className="relative w-36 shrink-0 overflow-hidden rounded-xl md:w-44">
                      <Image
                        src={w.src}
                        alt={i < rowPhotos.length ? `${w.course} work by a student at VLCC ${place}` : ""}
                        width={176}
                        height={220}
                        sizes="176px"
                        className="aspect-[4/5] h-auto w-full object-cover"
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pt-6 pb-1.5 text-xs font-semibold text-white">
                        {w.course}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <a href="#lead-form" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-orange px-6 font-bold text-white hover:bg-orange-dark">
                Learn this at VLCC {CITY.short}
              </a>
              {SITE.instagram && (
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-12 sm:mt-8 sm:ml-3 items-center gap-2 rounded-xl border-2 border-navy px-5 font-semibold text-navy hover:bg-navy hover:text-white"
                >
                  <InstagramIcon className="h-5 w-5" /> More on Instagram
                </a>
              )}
            </div>
          </section>
        )}

        {/* Courses */}
        <section id="courses">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-sm font-semibold tracking-widest text-orange uppercase">Our courses</p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">Courses at our {CITY.centresLabel}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ordered.map((c) => {
                const Art = COURSE_ART[c.key];
                return (
                  <article key={c.key} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,71,133,0.12)]">
                    {WORK[c.key][0] ? (
                      <Image src={WORK[c.key][0]} alt={`${c.name} work by a student at VLCC ${CITY.short}`} width={400} height={300} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-square h-auto w-full object-cover object-top" />
                    ) : (
                      <div className="flex aspect-square items-center justify-center bg-cream text-orange">
                        <Art className="h-24 w-24" />
                      </div>
                    )}
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

        {/* How it works */}
        <section className="bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-sm font-semibold tracking-widest text-orange uppercase">How to join</p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">Start in 4 simple steps</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((st, i) => (
                <li key={st.h} className="relative rounded-2xl bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange font-heading text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-4 font-heading text-lg font-semibold text-navy">{st.h}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{st.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-sm font-semibold tracking-widest text-orange-light uppercase">Why VLCC</p>
              <h2 className="mt-1 font-heading text-2xl font-bold md:text-3xl">Why learn at VLCC {CITY.short}</h2>
              <p className="mt-3 text-white/80">{CITY.whyIntro}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {CITY.why.map((w) => (
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

        {/* Careers */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-sm font-semibold tracking-widest text-orange uppercase">After the course</p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">Where this course can take you</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CAREERS.map((c) => (
                <div key={c.h} className="rounded-2xl border border-line p-6 transition duration-200 hover:border-orange">
                  <c.icon className="h-9 w-9 text-orange" />
                  <p className="mt-4 font-heading text-lg font-semibold text-navy">{c.h}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold tracking-widest text-orange uppercase">Visit us</p>
              <h2 className="-mt-3 font-heading text-2xl font-bold text-navy md:text-3xl">Visit our centre</h2>
              {CITY.centres && CITY.centres.length > 1 ? (
                <div className="flex flex-col gap-3">
                  <p className="text-ink-soft">We have {CITY.centres.length} centres in {CITY.city}. Visit the one nearest to you.</p>
                  {CITY.centres.map((c) => (
                    <div key={c.name} className="rounded-2xl border border-line bg-white p-4">
                      <p className="font-heading font-semibold text-navy">{c.name}</p>
                      <p className="mt-1 flex gap-2 text-ink-soft">
                        <PinIcon className="mt-1 h-4 w-4 shrink-0 text-orange" />
                        <span>{c.address}</span>
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.phone && (
                          <a href={`tel:+91${c.phone}`} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange px-4 text-sm font-semibold text-white hover:bg-orange-dark">
                            <PhoneIcon className="h-4 w-4" /> Call {c.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                          </a>
                        )}
                        <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-navy px-4 text-sm font-semibold text-navy hover:bg-navy hover:text-white">
                          <PinIcon className="h-4 w-4" /> Directions
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="flex gap-3 text-lg">
                  <PinIcon className="mt-1 h-5 w-5 shrink-0 text-orange" />
                  <span>
                    {SITE.brand}
                    <br />
                    {SITE.address}
                  </span>
                </p>
              )}
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
                {!(CITY.centres && CITY.centres.length > 1) && (
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-navy px-5 font-semibold text-navy hover:bg-navy hover:text-white">
                    <PinIcon className="h-5 w-5" /> Directions
                  </a>
                )}
              </div>
              {CITY.centreEntrance && (
                <figure className="mt-2 flex items-center gap-4">
                  <Image
                    src={CITY.centreEntrance}
                    alt={`Entrance of VLCC School of Beauty, ${place}`}
                    width={450}
                    height={800}
                    sizes="128px"
                    className="h-44 w-28 rounded-2xl object-cover md:h-52 md:w-32"
                  />
                  <figcaption className="text-ink-soft">
                    <span className="block font-heading font-semibold text-navy">Look for this entrance</span>
                    {CITY.entranceCaption}
                  </figcaption>
                </figure>
              )}
            </div>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_12px_32px_rgba(0,71,133,0.10)]">
              <iframe
                src={SITE.mapsEmbed}
                title={`VLCC School of Beauty, ${place} on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-64 w-full border-0 md:h-full md:min-h-72"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="mx-auto max-w-3xl px-4 py-14">
            <p className="text-sm font-semibold tracking-widest text-orange uppercase">FAQ</p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-navy md:text-3xl">Common questions</h2>
            <div className="mt-6 flex flex-col gap-3">
              {page.faqs.map((f, i) => (
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

      <footer className="bg-ink text-white/75">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="self-start rounded-lg bg-white px-3 py-2">
              <Image src="/vlcc-logo-lko.webp" alt="VLCC School of Beauty" width={200} height={83} className="h-10 w-auto" />
            </div>
            <p>Authorised VLCC School of Beauty centre, {SITE.centre}.</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-heading font-semibold text-white">Courses</p>
            {COURSES.map((c) => (
              <Link key={c.key} href={`/${c.key === "parlour" ? "beautician" : c.key}-course`} className="hover:text-white">
                {c.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-heading font-semibold text-white">Contact</p>
            {CITY.centres && CITY.centres.length > 1 ? (
              CITY.centres.map((c) => (
                <p key={c.name}>
                  <span className="font-semibold text-white">{c.name}:</span> {c.address}
                </p>
              ))
            ) : (
              <p>{SITE.address}</p>
            )}
            <a href={`tel:+91${SITE.phone}`} className="hover:text-white">+91 {SITE.phone}</a>
            {SITE.instagram && (
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <InstagramIcon className="h-4 w-4" /> {SITE.instagramHandle}
              </a>
            )}
            <Link href="/privacy" className="underline hover:text-white">Privacy policy</Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs">© {SITE.brand}, {SITE.centre}</div>
      </footer>

      {/* Mobile bottom bar: one tap to call or ask for a callback */}
      {CITY.stickyBar && (
        <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-white/95 p-2 backdrop-blur md:hidden">
          <a
            href={`tel:+91${SITE.phone}`}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-navy font-semibold text-navy"
          >
            <PhoneIcon className="h-5 w-5" /> Call now
          </a>
          <a href="#lead-form" className="inline-flex min-h-12 flex-[1.4] items-center justify-center rounded-xl bg-orange font-bold text-white">
            Get a callback
          </a>
        </div>
      )}

      {/* Floating WhatsApp (mobile + desktop) */}
      <a
        href={`https://wa.me/91${SITE.whatsapp}`}
        aria-label="Chat on WhatsApp"
        className={`fixed right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition hover:scale-105 md:right-6 md:bottom-6 md:h-16 md:w-16 ${CITY.stickyBar ? "bottom-20" : "bottom-4"}`}
      >
        <WhatsAppIcon className="h-8 w-8 md:h-9 md:w-9" />
      </a>

    </div>
  );
}
