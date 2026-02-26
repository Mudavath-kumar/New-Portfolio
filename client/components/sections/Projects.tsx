import gsap from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "AgriTech AI — Smart Farming",
    category: "AI & Agriculture",
    image: "aicrop.jpg",
    description: "Revolutionary AI-powered crop recommendation platform using real-time data fusion, predictive analytics, and personalized insights. Features soil analysis, disease scanner, weather integration and market data.",
    tech: ["React", "AI/ML", "Python", "Data Analytics", "Weather API"],
    link: "https://agri-tech-ai.vercel.app/",
    github: "https://github.com/Mudavath-kumar/agri-gyan-",
  },
  {
    title: "Recipe Sharing Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    description: "A full-stack recipe sharing platform built at Edunet Foundation. Users can browse, add, and share recipes with an intuitive interface and seamless user experience.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
    link: "https://v0-recipe-adding-platform.vercel.app/",
    github: "https://github.com/Mudavath-kumar/recipe-adding-platform-01",
  },
  {
    title: "Fraud Detection System",
    category: "Machine Learning",
    image: "creditcard.jpg",
    description: "Credit card fraud detection system using MambaTab architecture for sequential tabular data. Features batch analysis, confusion matrix visualization, probability distribution, and real-time risk scoring.",
    tech: ["MambaTab", "ML", "Python", "Data Viz", "Tabular Data"],
    link: "#",
    github: "https://github.com/Mudavath-kumar/Mini-Project--3-2",
  },
  {
    title: "HomelyHub — Airbnb Clone",
    category: "Full Stack",
    image: "AirbnbClone.jpg",
    description: "Full-stack Airbnb-inspired web application developed during internship at WebStack Academy. Allows users to list, browse, and book homes with secure authentication and REST APIs.",
    tech: ["JavaScript", "MySQL", "REST API", "Auth", "Node.js"],
    link: "https://homelyhub-app.vercel.app/",
    github: "https://github.com/Mudavath-kumar/Webstack-acadamy-Project",
  },
];

// Duplicate for seamless infinite loop
const loopedProjects = [...projects, ...projects];

export const Projects = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait one frame so DOM is fully painted and scrollWidth is accurate
    const raf = requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;

      tweenRef.current = gsap.to(track, {
        x: -halfWidth,
        duration: halfWidth / 80, // speed: px per second
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x) % halfWidth;
            return `${val}px`;
          },
        },
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      tweenRef.current?.kill();
    };
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden">
      {/* Heading */}
      <div className="px-5 sm:px-10 md:px-20 mb-14">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Portfolio</h2>
        <h3 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter">SELECTED WORKS</h3>
      </div>

      {/* Carousel track — fade edges */}
      <div
        className="relative w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div ref={trackRef} className="flex gap-8 px-8 will-change-transform">
          {loopedProjects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={pause}
              onMouseLeave={resume}
              className="flex-shrink-0 w-[340px] md:w-[480px] h-[420px] md:h-[500px] group relative overflow-hidden rounded-[32px] shadow-2xl cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold tracking-widest uppercase mb-2 opacity-60">
                  {project.category}
                </span>
                <h4 className="text-2xl md:text-3xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-5 text-sm line-clamp-2 max-w-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 rounded-full border border-white/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    Live View <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
