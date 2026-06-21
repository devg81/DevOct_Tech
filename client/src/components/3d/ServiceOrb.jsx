import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// Per-service 3D orb; morphs scale/color on hover.
export default function ServiceOrb({ color = "#ffb02e" }) {
  const mesh = useRef(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.4;
    const targetScale = hovered ? 1.25 : 1;
    mesh.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}
