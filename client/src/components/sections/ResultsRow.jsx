import caseStudies from "../../data/caseStudies.json";
import SectionLabel from "../ui/SectionLabel.jsx";

export default function ResultsRow() {
  return (
    <section className="results-row">
      <SectionLabel>results</SectionLabel>
      <div className="results-row__grid">
        {caseStudies.map((c) => (
          <article key={c.id} className="results-row__card">
            <span className="results-row__index">{c.id}</span>
            <h4>{c.client}</h4>
            <p>{c.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
