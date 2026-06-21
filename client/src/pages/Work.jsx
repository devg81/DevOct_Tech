import { useState } from "react";
import caseStudies from "../data/caseStudies.json";
import services from "../data/services.json";
import SectionLabel from "../components/ui/SectionLabel.jsx";

export default function Work() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? caseStudies : caseStudies.filter((c) => c.tags.includes(filter));

  return (
    <main className="page page--work">
      <SectionLabel>work</SectionLabel>
      <div className="page--work__filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          all
        </button>
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => setFilter(s.id)}
            className={filter === s.id ? "active" : ""}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div className="page--work__grid">
        {filtered.map((c) => (
          <article key={c.id}>
            <span>{c.id}</span>
            <h3>{c.client}</h3>
            <p>{c.result}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
