type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PhoneIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.5c0 3.6 2.9 6.5 6.5 6.5l1-1.6-2-1-1 1a4.6 4.6 0 0 1-2.4-2.4l1-1-1-2z" />
    </svg>
  );
}

export function CheckIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.4}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PinIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function AwardIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}

export function HandsIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M10 10V4a1.5 1.5 0 0 1 3 0v6" />
      <path d="M13 10V5.5a1.5 1.5 0 0 1 3 0V13" />
      <path d="M16 9.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.5 15a1.5 1.5 0 0 1 2.4-1.8L7 14.5" />
    </svg>
  );
}

export function UsersIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
    </svg>
  );
}

export function ClockIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* Course illustrations: simple line art used instead of photos. */

export function MakeupArt({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...base} strokeWidth={2.2}>
      <rect x="18" y="58" width="52" height="40" rx="8" />
      <circle cx="32" cy="72" r="6" />
      <circle cx="50" cy="72" r="6" />
      <circle cx="32" cy="88" r="4" />
      <circle cx="50" cy="88" r="4" />
      <path d="M78 96 98 26" />
      <path d="M93 22c4-6 12-4 11 3l-3 9-9-3z" />
      <path d="M74 98l6 2" />
      <path d="M86 52l8 3" />
    </svg>
  );
}

export function ParlourArt({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...base} strokeWidth={2.2}>
      <ellipse cx="54" cy="56" rx="26" ry="32" />
      <path d="M44 50c3-3 7-3 10 0M58 50c3-3 7-3 10 0" />
      <path d="M48 70c5 4 11 4 16 0" />
      <path d="M90 30c8 8 8 20 0 28-8-8-8-20 0-28z" />
      <path d="M90 58v34" />
      <path d="M30 98c8-6 40-6 48 0" />
    </svg>
  );
}

export function HairArt({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...base} strokeWidth={2.2}>
      <circle cx="34" cy="86" r="10" />
      <circle cx="58" cy="86" r="10" />
      <path d="M40 78 82 22" />
      <path d="M52 78 30 30" />
      <rect x="78" y="56" width="26" height="44" rx="5" />
      <path d="M84 64v28M90 64v28M96 64v28" />
    </svg>
  );
}

export function NailArt({ className }: P) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...base} strokeWidth={2.2}>
      <rect x="22" y="54" width="34" height="46" rx="8" />
      <rect x="30" y="36" width="18" height="18" rx="3" />
      <path d="M39 36V18" />
      <path d="M74 100V54a10 10 0 0 1 20 0v46" />
      <path d="M76 58c4-6 12-6 16 0" />
      <path d="M80 72h8M80 82h8" />
    </svg>
  );
}

export const COURSE_ART = {
  makeup: MakeupArt,
  parlour: ParlourArt,
  hair: HairArt,
  nail: NailArt,
};
