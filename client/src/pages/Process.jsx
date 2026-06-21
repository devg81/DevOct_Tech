import { useState } from "react";
import ProcessSteps from "../components/sections/ProcessSteps.jsx";
import processData from "../data/process.json";

const FAQ = [
  { q: "How long does a build take?", a: "Most production builds run 6-12 weeks depending on scope." },
  { q: "Do you work fixed-scope or retainer?", a: "Both — we scope it together during Discover." },
  { q: "Who actually writes the code?", a: "The same senior engineers you talk to in the kickoff." },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="page page--process">
      <ProcessSteps steps={processData} />
      <section className="faq">
        {FAQ.map((item, i) => (
          <div key={item.q} className="faq__item">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {item.q}
            </button>
            {openIndex === i && <p>{item.a}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}
