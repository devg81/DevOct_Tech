import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Slow-rotating abstract sphere for the About page.
export default function AboutSphere() {
  const mesh = useRef(null);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.4, 32, 32]} />
      <meshStandardMaterial color="#3d5c56" wireframe />
    </mesh>
  );
}
