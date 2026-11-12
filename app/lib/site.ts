// All editable centre details live here. Fill the TODO values once PK ma'am confirms them.

export const SITE = {
  brand: "VLCC School of Beauty",
  centre: "Alambagh, Lucknow",
  phone: "7755009597", // TODO: confirm call number
  whatsapp: "7755009597", // TODO: confirm WhatsApp number
  address: "B3-B6, opposite Phoenix Mall, Alambagh, Lucknow", // TODO: confirm full address with pin code
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=VLCC+School+of+Beauty+Alambagh+Lucknow",
  timing: "", // TODO: e.g. "Mon to Sat, 10 AM to 7 PM"
  certificate: "VLCC certificate", // TODO: "VLCC + NSDC certificate" if both
};

export const GADS = {
  // Google Ads conversion tracking. Override with env vars on Vercel if needed.
  id: process.env.NEXT_PUBLIC_GADS_ID || "AW-17048613645",
  leadLabel: process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || "o5OfCMKd0-QaEI3mtME_",
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

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the fee for the course?",
    a: "Fees depend on the course and level. Our counsellor shares the full fee structure and any current offer on the call.",
  },
  {
    q: "How long are the courses?",
    a: "Short and professional courses are available. Duration depends on the course you choose; the counsellor will guide you.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, you get a certificate after completing the course.",
  },
  {
    q: "Do I need any experience?",
    a: "No. Courses start from the basics, so beginners can join.",
  },
  {
    q: "Can I visit the centre before joining?",
    a: "Yes. Fill the form or call us, and we will fix a time for you to visit our Alambagh centre.",
  },
];
