import { gsap } from "./gsap.config.js";

// Hero entrance: eyebrow -> headline -> CTA stagger, with the 3D scene fading in alongside.
export function buildHeroTimeline({ eyebrowRef, headlineRef, ctaRef, sceneRef }) {
  const tl = gsap.timeline();

  if (eyebrowRef?.current) {
    tl.from(eyebrowRef.current, { opacity: 0, y: 10, duration: 0.4 });
  }
  if (headlineRef?.current) {
    tl.from(headlineRef.current, { opacity: 0, y: 24, duration: 0.6 }, "-=0.1");
  }
  if (ctaRef?.current) {
    tl.from(ctaRef.current, { opacity: 0, y: 16, duration: 0.4 }, "-=0.2");
  }
  if (sceneRef?.current) {
    tl.from(sceneRef.current, { opacity: 0, duration: 0.8 }, 0);
  }

  return tl;
}
