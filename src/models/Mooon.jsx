


import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring,a } from '@react-spring/three';

import mooonScene from '../assets/mooon.glb';

const Mooon = (props) => {
  const mooonRef = useRef();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(mooonScene);
  const { actions } = useAnimations(animations, group);

  // Animation: Rotate the moon
  useFrame(() => {
    if (mooonRef.current) {
      mooonRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return (
    <a.group ref={mooonRef} {...props}>
      <group ref={group} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="b6ce744a1d2a40eba45e0c7491dd01ccfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Sphere" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Sphere_moon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_moon_0.geometry}
                    material={materials.moon}
                  />
                </group>
                {/* Other groups can go here */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Mooon;