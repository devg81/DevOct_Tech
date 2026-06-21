import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView.js";

export default function MetricCounter({ value, suffix = "", label }) {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="metric-counter">
      <span className="metric-counter__value">
        {count}
        {suffix}
      </span>
      <span className="metric-counter__label">{label}</span>
    </div>
  );
}
