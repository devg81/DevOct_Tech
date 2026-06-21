import team from "../../data/team.json";
import SectionLabel from "../ui/SectionLabel.jsx";

export default function AboutStrip() {
  return (
    <section className="about-strip">
      <SectionLabel>about</SectionLabel>
      <p className="about-strip__statement">
        Small studio, senior team, no handoffs to people who didn't write the code.
      </p>
      <div className="about-strip__team">
        {team.map((person) => (
          <div key={person.name} className="about-strip__person">
            <span>{person.name}</span>
            <span>{person.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
