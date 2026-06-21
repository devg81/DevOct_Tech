import { useRef } from "react";
import SceneCanvas from "../3d/SceneCanvas.jsx";
import HeroScene from "../3d/HeroScene.jsx";
import Button from "../ui/Button.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import MetricCounter from "../ui/MetricCounter.jsx";

export default function HeroSection() {
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <section className="hero">
      <div className="hero__scene">
        <SceneCanvas>
          <HeroScene />
        </SceneCanvas>
      </div>

      <div className="hero__content">
        <p ref={eyebrowRef} className="hero__eyebrow">
          <SectionLabel>devoct / engineering studio</SectionLabel>
        </p>
        <h1 ref={headlineRef} className="hero__headline">
          Software for everything
          <br />
          you build.
        </h1>
        <p className="hero__subhead">
          Engineering, design, and infrastructure — shipped by the people who built it.
        </p>
        <div ref={ctaRef} className="hero__cta">
          <Button as="a" href="/contact">
            start a project
          </Button>
          <a href="/work" className="link-underline hero__cta-link">
            see the work
          </a>
        </div>

        <div className="hero__metrics">
          <MetricCounter value={38} suffix="+" label="systems shipped" />
          <MetricCounter value={6} label="years in production" />
          <MetricCounter value={99} suffix="%" label="uptime across builds" />
        </div>
      </div>
    </section>
  );
}
