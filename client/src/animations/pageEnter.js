import { gsap } from "./gsap.config.js";

// Shared page-enter animation, used by PageTransition.
export function pageEnter(el) {
  return gsap.fromTo(
    el,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.5 }
  );
}
