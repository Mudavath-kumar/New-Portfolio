import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./Buttons";
import { Magnet } from "./Magnet";

const NAV = ["About", "Skills", "Projects", "Contact"];

export function HeroSection() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for hero content
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.6], [0, 10]);
  const filter = useMotionTemplate`blur(${heroBlur}px)`;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transition");
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    setTimeout(() => document.documentElement.classList.remove("theme-transition"), 400);
  };

  return (
    <>
      {/* Sticky Glass Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`glass-nav ${scrolled ? "scrolled" : ""}`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1800px] mx-auto">
          <div className="flex gap-5 sm:gap-7 md:gap-10">
            {NAV.map((n, i) => (
              <Magnet key={n} padding={80} strength={4}>
                <motion.a
                  href={`#${n.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="nav-link font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.2rem]"
                  style={{ color: "var(--text-main)" }}
                >
                  {n}
                </motion.a>
              </Magnet>
            ))}
          </div>

          {/* Theme Toggle */}
          <Magnet padding={60} strength={5}>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-main)",
                background: "var(--bg-card)",
                transition: "border-color 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-color)";
                e.currentTarget.style.color = "var(--accent-color)";
                e.currentTarget.style.transform = "rotate(180deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-main)";
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              )}
            </motion.button>
          </Magnet>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col justify-between relative px-6 md:px-12 py-8 md:py-12 pt-24"
        style={{ background: "var(--bg-main)", overflow: "hidden" }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            height: "50vh",
            background: "radial-gradient(ellipse at center, rgba(182, 0, 168, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
            opacity: "var(--glow-opacity)",
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Hero Name — parallax on scroll */}
        <motion.div
          className="flex flex-col items-center justify-center text-center relative z-10 flex-1 py-4"
          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
            filter,
            willChange: "transform, opacity, filter",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center select-none"
          >
            <motion.span
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-heading font-black uppercase tracking-tighter leading-[0.88] block text-[14vw] sm:text-[15vw] md:text-[16vw]"
            >
              Mudavath
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-heading font-black uppercase tracking-tighter leading-[0.88] block text-[14vw] sm:text-[15vw] md:text-[16vw]"
            >
              Kumar
            </motion.span>
          </motion.h1>

          {/* Role subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 uppercase tracking-[0.3em] text-xs sm:text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Full Stack Developer · AI Engineer
          </motion.p>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-20 w-full"
          style={{ opacity: heroOpacity }}
        >
          <FadeIn delay={0.5} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[260px] sm:max-w-[320px]"
              style={{
                fontSize: "clamp(0.75rem, 1.2vw, 1.1rem)",
                color: "var(--text-muted)",
              }}
            >
              CS engineer &amp; problem solver based in Hyderabad, India — building full stack &amp; AI-driven products
            </p>
          </FadeIn>
          <FadeIn delay={0.6} y={20}>
            <ContactButton />
          </FadeIn>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          style={{ opacity: heroOpacity as any }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5"
            style={{ borderColor: "var(--border-color)" }}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--accent-color)" }}
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}