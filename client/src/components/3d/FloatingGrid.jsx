import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Perspective grid plane used behind the hero — reinforces the "engineering" feel.
export default function FloatingGrid({ color = "#3d5c56" }) {
  const mesh = useRef(null);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.position.z = (mesh.current.position.z + delta * 0.3) % 1;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[20, 20, 24, 24]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}
