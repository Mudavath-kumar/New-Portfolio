import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Global Solutions",
    period: "2022 - Present",
    description: "Leading the development of high-performance web applications using React, Node.js, and AWS. Improved system scalability by 40%.",
    color: "bg-blue-500",
  },
  {
    title: "Web Developer",
    company: "Digital Dynamics",
    period: "2020 - 2022",
    description: "Built responsive and interactive user interfaces for various clients. Specialized in animation and performance optimization.",
    color: "bg-purple-500",
  },
  {
    title: "Frontend Intern",
    company: "StartUp Hub",
    period: "2019 - 2020",
    description: "Assisted in developing the core product features. Learned modern frontend practices and version control.",
    color: "bg-pink-500",
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
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter">EXPERIENCE</h3>
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
                    <span className="text-sm font-bold text-muted-foreground mb-2 block">{exp.period}</span>
                    <h4 className="text-2xl font-bold mb-1">{exp.title}</h4>
                    <p className="text-primary font-bold mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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
