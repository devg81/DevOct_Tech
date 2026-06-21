import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// 3D helix representing the process timeline; step count drives turns.
export default function ProcessHelix({ steps = 5, color = "#ffb02e" }) {
  const group = useRef(null);

  const nodes = useMemo(() => {
    return Array.from({ length: steps }, (_, i) => {
      const t = (i / steps) * Math.PI * 4;
      return [Math.cos(t) * 1.2, i * 0.6 - (steps * 0.3), Math.sin(t) * 1.2];
    });
  }, [steps]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={group}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}
