import { Canvas } from "@react-three/fiber";

// Shared R3F <Canvas> root. Mount once per page; children are the
// page-specific 3D content (HeroScene, AboutSphere, etc).
export default function SceneCanvas({ children, camera = { position: [0, 0, 5], fov: 45 } }) {
  return (
    <Canvas camera={camera} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffb02e" />
      {children}
    </Canvas>
  );
}
