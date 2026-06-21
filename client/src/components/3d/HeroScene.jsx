import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import CameraRig from "./CameraRig.jsx";
import ParticleField from "./ParticleField.jsx";
import FloatingGrid from "./FloatingGrid.jsx";

// Floating geometric mesh + particle field for the Home hero.
export default function HeroScene() {
  const mesh = useRef(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <CameraRig>
      <FloatingGrid />
      <ParticleField />
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#ffb02e" wireframe />
      </mesh>
    </CameraRig>
  );
}
