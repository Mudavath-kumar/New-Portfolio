import { Mail, Phone, Github, Linkedin, Globe, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./Buttons";
import { SplitHeading } from "./SplitHeading";
import { Magnet } from "./Magnet";

const LINKS = [
  { icon: Mail, label: "kc893825@gmail.com", href: "mailto:kc893825@gmail.com" },
  { icon: Phone, label: "+91 75690 55938", href: "tel:+917569055938" },
  { icon: Globe, label: "mudavath-kumar.me", href: "https://mudavath-kumar.me" },
  { icon: Github, label: "github.com/Mudavath-kumar", href: "https://github.com/Mudavath-kumar" },
  { icon: Linkedin, label: "https://www.linkedin.com/in/mudavath-kumar-mudavath-kumar/", href: "https://linkedin.com/in/mudavath-kumar-mudavath-kumar" },
  { icon: Code2, label: "leetcode.com/u/Mudavath_kumar_1", href: "https://leetcode.com/u/Mudavath_kumar_1" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40" style={{ background: "var(--bg-main)" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14 text-center">
        <SplitHeading
          text="Let's talk"
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 13vw, 180px)" }}
          stagger={0.04}
        />
        <FadeIn delay={0.1} y={20}>
          <p
            className="font-light uppercase tracking-wide max-w-xl"
            style={{ fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)", color: "var(--text-muted)" }}
          >
            Open to Software Engineer, Full Stack, and AI / LLM roles. Based in Hyderabad, India — available worldwide.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <div className="cta-pulse rounded-full">
            <ContactButton label="Email Me" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mt-6">
          {LINKS.map((l, i) => (
            <FadeIn key={l.label} delay={0.25 + i * 0.05} y={20}>
              <Magnet padding={60} strength={5}>
                <motion.a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-full border-2 px-6 py-4 group"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--text-main)",
                    transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                  }}
                  whileHover={{ y: -2 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-color)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(182,0,168,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-color)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <l.icon className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent-color)" }} />
                  <span className="text-sm sm:text-base truncate">{l.label}</span>
                </motion.a>
              </Magnet>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Massive Bold Scrolling Text at the absolute bottom */}
      <div 
        className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mt-16 pt-8 pb-4 border-t" 
        style={{ borderColor: "var(--border-color)" }}
      >
        {/* Blurry smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none z-10" />

        <div className="marquee-text-container select-none">
          <div 
            className="marquee-text-content flex gap-16 text-[13vw] sm:text-[14vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap"
            style={{ 
              color: "transparent", 
              WebkitTextStroke: "2px var(--text-muted)", 
              opacity: 0.07,
              animationDuration: "75s"
            }}
          >
            <span>MUDAVATH KUMAR • FULL STACK &amp; AI ENGINEER • </span>
            <span>MUDAVATH KUMAR • FULL STACK &amp; AI ENGINEER • </span>
            <span>MUDAVATH KUMAR • FULL STACK &amp; AI ENGINEER • </span>
            <span>MUDAVATH KUMAR • FULL STACK &amp; AI ENGINEER • </span>
          </div>
        </div>
      </div>

      {/* Static Copyright at the absolute bottom of the page */}
      <div
        className="mt-8 text-center text-xs sm:text-sm uppercase tracking-widest relative z-20"
        style={{ color: "var(--text-muted)" }}
      >
        © {new Date().getFullYear()} Mudavath Kumar · Full Stack &amp; AI Engineer
      </div>
    </section>
  );
}