import { useEffect, useState } from "react";

// 3D preloader — shown while shaders/assets warm up, then fades out.
export default function LoaderOverlay({ done = false }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }
  }, [done]);

  if (!visible) return null;

  return (
    <div className={`loader-overlay${done ? " loader-overlay--out" : ""}`}>
      <span className="loader-overlay__text">// booting devoct_</span>
    </div>
  );
}
