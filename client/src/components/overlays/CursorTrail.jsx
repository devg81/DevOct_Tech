import { useEffect, useRef } from "react";

// Lightweight custom cursor dot with trailing easing — no canvas/WebGL
// dependency so it stays cheap on lower-end devices.
export default function CursorTrail() {
  const dot = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e) {
      target.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", onMove);

    let raf;
    function loop() {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dot} className="cursor-trail" aria-hidden="true" />;
}
