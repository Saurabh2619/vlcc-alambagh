// Kanpur (Kakadeo) centre content. Used only when NEXT_PUBLIC_CITY=kanpur (set on the vlcc-kanpur Vercel project).
// Alambagh content stays in site.ts and is the default.
// Facts below come from the centre address given by the owner and the official VLCC Kanpur landing pages
// (course names, 54 hr / 144 hr nail programs, 8th appeared eligibility for nail, since 2001, CIDESCO and IAO).
// TODO items: fees, duration (except nail), timing, real Kanpur photos, Instagram, exact map pin.

import type { CityCopy, Course, CoursePageInfo, CourseKey, HeroInfo, Pricing, SiteInfo } from "./site";

// Fees, duration and offer approved by the centre owner (24 Nov 2026). Edit these values to change every page.
const KANPUR_PRICING: Pricing = {
  amount: "₹15,000",
  unit: "/month",
  duration: "2 to 3 months",
  offer: "Up to 50% discount",
  offerNote: "Terms apply. Details on the counselling call.",
};

export const KANPUR_SITE: SiteInfo = {
  brand: "VLCC School of Beauty",
  centre: "Kakadeo & Kidwai Nagar, Kanpur",
  phone: "8948826444",
  whatsapp: "8948826444",
  address: "3rd Floor, Petrol Pump, Plot No 117/N/115, Bhadauria Chauraha, opposite IndianOil, Kakadeo, Kanpur, Uttar Pradesh 208025",
  instagram: "", // TODO: add the Kanpur centre Instagram link when it exists (hides the Instagram buttons until then)
  instagramHandle: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=VLCC+School+of+Beauty+Bhadauria+Chauraha+Kakadeo+Kanpur",
  // TODO: if the pin is not exactly on the institute, replace with the embed src from Google Maps > Share > Embed a map
  mapsEmbed: "https://www.google.com/maps?q=VLCC+School+of+Beauty,+Bhadauria+Chauraha,+Kakadeo,+Kanpur&z=16&output=embed",
  timing: "", // TODO: e.g. "Mon to Sat, 10 AM to 7 PM" (centre timing not confirmed yet)
  certificate: "VLCC certificate",
};

export const KANPUR_COURSES: Course[] = [
  {
    key: "makeup",
    name: "Makeup Artist",
    short: "Beginner to advanced makeup artist programs, from bridal and party looks to airbrush and media makeup.",
    learn: ["Beginner and complete makeup artist programs", "Bridal, party and fashion looks", "Airbrush and semi-permanent makeup", "Special effects and media makeup"],
    duration: KANPUR_PRICING.duration,
    fees: `From ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit}`,
  },
  {
    key: "parlour",
    name: "Beautician / Parlour",
    short: "Professional parlour course with skin, hair, makeup and nail training. One course, multiple skills.",
    learn: ["Skin care, facials and clean-ups", "Waxing and threading", "Hair cutting, styling and colour basics", "Manicure, pedicure and makeup"],
    duration: KANPUR_PRICING.duration,
    fees: `From ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit}`,
  },
  {
    key: "hair",
    name: "Hair Styling",
    short: "Hair cutting, styling, colour and hair care treatments, from beginner to advanced.",
    learn: ["Beginner hair dressing", "Cutting, styling and updos", "Hair colouring and highlights", "Advanced and global hair styling"],
    duration: KANPUR_PRICING.duration,
    fees: `From ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit}`,
  },
  {
    key: "nail",
    name: "Nail Art",
    short: "Nail art, gel and acrylic extensions with practical training on real hands.",
    learn: ["Hygiene, nail anatomy and care", "Classic and French gel extensions", "Acrylic extensions and sculpting", "2D and 3D nail art"],
    duration: `${KANPUR_PRICING.duration} (54 or 144 hrs)`,
    fees: `From ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit}`,
  },
];

export const KANPUR_HERO: Record<CourseKey, HeroInfo> = {
  makeup: {
    h1: "Makeup Artist Course in Kanpur",
    sub: "Learn bridal, party, airbrush and media makeup at VLCC School of Beauty, Kakadeo.",
    title: "Makeup Artist Course in Kanpur | VLCC School of Beauty Kakadeo",
    image: "/hero-kanpur/makeup.jpg",
  },
  parlour: {
    h1: "Beautician and Parlour Course in Kanpur",
    sub: "Learn skin care, hair, makeup and nails in one professional course at VLCC Kakadeo.",
    title: "Beautician & Parlour Course in Kanpur | VLCC School of Beauty Kakadeo",
    image: "/hero-kanpur/parlour.jpg",
  },
  hair: {
    h1: "Hair Styling Course in Kanpur",
    sub: "Learn haircuts, styling, colouring and treatments with practical sessions at VLCC Kakadeo.",
    title: "Hair Styling Course in Kanpur | VLCC School of Beauty Kakadeo",
    image: "/hero-kanpur/hair.jpg",
  },
  nail: {
    h1: "Nail Art and Extension Course in Kanpur",
    sub: "Learn gel, acrylic and 2D/3D nail art with hands-on practice at VLCC Kakadeo.",
    title: "Nail Art Course in Kanpur | VLCC School of Beauty Kakadeo",
    image: "/hero-kanpur/nail.jpg",
  },
  brand: {
    h1: "VLCC School of Beauty, Kakadeo, Kanpur",
    sub: "Makeup, beautician, hair and nail courses with practical training and a certificate.",
    title: "VLCC School of Beauty Kanpur, Kakadeo | Beauty Courses",
    image: "/hero-kanpur/home.jpg",
  },
};

export const KANPUR_COURSE_PAGE: Record<CourseKey, CoursePageInfo> = {
  makeup: {
    label: "makeup artist course",
    desc: "Makeup artist course in Kanpur at VLCC School of Beauty, Kakadeo. Bridal, party, airbrush and media makeup programs with hands-on practice. Ask for fees and batches.",
    about: [
      "The makeup artist course at VLCC School of Beauty, Kakadeo, Kanpur is a practical makeup academy programme for beginners and for anyone who wants to work as a professional makeup artist in Kanpur.",
      "Choose from beginner programs to advanced options such as airbrush makeup, semi-permanent makeup, special effects and international media makeup. Classes mix theory with hands-on practice.",
      "Our centre is at Bhadauria Chauraha, Kakadeo. Fill the form to know the makeup course fees, duration and the next batch.",
    ],
    faqs: [
      { q: "What are the makeup artist course fees in Kanpur?", a: `Fees start from ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit} and depend on the program you choose, from beginner to advanced. Our counsellor shares the full fee structure and current offers on the call.` },
      { q: "How long is the makeup course?", a: `Courses run for about ${KANPUR_PRICING.duration}. The counsellor will suggest the right program for your goal.` },
      { q: "Can a beginner join the makeup course?", a: "Yes. Beginner programs need no prior experience." },
      { q: "Which makeup programs are available?", a: "Beginner and complete makeup artist programs, airbrush makeup, semi-permanent makeup, special effects and international media makeup." },
      { q: "Can I work as a bridal makeup artist after this?", a: "Yes. You can take bridal and party bookings, work with salons and studios, or work as a freelance artist." },
      { q: "Do I get a certificate and placement help?", a: "Yes, you receive a VLCC certificate, and the VLCC placement cell supports job opportunities." },
    ],
  },
  parlour: {
    label: "beautician course",
    desc: "Beautician and beauty parlour course in Kanpur at VLCC School of Beauty, Kakadeo. Skin, hair, makeup and nail training. Ask for fees and batch details.",
    about: [
      "The beautician course at VLCC School of Beauty, Kakadeo, Kanpur covers what you need to work in a beauty parlour or start your own: skin care, facials, waxing and threading, hair, makeup, manicure and pedicure.",
      "It is a professional parlour course with practical training, so you practise every service under trained faculty along with hygiene and client handling.",
      "Whether you want a basic parlour course or a professional cosmetology programme, fill the form to know the beautician course fees and duration in Kanpur.",
    ],
    faqs: [
      { q: "What are the beautician course fees in Kanpur?", a: `Fees start from ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit} and depend on the program. Our counsellor shares the exact fees and current offers on the call.` },
      { q: "How long is the beauty parlour course?", a: `Courses run for about ${KANPUR_PRICING.duration}. The counsellor will guide you on the level that fits your goal.` },
      { q: "What will I learn in the parlour course?", a: "Skin care and facials, hair cutting and styling, makeup, manicure and pedicure, waxing and threading, plus client handling and salon basics." },
      { q: "Do I need any experience?", a: "No. You can join without any prior experience or qualification for the beginner course." },
      { q: "Can I open my own parlour after this course?", a: "Yes. The training prepares you to work in a salon, work as a freelancer or start your own parlour." },
      { q: "Do I get a certificate?", a: "Yes, you receive a VLCC certificate after completing the course." },
    ],
  },
  hair: {
    label: "hair styling course",
    desc: "Hair styling and hairdressing course in Kanpur at VLCC School of Beauty, Kakadeo. Haircuts, styling, colour and treatments with practical training. Ask for fees.",
    about: [
      "The hair styling course at VLCC School of Beauty, Kakadeo, Kanpur is a practical hairdressing programme for anyone who wants to work in a salon or as a freelance hair stylist.",
      "You learn haircutting, styling, colouring and hair care treatments, from beginner programs to advanced options such as VLCC Signature Pro Advanced Hair Styling.",
      "Fill the form to know the hair styling course fees, duration and the next batch in Kanpur.",
    ],
    faqs: [
      { q: "What are the hair styling course fees in Kanpur?", a: `Fees start from ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit} and depend on the program level. Our counsellor shares the exact fees and current offers on the call.` },
      { q: "How long is the hairdressing course?", a: `Courses run for about ${KANPUR_PRICING.duration}. The counsellor will suggest the right one for you.` },
      { q: "Will I learn haircutting and hair colour?", a: "Yes. Haircuts, styling, colouring and treatments are covered with practical sessions." },
      { q: "Can a beginner join?", a: "Yes. There are no prerequisites for the beginner program." },
      { q: "Do I get a certificate?", a: "Yes, you receive a VLCC certificate after completing the course." },
    ],
  },
  nail: {
    label: "nail art course",
    desc: "Nail art and nail extension course in Kanpur at VLCC School of Beauty, Kakadeo. Gel, acrylic and 2D/3D nail art with hands-on practice. 54 hr and 144 hr programs.",
    about: [
      "The nail art course at VLCC School of Beauty, Kakadeo, Kanpur teaches nail care, gel and acrylic nail extensions, gel polish and 2D and 3D nail art.",
      "Choose the 54 hour Beginner Program or the 144 hour Comprehensive Program. Both are open to students who have appeared in 8th class.",
      "Fill the form to know the nail course fees and the next batch in Kanpur.",
    ],
    faqs: [
      { q: "What are the nail art course fees in Kanpur?", a: `Fees start from ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit} and depend on the program. Our counsellor shares the exact fees on the call.` },
      { q: "How long is the nail extension course?", a: `The Beginner Program is 54 hours and the Comprehensive Program is 144 hours. Courses run for about ${KANPUR_PRICING.duration}.` },
      { q: "Who can join the nail course?", a: "Students who have appeared in 8th class can join. No prior experience is needed." },
      { q: "Are nail extensions included?", a: "Yes. Classic and French gel extensions, acrylic extensions and 2D and 3D nail art are part of the course." },
      { q: "Do I get a certificate?", a: "Yes, you receive a VLCC certificate after completing the course." },
    ],
  },
  brand: {
    label: "beauty course",
    desc: "VLCC School of Beauty, Kakadeo, Kanpur. Makeup, beautician, hair and nail courses with practical training and certificate. Bhadauria Chauraha, opposite IndianOil.",
    about: [
      "VLCC School of Beauty, Kakadeo is the VLCC beauty institute at Bhadauria Chauraha in Kanpur, offering makeup artist, beautician, hair styling and nail art courses.",
      "Every course is practical, taught by trained faculty, and you receive a certificate on completion. VLCC has trained over 1 lakh students and has a dedicated placement cell.",
      "Fill the form to know the course fees, duration and the next batch at our Kakadeo centre.",
    ],
    faqs: [
      { q: "Where is VLCC School of Beauty in Kanpur?", a: "We are on the 3rd Floor, Petrol Pump, Plot No 117/N/115, Bhadauria Chauraha, opposite IndianOil, Kakadeo, Kanpur 208025. Tap Directions below for the map." },
      { q: "Which courses are available at VLCC Kakadeo?", a: "Makeup artist, beautician and parlour, hair styling and nail art courses." },
      { q: "What are the course fees?", a: `Fees start from ${KANPUR_PRICING.amount}${KANPUR_PRICING.unit} and depend on the course and level. Our counsellor shares the full fee structure and current offers on the call.` },
      { q: "Do I get a certificate?", a: "Yes, you receive a VLCC certificate after completing the course." },
      { q: "Can I visit the centre before joining?", a: "Yes. Fill the form or call us and we will fix a time for your visit." },
    ],
  },
};

// Kanpur student work photos (public/work-kanpur/<course>/). More photos are on the way: add the path to the list.
// Empty lists simply hide the photo gallery. Do not use Alambagh photos on the Kanpur site.
// Most photos carry the "VLCC School of Beauty, Kakadeo - Kanpur" logo. makeup-8.jpg has the Kidwai Nagar logo.
// Get the students' permission before this goes live.
// The banner photos in each page's hero live in public/hero-kanpur/ (3 photos side by side), see KANPUR_HERO.
export const KANPUR_WORK: Record<Exclude<CourseKey, "brand">, string[]> = {
  // The "-kkd" in the file names is on purpose: the image optimizer caches by URL for a year, so a changed photo needs a new name.
  makeup: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/work-kanpur/makeup/makeup-${n}-kkd.jpg`),
  hair: [1, 2, 3, 4, 5].map((n) => `/work-kanpur/hair/hair-${n}-kkd.jpg`),
  nail: [1, 2, 3, 4, 5, 6].map((n) => `/work-kanpur/nail/nail-${n}-kkd.jpg`),
  parlour: [1, 2, 3, 4, 5, 6, 7].map((n) => `/work-kanpur/parlour/parlour-${n}-kkd.jpg`),
};

export const KANPUR_COPY: CityCopy = {
  short: "Kakadeo",
  city: "Kanpur",
  landmark: "Kakadeo and Kidwai Nagar, Kanpur",
  strip: "Authorised VLCC School of Beauty centres, Kakadeo & Kidwai Nagar, Kanpur",
  stripShort: "Authorised VLCC centres, Kanpur",
  stripRight: "Admissions open · Enquire for upcoming batches",
  trust: { h: "2 Kanpur centres", d: "Kakadeo & Kidwai Nagar" },
  visitStep: "See the classrooms and meet the trainers at the centre nearest to you.",
  why: [
    "Trained faculty from the VLCC network",
    "Most class time spent on practicals, not theory",
    "Beginners welcome, no experience needed",
    "Two centres in Kanpur, Kakadeo and Kidwai Nagar: pick the one nearest to you",
  ],
  whyIntro: "VLCC has trained over 1 lakh students and is a trusted name in beauty and wellness training in India.",
  callback: "Our counsellor will call you back shortly.",
  thanks: "Our counsellor will call you shortly.",
  logoAlt: "VLCC School of Beauty, Kakadeo Kanpur",
  centrePhoto: "/centre-kanpur/classroom.jpg", // students with their VLCC certificates (Kakadeo)
  centreEntrance: "", // TODO: add a real entrance photo
  entranceCaption: "Our centre is at Bhadauria Chauraha, opposite IndianOil, Kakadeo. Come and see our classes in person.",
  metaDescription: "Makeup, beautician, hair and nail courses at VLCC School of Beauty, Kakadeo, Kanpur. Practical training and certificate.",
  pricing: KANPUR_PRICING,
  centresLabel: "Kakadeo and Kidwai Nagar centres",
  // Both Kanpur centres are shown; people go to the one nearest to them.
  // TODO: confirm the Kidwai Nagar address and phone (read from the centre's own admission video).
  centres: [
    {
      name: "VLCC School of Beauty, Kakadeo",
      address: "3rd Floor, Petrol Pump, Plot No 117/N/115, Bhadauria Chauraha, opposite IndianOil, Kakadeo, Kanpur, Uttar Pradesh 208025",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=VLCC+School+of+Beauty+Bhadauria+Chauraha+Kakadeo+Kanpur",
      phone: "8948826444",
      instagram: "https://www.instagram.com/vlccschoolkanpur_kakadeo",
    },
    {
      name: "VLCC School of Beauty, Kidwai Nagar",
      address: "Second Floor, 543/58, above Pandey Book Sellers, Kidwai Nagar, Kanpur, Uttar Pradesh 208011",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=VLCC+School+of+Beauty+Kidwai+Nagar+Kanpur",
      phone: "7755872277",
      instagram: "https://www.instagram.com/vlccschoolkanpur_kidwai_nagar_",
    },
  ],
  heroStyle: "bold",
  stickyBar: false, // mobile bottom Call/Callback bar removed: it hid the form in the first screen
  stats: [
    { n: "1 Lakh+", l: "students trained" },
    { n: "100+", l: "job oriented courses" },
    { n: "Since 2001", l: "trusted VLCC network" },
    { n: "CIDESCO & IAO", l: "affiliations" },
  ],
};
