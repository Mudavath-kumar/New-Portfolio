import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "DSA Trainee",
    company: "SmartInterview",
    period: "Jun 2025 - Present",
    description: "Currently undergoing intensive training in data structures, algorithms, and problem-solving. Engaged in hands-on coding challenges and collaborative sessions with mentors to strengthen programming fundamentals.",
    color: "bg-black",
  },
  {
    title: "Full Stack MERN Intern",
    company: "Webstack Academy",
    period: "Nov 2025 - Dec 2025",
    description: "Designed and developed a full-stack Airbnb-inspired application with listing and booking features using JavaScript and MySQL. Implemented responsive UI with secure authentication flows and built REST APIs.",
    color: "bg-muted-foreground",
  },
  {
    title: "Full-stack Developer Intern",
    company: "Edunet Foundation",
    period: "Apr 2025 - May 2025",
    description: "Developed and maintained web applications using modern frameworks, enhancing user experience and functionality. Collaborated with cross-functional teams to design and implement scalable backend solutions.",
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
