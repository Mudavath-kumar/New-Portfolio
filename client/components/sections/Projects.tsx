import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Based Crop Recommendation",
    category: "AI & Agriculture",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
    description: "An intelligent, voice-enabled solution that empowers farmers with data-driven decisions based on soil, climate, and trends.",
    tech: ["AI", "Voice Processing", "Python", "Data Analysis"],
    link: "#",
  },
  {
    title: "MambaTab Fraud Detection",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    description: "Credit card fraud detection system using sequential tabular data with MambaTab architecture. Achieving reliable real-time performance.",
    tech: ["MambaTab", "ML", "Preprocessing", "Tabular Data"],
    link: "#",
  },
  {
    title: "HomelyHub (Airbnb Clone)",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    description: "Full-stack web application developed during internship at WebStack Academy. Allows users to list, browse, and book homes securely.",
    tech: ["JavaScript", "MySQL", "REST API", "Auth"],
    link: "#",
  },
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: -(scrollWidth - viewportWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Reveal title
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-background overflow-hidden">
      <div className="absolute top-20 left-10 md:left-20 z-10">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2 projects-title">Portfolio</h2>
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter projects-title">SELECTED WORKS</h3>
      </div>

      <div ref={scrollRef} className="flex items-center h-full gap-20 px-10 md:px-20 pt-40">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85vw] md:w-[600px] h-[500px] group relative overflow-hidden rounded-[40px] shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <span className="text-sm font-bold tracking-widest uppercase mb-2 opacity-70">
                {project.category}
              </span>
              <h4 className="text-4xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-8 max-w-sm line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full border border-white/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-bold hover:bg-primary hover:text-white transition-colors"
                >
                  Live View <ArrowUpRight size={18} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {/* End of project scroll placeholder */}
        <div className="flex-shrink-0 w-[20vw] h-full" />
      </div>
    </section>
  );
};
