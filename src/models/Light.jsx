



import React, { useRef, useEffect } from "react";
import { PointLightHelper } from "three";

const Light = () => {
  const lightRef1 = useRef();
  const lightRef2 = useRef();

  // Add helpers for debugging (optional)
  useEffect(() => {
    if (lightRef1.current) {
      const helper1 = new PointLightHelper(lightRef1.current, 1);
      lightRef1.current.add(helper1);
    }
    if (lightRef2.current) {
      const helper2 = new PointLightHelper(lightRef2.current, 1);
      lightRef2.current.add(helper2);
    }
  }, []);

  return (
    <>
      {/* General Ambient Lighting */}
      <ambientLight intensity={0.1} color="#ffcc00"/>

      {/* Shooting Star-Specific Lights */}
      <spotLight
        ref={lightRef1}
        position={[5, 20, 15]}
        angle={0.3}
        intensity={0.1}
        castShadow
        color="#ffcc00" // Golden-yellow

        target-position={[0, 0, 0]}
      />
      
      <spotLight
        ref={lightRef2}
        position={[-10, 15, 20]}
        angle={0.2}
        intensity={0.1}
        color="#ffcc00" // Golden-yellow

        castShadow
      />
    </>
  );
};

export default Light;
