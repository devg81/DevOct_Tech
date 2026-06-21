import { gsap } from "./gsap.config.js";

// Shared page-exit animation, used by PageTransition.
export function pageExit(el) {
  return gsap.to(el, { opacity: 0, y: -16, duration: 0.3 });
}
