import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CredentialsSection } from "@/components/portfolio/CredentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { SectionReveal } from "@/components/portfolio/SectionReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main style={{ background: "var(--bg-main)", overflowX: "clip" }}>
      <HeroSection />

      <SectionReveal scaleFrom={0.95} roundedTop slideUp>
        <AboutSection />
      </SectionReveal>

      <SectionReveal scaleFrom={0.94} roundedTop slideUp>
        <ServicesSection />
      </SectionReveal>

      <SectionReveal scaleFrom={0.93} roundedTop slideUp>
        <ProjectsSection />
      </SectionReveal>

      <SectionReveal scaleFrom={0.94} roundedTop slideUp>
        <ExperienceSection />
      </SectionReveal>

      <SectionReveal scaleFrom={0.95} roundedTop slideUp>
        <CredentialsSection />
      </SectionReveal>

      <SectionReveal scaleFrom={0.96} roundedTop={false} slideUp>
        <ContactSection />
      </SectionReveal>
    </main>
  );
}
