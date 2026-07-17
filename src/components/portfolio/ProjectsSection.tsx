import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LiveProjectButton, GithubProjectButton } from "./Buttons";
import { SplitHeading } from "./SplitHeading";

const PROJECTS = [
  {
    n: "01",
    category: "AI & Agriculture",
    name: "AgriVision AI – AI-Powered Crop Recommendation System",
    description: "An intelligent agriculture platform that provides AI-powered crop recommendations, yield prediction, weather intelligence, soil analysis, and market insights using real-time APIs and Supabase, helping farmers make informed and sustainable farming decisions.",
    live: "https://agri-tech-ai.vercel.app/",
    github: "https://github.com/Mudavath-kumar/agri-gyan-",
    img1: "/Project/Agritect/18.07.2026_02.21.33_REC.png",
    img2: "/Project/Agritect/18.07.2026_02.22.04_REC.png",
    img3: "/Project/Agritect/18.07.2026_02.23.05_REC.png",
  },
  {
    n: "02",
    category: "Deep Learning",
    name: "MambaTab – Selective State Space Model for Fraud Detection",
    description: "A Mamba-inspired Selective State Space Model (SSM) built with PyTorch for efficient credit card fraud detection. The model leverages linear-time sequence modeling, selective state transitions, and explainable AI techniques to accurately identify fraudulent transactions.",
    github: "https://github.com/Mudavath-kumar/Mini-Project--3-2",
    img1: "/Project/Mambatab%20Credit/Screenshot%202026-01-06%20100625.png",
    img2: "/Project/Mambatab%20Credit/Screenshot%202026-01-25%20130353.png",
    img3: "/Project/Mambatab%20Credit/Screenshot%202026-01-25%20190413.png",
  },
  {
    n: "03",
    category: "Full Stack",
    name: "HomelyHub – Full-Stack Vacation Rental Platform",
    description: "A MERN-based property booking platform where users can search, book, and review vacation rentals, while hosts manage listings, bookings, and earnings through a dedicated dashboard with secure authentication and responsive design.",
    live: "https://homelyhub-app.vercel.app/",
    github: "https://github.com/Mudavath-kumar/Webstack-acadamy-Project",
    img1: "/Project/Airbnbclone/18.07.2026_02.17.34_REC.png",
    img2: "/Project/Airbnbclone/18.07.2026_02.18.34_REC.png",
    img3: "/Project/Airbnbclone/18.07.2026_02.20.25_REC.png",
  },
  {
    n: "04",
    category: "Full Stack",
    name: "Recipe Haven – Full-Stack Recipe Sharing Platform",
    description: "A MERN-based recipe management application that enables users to securely create, update, delete, and discover recipes with category filtering, JWT authentication, and a responsive user experience.",
    live: "https://v0-recipe-adding-platform.vercel.app/",
    github: "https://github.com/Mudavath-kumar/recipe-adding-platform-01",
    img1: "/Project/Recipe-project/18.07.2026_02.24.20_REC.png",
    img2: "/Project/Recipe-project/18.07.2026_02.24.50_REC.png",
    img3: "/Project/Recipe-project/18.07.2026_02.25.35_REC.png",
  },
];

function ProjectImage({ src, className, style, parallaxAmount = 20 }: { src: string; className?: string; style?: React.CSSProperties; parallaxAmount?: number }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-parallaxAmount, parallaxAmount]);

  return (
    <div ref={imgRef} className={`overflow-hidden ${className || ""}`} style={style}>
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover hover:scale-105"
        style={{
          y: imgY,
          scale: 1.1, // extra scale to prevent parallax gaps
          transition: "transform 0.7s ease-out",
        }}
      />
    </div>
  );
}

function ProjectCard({ p, i, total, progress }: { p: (typeof PROJECTS)[number]; i: number; total: number; progress: any }) {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-[85vh] sticky" style={{ top: `${96 + i * 28}px` }}>
      <motion.div
        ref={cardRef}
        style={{
          scale,
          transformOrigin: "top center",
          borderColor: "var(--border-color)",
          background: "var(--bg-main)",
        }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 h-full flex flex-col gap-6 transition-shadow duration-500"
        data-cursor-text="Open"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-color)";
          e.currentTarget.style.boxShadow = "0 25px 60px rgba(182,0,168,0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div style={{ background: "var(--bg-main)" }} className="h-full flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="hero-heading font-black leading-none" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
                {p.n}
              </div>
              <div className="flex flex-col">
                <span className="uppercase tracking-widest text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>{p.category}</span>
                <span className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)", color: "var(--text-main)" }}>{p.name}</span>
                <p className="text-xs sm:text-sm mt-2 max-w-[450px] font-normal leading-relaxed text-balance" style={{ color: "var(--text-muted)" }}>
                  {p.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {p.live && <LiveProjectButton href={p.live} label="Live Demo" />}
              {p.github && <GithubProjectButton href={p.github} />}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-5 gap-3 sm:gap-4 md:gap-6 overflow-hidden">
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-6">
              <ProjectImage
                src={p.img1}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[var(--border-color)]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
                parallaxAmount={15}
              />
              <ProjectImage
                src={p.img2}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[var(--border-color)]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
                parallaxAmount={25}
              />
            </div>
            <ProjectImage
              src={p.img3}
              className="col-span-3 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[var(--border-color)]"
              parallaxAmount={20}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-28">
        <SplitHeading
          text="Projects"
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          stagger={0.04}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} p={p} i={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}