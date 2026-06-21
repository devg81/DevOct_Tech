import AboutStrip from "../components/sections/AboutStrip.jsx";
import SceneCanvas from "../components/3d/SceneCanvas.jsx";
import AboutSphere from "../components/3d/AboutSphere.jsx";

export default function About() {
  return (
    <main className="page page--about">
      <div className="page--about__sphere">
        <SceneCanvas>
          <AboutSphere />
        </SceneCanvas>
      </div>
      <AboutStrip />
    </main>
  );
}
