import { PageTransition } from "@/components/PageTransition";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <ProjectsPreview />
      <ServicesPreview />
      <CTA />
    </PageTransition>
  );
}
