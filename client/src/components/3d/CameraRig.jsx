import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useMouseParallax } from "../../hooks/useMouseParallax.js";

// Wraps scene content and applies subtle mouse-parallax to the camera.
export default function CameraRig({ children, strength = 0.3 }) {
  const group = useRef(null);
  const offset = useMouseParallax(strength);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (offset.x * 0.1 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (offset.y * 0.1 - group.current.rotation.x) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}
