import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Magnetic strength (30px radius as requested)
    x.set(distanceX * 0.4);
    y.set(distanceY * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const firstName = "MUDAVATH";
  const lastName = "KUMAR";
  const firstChars = firstName.split("");
  const lastChars = lastName.split("");

  const roles = ["AI Developer", "Full Stack Dev", "Problem Solver", "CS Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center bg-white overflow-hidden py-20 px-5 sm:px-10 md:px-[120px]"
    >
      {/* Background Accent Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
        }}
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f5f5f0] rounded-full blur-[100px] pointer-events-none opacity-60"
      />

      <div className="flex flex-col w-full relative z-10 text-center">
        {/* TYPOGRAPHY - FULL WIDTH CENTERED */}
        <div className="flex flex-col items-center">
          {/* INTRO LINE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[20px] font-normal text-[#666] tracking-[0.5px] mb-6"
          >
            👋, my name is
          </motion.p>

          {/* NAME — one line on desktop, splits on mobile */}
          <h1 className="flex flex-col md:flex-row flex-wrap justify-center items-center text-[36px] sm:text-[52px] md:text-[72px] lg:text-[96px] font-[800] text-black tracking-[-2px] uppercase mb-0">
            <span className="flex">
              {firstChars.map((char, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 + i * 0.03 }}
                  className="hover:font-[700] transition-all cursor-default inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="hidden md:inline-block">&nbsp;</span>
            <span className="flex">
              {lastChars.map((char, i) => (
                <motion.span
                  key={`l-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.5 + (firstChars.length + 1 + i) * 0.03 }}
                  className="hover:font-[700] transition-all cursor-default inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* ANIMATED ROLE */}
          <div className="relative mt-2 h-[50px] sm:h-[70px] md:h-[100px] lg:h-[130px] flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="text-[32px] sm:text-[48px] md:text-[88px] lg:text-[120px] font-[700] text-black leading-none tracking-[-2px] whitespace-nowrap"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* SUBTITLE */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-[20px] sm:text-[28px] md:text-[42px] lg:text-[56px] font-[700] leading-[1] outline-text-hero mt-1"
          >
            &amp; Problem Solver
          </motion.h3>

          {/* LOCATION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-[18px] font-normal text-[#888] mt-10"
          >
            based in Hyderabad, India.
          </motion.p>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="flex items-center gap-4 mt-6"
          >
            <a
              href="https://www.linkedin.com/in/mudavath-kumar-mudavath-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-[13px] font-[600] text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://github.com/mudavath-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-[13px] font-[600] text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <Github size={15} /> GitHub
            </a>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-5 mt-[50px]"
          >
            <MagneticButton
              className="bg-black text-white px-[32px] py-[18px] rounded-full text-[14px] font-[500] hover:bg-white hover:text-black hover:border-black border border-transparent transition-all shadow-lg"
            >
              You need a developer
            </MagneticButton>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-black border-[1.5px] border-black px-[32px] py-[18px] rounded-full text-[14px] font-[500] hover:bg-black hover:text-white transition-all overflow-hidden relative group/res inline-flex items-center"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
