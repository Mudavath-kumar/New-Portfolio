import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

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

  const name = "MUDAVATH KUMAR";
  const nameChars = name.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center bg-white overflow-hidden py-20 px-10 md:px-[120px]"
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

      <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] gap-10 md:gap-20 items-center w-full relative z-10 text-center lg:text-left">
        {/* LEFT COLUMN - PORTRAIT */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              rotateX: -mousePosition.y * 0.5,
              rotateY: mousePosition.x * 0.5,
              y: -20,
            }}
            className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[380px] lg:h-[380px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-full group overflow-hidden bg-gray-100"
          >
            {/* BREATHING ANIMATION WRAPPER */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Mudavath Kumar Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-700"
                style={{
                  x: mousePosition.x * -1,
                  y: mousePosition.y * -1,
                  scale: 1.1,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - TYPOGRAPHY */}
        <div className="flex flex-col items-center lg:items-start">
          {/* INTRO LINE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] font-normal text-[#666] tracking-[0.5px] mb-4"
          >
            👋, my name is
          </motion.p>

          {/* NAME */}
          <h1 className="flex flex-wrap justify-center lg:justify-start text-[42px] md:text-[56px] lg:text-[72px] font-[800] text-black tracking-[-1px] uppercase mb-0">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 + i * 0.03 }}
                className="hover:font-[700] transition-all cursor-default inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* TITLE LINE 1 - VIBE CODER */}
          <div className="relative -mt-1 md:-mt-[10px] flex items-center">
            <motion.h2
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[48px] md:text-[72px] lg:text-[96px] font-[700] text-black leading-[0.9] flex items-center gap-2 md:gap-4"
            >
              Vibe C
              <div className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px] flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 1 }}
                  className="w-full h-full border-[1.5px] md:border-[2px] border-black rounded-full flex items-center justify-center group/btn hover:bg-black transition-colors"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 group-hover/btn:text-white group-hover/btn:rotate-45 transition-transform"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
              der
            </motion.h2>
          </div>

          {/* TITLE LINE 2 - OUTLINED */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-[42px] md:text-[56px] lg:text-[96px] font-[700] leading-[0.9] outline-text-hero"
          >
            & Developer
          </motion.h2>

          {/* LOCATION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-[16px] font-normal text-[#888] mt-10"
          >
            based in Hyderabad, India.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-5 mt-[50px]"
          >
            <MagneticButton
              className="bg-black text-white px-[32px] py-[18px] rounded-full text-[14px] font-[500] hover:bg-white hover:text-black hover:border-black border border-transparent transition-all shadow-lg"
            >
              You need a developer
            </MagneticButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-transparent text-black border-[1.5px] border-black px-[32px] py-[18px] rounded-full text-[14px] font-[500] hover:bg-black hover:text-white transition-all overflow-hidden relative group/res"
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black -z-0"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
