import process from "../../data/process.json";
import SectionLabel from "../ui/SectionLabel.jsx";
import SceneCanvas from "../3d/SceneCanvas.jsx";
import ProcessHelix from "../3d/ProcessHelix.jsx";

export default function ProcessSteps() {
  return (
    <section className="process-steps">
      <SectionLabel>process</SectionLabel>
      <div className="process-steps__layout">
        <div className="process-steps__helix">
          <SceneCanvas>
            <ProcessHelix steps={process.length} />
          </SceneCanvas>
        </div>
        <ol className="process-steps__list">
          {process.map((p) => (
            <li key={p.step}>
              <span className="process-steps__index">{String(p.step).padStart(2, "0")}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
