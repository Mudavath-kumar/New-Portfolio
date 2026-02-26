import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Trainee",
    company: "Smart Interviews",
    location: "On-site",
    period: "May 2025 - Present",
    description: "Currently working as a trainee at Smart Interviews, focusing on data structures, algorithms, and problem-solving skills development.",
    responsibilities: [
      "Participating in intensive training programs focused on data structures and algorithms",
      "Solving complex coding problems and improving problem-solving skills",
      "Learning advanced programming concepts and best practices",
      "Collaborating with peers and mentors to enhance technical knowledge",
    ],
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Coding", "Programming"],
    color: "bg-black",
  },
  {
    title: "Full-stack Developer",
    company: "Edunet Foundation",
    location: "Hyderabad, India",
    period: "March 2025 - Present",
    description: "Developing a recipe sharing platform at Edunet Foundation, collaborating with team members to enhance user experience.",
    responsibilities: [
      "Developed a recipe sharing platform collaborating with team members to enhance user experience",
      "Implemented innovative features to improve platform functionality and user engagement",
      "Successfully launched the project, contributing to the growth of the foundation's online presence",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    color: "bg-primary",
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".experience-item");
      
      items.forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -100,
          duration: 1,
          ease: "power4.out",
        });
      });

      // Timeline line animation
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Journey</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter">EXPERIENCE</h3>
        </div>

        <div ref={triggerRef} className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item flex flex-col md:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="glass dark:glass-dark p-8 rounded-3xl hover:border-primary transition-colors duration-500 group relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-2 h-full ${exp.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{exp.period}</span>
                        <h4 className="text-2xl font-bold mt-1 mb-0.5">{exp.title}</h4>
                        <p className="text-primary font-bold">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-5">{exp.description}</p>
                    <div className="mb-5">
                      <p className="text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Key Responsibilities</p>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-2 text-foreground">Skills Applied</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((s) => (
                          <span key={s} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
