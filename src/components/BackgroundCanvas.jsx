import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Starfield(props) {
  const ref = useRef();
  const [positions, colors] = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      const isIndigo = Math.random() > 0.45;
      cols[i * 3] = isIndigo ? 0.38 : 0.54;
      cols[i * 3 + 1] = isIndigo ? 0.40 : 0.36;
      cols[i * 3 + 2] = isIndigo ? 0.94 : 0.96;
    }
    return [pos, cols];
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent vertexColors size={0.035} sizeAttenuation depthWrite={false} opacity={0.65} />
      </Points>
    </group>
  );
}

function FloatingOrb() {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t / 2) * 0.3;
      meshRef.current.rotation.x = Math.sin(t / 4);
      meshRef.current.rotation.y = Math.cos(t / 4);
    }
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0, -2]}>
      <icosahedronGeometry args={[1.4, 2]} />
      <meshBasicMaterial wireframe color="#6366F1" transparent opacity={0.12} />
    </mesh>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <Starfield />
        <FloatingOrb />
      </Canvas>
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#6366F1]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
    </div>
  );
}
