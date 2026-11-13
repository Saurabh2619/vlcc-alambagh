// All editable centre details live here. Fill the TODO values once PK ma'am confirms them.

export const SITE = {
  brand: "VLCC School of Beauty",
  centre: "Alambagh, Lucknow",
  phone: "7755009597", // TODO: confirm call number
  whatsapp: "7755009597", // TODO: confirm WhatsApp number
  address: "B3-B6, opposite Phoenix Mall, Alambagh, Lucknow", // TODO: confirm full address with pin code
  instagram: "https://www.instagram.com/vlccschoolofbeautyalambagh",
  instagramHandle: "@vlccschoolofbeautyalambagh",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=VLCC+School+of+Beauty+Alambagh+Lucknow",
  // Map shown on the page. TODO: if the pin is not exactly on the institute, replace with the embed link
  // from Google Maps > the institute listing > Share > Embed a map > copy the src="..." URL.
  mapsEmbed: "https://www.google.com/maps?q=VLCC+School+of+Beauty,+Alambagh,+Lucknow&z=16&output=embed",
  timing: "", // TODO: e.g. "Mon to Sat, 10 AM to 7 PM"
  certificate: "VLCC certificate", // TODO: "VLCC + NSDC certificate" if both
};

export const GADS = {
  // Google Ads conversion tracking. Override with env vars on Vercel if needed.
  id: process.env.NEXT_PUBLIC_GADS_ID || "AW-17048613645",
  leadLabel: process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || "o5OfCMKd0-QaEI3mtME_",
  // Optional: label of a "Contact click" conversion (calls + WhatsApp taps). Empty = not tracked.
  contactLabel: process.env.NEXT_PUBLIC_GADS_CONTACT_LABEL || "QR4cCMK7x7cdEI3mtME_",
};

export type CourseKey = "makeup" | "parlour" | "hair" | "nail" | "brand";

export type Course = {
  key: Exclude<CourseKey, "brand">;
  name: string;
  short: string;
  learn: string[];
  duration: string; // TODO: fill, e.g. "3 months"
  fees: string; // TODO: fill, e.g. "₹45,000" or leave empty to show "Ask on call"
};

export const COURSES: Course[] = [
  {
    key: "makeup",
    name: "Makeup Artist",
    short: "Bridal, party and HD makeup with practice on real models.",
    learn: ["Skin prep and base", "Bridal and party looks", "HD and airbrush basics", "Hair styling for brides"],
    duration: "",
    fees: "",
  },
  {
    key: "parlour",
    name: "Beautician / Parlour",
    short: "Skin care, facials, threading, waxing and salon services.",
    learn: ["Facials and clean-ups", "Threading and waxing", "Manicure and pedicure", "Salon hygiene and client handling"],
    duration: "",
    fees: "",
  },
  {
    key: "hair",
    name: "Hair Styling",
    short: "Cuts, styling, colour and hair treatments.",
    learn: ["Basic and layer cuts", "Blow dry and styling", "Hair colour", "Spa and treatments"],
    duration: "",
    fees: "",
  },
  {
    key: "nail",
    name: "Nail Art",
    short: "Nail art, gel polish and extensions.",
    learn: ["Nail care basics", "Gel polish", "Nail extensions", "Nail art designs"],
    duration: "",
    fees: "",
  },
];

export const HERO: Record<CourseKey, { h1: string; sub: string; title: string; image?: string }> = {
  makeup: {
    h1: "Makeup Artist Course in Alambagh, Lucknow",
    sub: "Learn bridal, party and HD makeup with hands-on practice on real models.",
    title: "Makeup Artist Course in Alambagh, Lucknow | VLCC School of Beauty",
    image: "/hero/makeup-course.jpg",
  },
  parlour: {
    h1: "Beautician and Parlour Course in Alambagh, Lucknow",
    sub: "Learn facials, threading, waxing and salon services from trained faculty.",
    title: "Beautician & Parlour Course in Alambagh, Lucknow | VLCC School of Beauty",
    image: "/hero/parlour-course.jpg",
  },
  hair: {
    h1: "Hair Styling Course in Alambagh, Lucknow",
    sub: "Learn haircuts, styling, colouring and treatments with practical sessions.",
    title: "Hair Styling Course in Alambagh, Lucknow | VLCC School of Beauty",
    image: "/hero/hair-course.jpg",
  },
  nail: {
    h1: "Nail Art and Extension Course in Alambagh, Lucknow",
    sub: "Learn nail art, gel polish and extensions with hands-on practice.",
    title: "Nail Art Course in Alambagh, Lucknow | VLCC School of Beauty",
    image: "/hero/nail-course.jpg",
  },
  brand: {
    h1: "VLCC School of Beauty, Alambagh, Lucknow",
    sub: "Makeup, beautician, hair and nail courses with practical training and a certificate.",
    title: "VLCC School of Beauty Alambagh, Lucknow | Beauty Courses",
  },
};

// Course-specific content: matches what people search on Google (better Quality Score, cheaper clicks).
// TODO: replace "Ask our counsellor" answers with real fees/duration once confirmed.
export const COURSE_PAGE: Record<
  CourseKey,
  { label: string; about: string[]; desc: string; faqs: { q: string; a: string }[] }
> = {
  makeup: {
    label: "makeup artist course",
    desc: "Makeup artist course in Alambagh, Lucknow at VLCC School of Beauty. Bridal, party and HD makeup classes with practice on real models. Ask for fees and batch details.",
    about: [
      "The makeup artist course at VLCC School of Beauty, Alambagh is a practical makeup academy programme for beginners and for anyone who wants to work as a professional makeup artist in Lucknow.",
      "You learn skin preparation, base and contouring, eye makeup, party makeup, bridal makeup, HD makeup basics and hairstyling for brides, with regular practice on real models under trained faculty.",
      "Makeup classes run in small batches. Fill the form to know the makeup course fees, duration and the next batch.",
    ],
    faqs: [
      { q: "What are the makeup artist course fees?", a: "Fees depend on the level you choose (basic, advanced or professional bridal). Our counsellor shares the full fee structure and current offers on the call." },
      { q: "How long is the makeup course?", a: "We have short and professional makeup courses. The counsellor will suggest the right duration for your goal." },
      { q: "Can a beginner join the makeup course?", a: "Yes. The course starts from the basics of skin and products, so you do not need any experience." },
      { q: "Will I practise on real models?", a: "Yes. Practical sessions on real models are a core part of the course." },
      { q: "Can I work as a bridal makeup artist after this?", a: "The professional course covers bridal looks, so you can take bridal and party bookings or work with salons and studios." },
      { q: "Do I get a certificate?", a: "Yes, you receive a certificate after completing the course." },
    ],
  },
  parlour: {
    label: "beautician course",
    desc: "Beautician and beauty parlour course in Alambagh, Lucknow at VLCC School of Beauty. Facials, threading, waxing, manicure and salon training. Ask for fees.",
    about: [
      "The beautician course at VLCC School of Beauty, Alambagh covers everything you need to work in a beauty parlour or start your own: skin care, facials and clean-ups, threading, waxing, manicure, pedicure and basic makeup.",
      "Parlour classes are hands-on, so you practise every service under trained faculty, along with hygiene and client handling.",
      "Whether you want a basic parlour course or a professional cosmetology programme, fill the form to know the beautician course fees and duration.",
    ],
    faqs: [
      { q: "What are the beautician course fees?", a: "Fees depend on whether you take a basic parlour course or a professional programme. Our counsellor shares the exact fees on the call." },
      { q: "How long is the beauty parlour course?", a: "Basic and advanced options are available. The counsellor will guide you on the duration that fits your goal." },
      { q: "What will I learn in the parlour course?", a: "Facials, clean-ups, threading, waxing, manicure, pedicure, basic makeup, hygiene and client handling." },
      { q: "Can I open my own parlour after this course?", a: "Yes. The course gives you the practical skills to work in a salon or start your own parlour." },
      { q: "Who can join?", a: "Beginners can join. The counsellor will confirm eligibility for each course level." },
      { q: "Do I get a certificate?", a: "Yes, you receive a certificate after completing the course." },
    ],
  },
  hair: {
    label: "hair styling course",
    desc: "Hair styling and hairdressing course in Alambagh, Lucknow at VLCC School of Beauty. Haircuts, styling, colour and treatments with practical training. Ask for fees.",
    about: [
      "The hair styling course at VLCC School of Beauty, Alambagh is a practical hairdressing programme for anyone who wants to work in a salon or as a freelance hair stylist in Lucknow.",
      "You learn haircutting techniques, blow dry and styling, hair colour, hair spa and treatments, with hands-on practice in every class.",
      "Fill the form to know the hair styling course fees, duration and the next batch.",
    ],
    faqs: [
      { q: "What are the hair styling course fees?", a: "Fees depend on the course level. Our counsellor shares the exact fees and current offers on the call." },
      { q: "How long is the hairdressing course?", a: "Short and professional options are available. The counsellor will suggest the right one for you." },
      { q: "Will I learn haircutting and hair colour?", a: "Yes. Haircuts, styling, colouring and treatments are all covered with practical sessions." },
      { q: "Can a beginner join?", a: "Yes. The course starts from the basics, so no experience is needed." },
      { q: "Do I get a certificate?", a: "Yes, you receive a certificate after completing the course." },
    ],
  },
  nail: {
    label: "nail art course",
    desc: "Nail art and nail extension course in Alambagh, Lucknow at VLCC School of Beauty. Gel polish, extensions and nail art designs with practice. Ask for fees.",
    about: [
      "The nail art course at VLCC School of Beauty, Alambagh teaches nail care, gel polish, nail extensions and nail art designs, with practice in every class.",
      "It suits beginners who want to become nail technicians, and beauticians who want to add nail services to their skills.",
      "Fill the form to know the nail course fees, duration and the next batch.",
    ],
    faqs: [
      { q: "What are the nail art course fees?", a: "Fees depend on the course level. Our counsellor shares the exact fees on the call." },
      { q: "How long is the nail extension course?", a: "Short and professional options are available. The counsellor will guide you." },
      { q: "Are nail extensions included?", a: "Yes. Gel polish, nail extensions and nail art designs are part of the course." },
      { q: "Can a beginner join?", a: "Yes. No experience is needed." },
      { q: "Do I get a certificate?", a: "Yes, you receive a certificate after completing the course." },
    ],
  },
  brand: {
    label: "beauty course",
    desc: "VLCC School of Beauty, Alambagh, Lucknow. Makeup, beautician, hair and nail courses with practical training and certificate. Opposite Phoenix Mall.",
    about: [
      "VLCC School of Beauty, Alambagh is the VLCC beauty institute opposite Phoenix Mall in Lucknow, offering makeup artist, beautician, hair styling and nail art courses.",
      "Every course is practical, taught in small batches by trained faculty, and you receive a certificate on completion.",
      "Fill the form to know the course fees, duration and the next batch at our Alambagh centre.",
    ],
    faqs: [
      { q: "Where is VLCC School of Beauty in Alambagh?", a: "We are opposite Phoenix Mall, Alambagh, Lucknow. Tap Directions below for the map." },
      { q: "Which courses are available at VLCC Alambagh?", a: "Makeup artist, beautician and parlour, hair styling and nail art courses." },
      { q: "What are the course fees?", a: "Fees depend on the course and level. Our counsellor shares the full fee structure and current offers on the call." },
      { q: "Do I get a certificate?", a: "Yes, you receive a certificate after completing the course." },
      { q: "Can I visit the centre before joining?", a: "Yes. Fill the form or call us and we will fix a time for your visit." },
    ],
  },
};

// Real photos of student work at VLCC Alambagh (processed copies live in public/work/<course>/).
// To add more: put the new photo in public/work/<course>/ and add its path here.
export const WORK: Record<Exclude<CourseKey, "brand">, string[]> = {
  makeup: [8, 9, 4, 6, 7, 5, 1, 2, 3].map((n) => `/work/makeup/makeup-${n}.jpg`),
  hair: [6, 2, 7, 5, 1, 3, 4, 8].map((n) => `/work/hair/hair-${n}.jpg`),
  nail: [6, 1, 7, 3, 4, 2, 5].map((n) => `/work/nail/nail-${n}.jpg`),
  parlour: [1, 2, 3, 4, 5].map((n) => `/work/parlour/parlour-${n}.jpg`),
};

// Real photo of the Alambagh centre (faculty and students)
export const CENTRE_PHOTO = "/centre/classroom.jpg";
export const CENTRE_ENTRANCE = "/centre/entrance.jpg";

export function workFor(course: CourseKey): { src: string; course: string }[] {
  const names = { makeup: "Makeup", hair: "Hair styling", nail: "Nail art", parlour: "Beautician" } as const;
  if (course !== "brand") return WORK[course].map((src) => ({ src, course: names[course] }));
  // Brand page: a mix from every course
  const mix: { src: string; course: string }[] = [];
  const keys = (["makeup", "hair", "nail", "parlour"] as const).filter((k) => WORK[k].length);
  for (let i = 0; mix.length < 9 && i < 5; i++) {
    for (const k of keys) if (WORK[k][i] && mix.length < 9) mix.push({ src: WORK[k][i], course: names[k] });
  }
  return mix;
}
