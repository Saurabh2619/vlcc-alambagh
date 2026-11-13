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
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
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

export function SparkIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
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
