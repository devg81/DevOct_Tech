import { useState } from "react";
import services from "../../data/services.json";
import ServicePanel from "./ServicePanel.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";

export default function ServicesIndex() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section className="services-index">
      <SectionLabel>services</SectionLabel>
      <div className="services-index__layout">
        <nav className="services-index__sidebar">
          {services.map((s) => (
            <button
              key={s.id}
              className={`services-index__tab${activeId === s.id ? " services-index__tab--active" : ""}`}
              onClick={() => setActiveId(s.id)}
            >
              {s.title}
            </button>
          ))}
        </nav>
        <div className="services-index__panels">
          {services.map((s) => (
            <ServicePanel key={s.id} service={s} active={activeId === s.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
