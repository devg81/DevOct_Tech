import { useState } from "react";
import HeaderSlide from "./HeaderSlide.jsx";

export default function SlideShow({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  if (!slide) return null;

  return (
    <div className="slideshow">
      <HeaderSlide title={slide.title} subtitle={slide.subtitle}>
        {slide.content}
      </HeaderSlide>
      <div className="slideshow__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot${i === index ? " slideshow__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
