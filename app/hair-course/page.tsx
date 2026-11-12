import type { Metadata } from "next";
import Landing from "../components/Landing";
import { HERO } from "../lib/site";

export const metadata: Metadata = { title: HERO.hair.title };

export default function Page() {
  return <Landing course="hair" />;
}
