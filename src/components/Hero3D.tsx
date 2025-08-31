
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Canvas>
        <OrbitControls enableZoom={false} />

        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />

        <Float speed={2} rotationIntensity={2}>
          <Text fontSize={1} color="cyan" position={[0, 0, 0]}>
            Sarthak Agarwal
          </Text>
        </Float>

        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Canvas>
    </div>
  );
}
