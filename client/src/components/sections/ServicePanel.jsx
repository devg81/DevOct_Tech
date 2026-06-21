import ServiceOrb from "../3d/ServiceOrb.jsx";
import SceneCanvas from "../3d/SceneCanvas.jsx";

export default function ServicePanel({ service, active }) {
  return (
    <div className={`service-panel${active ? " service-panel--active" : ""}`}>
      <div className="service-panel__orb">
        <SceneCanvas>
          <ServiceOrb />
        </SceneCanvas>
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <div className="service-panel__stack">
        {service.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
