import { useEffect, useState } from "react";

// Tracks mouse position as -1 -> 1 offsets from center, for parallax effects.
export function useMouseParallax(strength = 1) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2 * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * 2 * strength;
      setOffset({ x, y });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength]);

  return offset;
}
