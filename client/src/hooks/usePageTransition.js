import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

// Fires a GSAP timeline whenever the route changes.
export function usePageTransition(buildTimeline) {
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();
    if (typeof buildTimeline === "function") buildTimeline(tl);
    return () => tl.kill();
  }, [location.pathname, buildTimeline]);
}
