import { PageTransition } from "@/components/PageTransition";
import { usePageTitle } from "@/hooks/UsePageTitle";
import { AboutIntro } from "@/components/about/AboutIntro";
import { Skills } from "@/components/about/Skills";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { AboutBento } from "@/components/about/AboutBento";

export default function About() {
  usePageTitle("About — Lazghiff", "The story, skills, and journey behind Lazghiff — a creative developer building award-worthy digital products.");

  return (
    <PageTransition>
      <AboutBento />
      <Skills />
      <Timeline />
      <Values />
    </PageTransition>
  );
}
