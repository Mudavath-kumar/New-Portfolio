import { useEffect, useRef } from "react";

export function SmoothCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const current = { x: -40, y: -40, angle: -28 };
    const target = { x: -40, y: -40, angle: -28 };

    const onMove = (event: PointerEvent) => {
      const dx = event.clientX - target.x;
      const dy = event.clientY - target.y;
      target.x = event.clientX;
      target.y = event.clientY;
      if (Math.abs(dx) + Math.abs(dy) > 2) target.angle = Math.atan2(dy, dx) * 180 / Math.PI + 45;
      cursor.dataset["visible"] = "true";
    };
    const onLeave = () => delete cursor.dataset["visible"];
    const animate = () => {
      current.x += (target.x - current.x) * 0.22;
      current.y += (target.y - current.y) * 0.22;
      const angleDelta = ((target.angle - current.angle + 540) % 360) - 180;
      current.angle += angleDelta * 0.16;
      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) rotate(${current.angle}deg)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={cursorRef} className="smooth-cursor" aria-hidden="true">
      <svg viewBox="0 0 32 32" focusable="false"><path d="M6 3.5 27.5 16 17 18.7 12.8 29z" /></svg>
    </div>
  );
}