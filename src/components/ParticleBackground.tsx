import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 3000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, phases] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
      phases[i] = Math.random() * Math.PI * 2;
    }
    return [positions, phases];
  }, [count]);

  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, state.pointer.x * 2, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, state.pointer.y * 2, 0.05);

    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05 + mouse.current.x * 0.2;
      pointsRef.current.rotation.x = mouse.current.y * 0.2;

      const positionsAttr = pointsRef.current.geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        (positionsAttr.array as Float32Array)[i3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + phases[i]) * 0.002;
      }
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#48CAE4"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-sapphire-900">
      <div className="absolute inset-0 bg-gradient-radial from-sapphire-800/50 via-sapphire-900/80 to-sapphire-900 z-0" style={{
        background: 'radial-gradient(ellipse at center, hsl(222 30% 18% / 0.5), hsl(220 39% 11% / 0.8), hsl(220 39% 11%))'
      }} />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="z-10">
        <ambientLight intensity={0.5} />
        <Particles count={4000} />
      </Canvas>
    </div>
  );
}
