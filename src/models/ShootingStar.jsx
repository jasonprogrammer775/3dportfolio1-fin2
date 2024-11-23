


// models/ShootingStar.jsx
// import React, { useRef } from 'react';
// import { Line } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';

// const ShootingStar = () => {
//   const lineRef = useRef();

//   useFrame(() => {
//     if (lineRef.current) {
//       lineRef.current.position.x -= 0.5; // Move the shooting star
//       lineRef.current.position.y -= 0.2; // Diagonal movement
//       if (lineRef.current.position.x < -50) {
//         // Reset position if it goes offscreen
//         lineRef.current.position.x = 50;
//         lineRef.current.position.y = Math.random() * 50 - 25; // Randomize height
//       }
//     }
//   });

//   return (
//     <Line
//       ref={lineRef}
//       points={[
//         [0, 0, 0], // Start point
//         [2, -2, 0], // End point (diagonal streak)
//       ]}
//       color="white"
//       lineWidth={1}
//     />







//   );
// };

// export default ShootingStar;

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const ShootingStar = () => {
  const starRef = useRef();

  // Initializing the position and resetting after moving off-screen
  useEffect(() => {
    if (starRef.current) {
      // Start position more to the top-right
      starRef.current.position.set(80, 30, 0); // x: 15 (right), y: 20 (top)
    }
  }, []);

  useFrame(() => {
    if (starRef.current) {
      // Move the star faster in x and y directions to the bottom-left
      starRef.current.position.x -= 0.50; // Increased speed for horizontal movement
      starRef.current.position.y -= 0.05; // Increased vertical speed

      // Reset the star's position after it goes out of view
      if (starRef.current.position.x < -15) {
        starRef.current.position.x = 60; // Reset to top-right
        starRef.current.position.y = Math.random() * 10 + 25; // Randomize height (more towards top)
      }
    }
  });

  return (
    <mesh ref={starRef} scale={[1, 0.1, 0.1]}>
      {/* Use a box or cylinder for a more streak-like appearance */}
      <boxGeometry args={[0.5, 1, 0.1]} />
      <meshStandardMaterial emissive="#ffcc00" emissiveIntensity={20} />
    </mesh>
  );
};

export default ShootingStar;





