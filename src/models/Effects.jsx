

import React from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";


const Effects = () => {
  return (
    <EffectComposer>
      <Bloom intensity={0.05} threshold={0.02} />
      <Noise opacity={0.01} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

export default Effects;
