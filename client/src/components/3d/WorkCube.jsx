import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

// 3D card flip used for case study entries in Work.jsx.
export default function WorkCube({ flipped = false, color = "#3d5c56" }) {
  const mesh = useRef(null);

  useFrame(() => {
    if (!mesh.current) return;
    const target = flipped ? Math.PI : 0;
    mesh.current.rotation.y += (target - mesh.current.rotation.y) * 0.1;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1.4, 1, 0.08]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
