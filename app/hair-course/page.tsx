import type { Metadata } from "next";
import Landing from "../components/Landing";
import { COURSE_PAGE, HERO } from "../lib/site";

export const metadata: Metadata = { title: HERO.hair.title, description: COURSE_PAGE.hair.desc };

export default function Page() {
  return <Landing course="hair" />;
}
