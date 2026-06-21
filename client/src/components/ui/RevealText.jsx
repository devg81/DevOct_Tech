import { useInView } from "../../hooks/useInView.js";

// Wraps text and reveals it on scroll. GSAP split-text upgrade can replace
// the CSS class toggle here without changing the component's API.
export default function RevealText({ children, as = "p" }) {
  const [ref, inView] = useInView();
  const Tag = as;

  return (
    <Tag ref={ref} className={`reveal-text${inView ? " reveal-text--in" : ""}`}>
      {children}
    </Tag>
  );
}
