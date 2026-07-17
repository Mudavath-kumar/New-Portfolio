import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Position of center of cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Offset so the element centers on mouse
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      if (isClickable) {
        setHovered(true);
        const text = target.getAttribute("data-cursor-text") || target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");
        if (text) {
          setHoverText(text);
        } else {
          setHoverText("");
        }
      } else {
        setHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer cursor circle */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 9999,
          pointerEvents: "none",
          width: hovered ? 80 : 36,
          height: hovered ? 80 : 36,
          borderRadius: "50%",
          border: hovered ? "2px solid var(--accent-color)" : "1.5px solid var(--text-main)",
          background: hovered ? "rgba(182, 0, 168, 0.08)" : "transparent",
          transformOrigin: "center center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        animate={{
          scale: hovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hoverText && (
          <span className="text-[10px] uppercase font-black tracking-widest text-[#B600A8] whitespace-nowrap px-2">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner dot - follows exactly without nesting useTransform */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 10000,
          pointerEvents: "none",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--accent-color)",
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
      />
    </>
  );
}
