


import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Sparkles = () => {
  const pointsRef = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 50; i++) {  // Reducing the number of particles to make it less dense
      // Move particles more to the right (by changing the x values)
      positions.push(
        Math.random() * 10 + 15,    // X: position it more to the right
        Math.random() * 20 - 10,    // Y: spread out in the Y axis
        Math.random() * 20 - 10     // Z: spread out in the Z axis
      );
    }
    return new Float32Array(positions);
  });

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.002;
      pointsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial size={0.3} color="#ffcc00" emissive="#ffcc00" emissiveIntensity={1} />
    </Points>
  );
};

export default Sparkles;


