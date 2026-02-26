import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Internships", value: "2" },
  { label: "Technologies", value: "15+" },
  { label: "Years Learning", value: "3+" },
];

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[#f9f9f7] py-24 md:py-32 px-5 sm:px-10 md:px-[120px] overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[13px] font-[600] uppercase tracking-[4px] text-[#888] mb-3">
            Get to know me
          </p>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-[800] text-black leading-[1] tracking-[-1px]">
            About Me
          </h2>
          <div className="mt-4 h-[3px] w-[60px] bg-black rounded-full" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_40%] gap-16 items-center">
          {/* LEFT — Text content */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[17px] md:text-[18px] leading-[1.85] text-[#444] font-[400]"
            >
              I am a motivated{" "}
              <span className="font-[700] text-black">
                Computer Science and Engineering
              </span>{" "}
              student with strong skills in{" "}
              <span className="font-[700] text-black">
                full-stack development
              </span>{" "}
              and{" "}
              <span className="font-[700] text-black">cloud technologies</span>.
              I have hands-on experience with HTML, CSS, JavaScript, React,
              Java, Django, and AWS through academic projects and internships.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[17px] md:text-[18px] leading-[1.85] text-[#444] font-[400]"
            >
              I am passionate about building{" "}
              <span className="font-[700] text-black">scalable applications</span>{" "}
              and solving real-world problems using modern technology. With a
              continuous learning mindset, I aim to grow as a software engineer
              and contribute to{" "}
              <span className="font-[700] text-black">innovative organizations</span>.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {[
                "React",
                "TypeScript",
                "Java",
                "Django",
                "AWS",
                "Node.js",
                "HTML/CSS",
                "JavaScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 border border-black/15 rounded-full text-[13px] font-[500] text-[#333] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black text-white px-[28px] py-[14px] rounded-full text-[14px] font-[500] hover:bg-white hover:text-black border border-black transition-all duration-300 shadow-md"
              >
                Let's Connect
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Portrait image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-black/10" />
              <div className="absolute -bottom-8 -right-8 w-full h-full rounded-2xl border border-black/5" />

              {/* Main image container */}
              <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] group">
                <motion.img
                  src="/profile.jpg"
                  alt="Mudavath Kumar"
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 150 }}
                className="absolute -left-10 top-[30%] bg-white rounded-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-black/5"
              >
                <p className="text-[11px] font-[600] uppercase tracking-[2px] text-[#888]">
                  Status
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[13px] font-[700] text-black">
                    Open to Work
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-10 border-t border-black/10">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat text-center md:text-left">
              <p className="text-[40px] md:text-[48px] font-[800] text-black leading-none tracking-[-1px]">
                {stat.value}
              </p>
              <p className="text-[14px] text-[#888] font-[500] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
