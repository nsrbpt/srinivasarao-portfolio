'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuralMesh() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;

  // Generate particles & clone for original targets
  const [positions, colors, originalPositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Teal color #00f5c4 -> rgb(0, 245, 196)
      col[i * 3] = 0;
      col[i * 3 + 1] = 0.96;
      col[i * 3 + 2] = 0.77;
    }

    const orig = new Float32Array(pos); // clone for physics return state
    return [pos, col, orig];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    // Slowly rotate the entire system
    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.03;
    linesRef.current.rotation.y += delta * 0.05;
    linesRef.current.rotation.x += delta * 0.03;

    // Mouse Interaction Physics
    const p = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Project mouse NDC [-1, 1] to approximate 3D world space
    const mouseX = state.pointer.x * 12;
    const mouseY = state.pointer.y * 12;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      
      const px = p[idx];
      const py = p[idx + 1];
      const pz = p[idx + 2]; 

      // original target
      const tx = originalPositions[idx];
      const ty = originalPositions[idx + 1];
      const tz = originalPositions[idx + 2];

      const dx = px - mouseX;
      const dy = py - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 4.0) {
        // Force field repulsion radially outward from mouse
        const force = (4.0 - dist) * 0.1;
        p[idx] += dx * force;
        p[idx + 1] += dy * force;
      } else {
        // Spring lerp back to original position
        p[idx] += (tx - px) * 0.03;
        p[idx + 1] += (ty - py) * 0.03;
        p[idx + 2] += (tz - pz) * 0.03;
      }
    }
    
    // Notify Three.js to re-upload buffer to GPU
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    if(linesRef.current.geometry.attributes.position) {
       linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={1} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
           <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00f5c4" transparent opacity={0.10} />
      </lineSegments>
    </group>
  );
}
