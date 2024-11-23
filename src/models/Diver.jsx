



import React, { useRef, useEffect,useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import diverScene from '../assets/diver.glb'







const Diver = (props) =>{
  const diverRef = useRef()
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(diverScene)
  const { actions } = useAnimations(animations, diverRef)

  // State to control the diver's position and movement direction
  useEffect(() => {
    console.log(actions); // Log available actions to the console

    const animationName = 'layer0.001'; // Change this to the correct animation name if needed
    if (actions[animationName]) {
      actions[animationName].play(); // Play the animation if it exists
    } else {
      console.warn(`Animation '${animationName}' not found`);
    }
  }, [actions]);

  // Animation logic to move the diver to the right
  useFrame(() => {
    if (diverRef.current) {
      diverRef.current.position.x += 0.01; // Move to the right by 0.01 units each frame
    }
  });



  return (





    <a.group ref={diverRef}  {...props} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_73" rotation={[Math.PI / 2, 0, 0]} scale={0.262}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Cable_Oxigeno}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Caso}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Caso_light}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Chaleco}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Buso}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Buso_Stroke}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Buso_Stroke_2}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.Lentes}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Lentes_Respirador}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.Lentes_Glass}
                    skeleton={nodes.Object_20.skeleton}
                  />
                  <skinnedMesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.Linterna}
                    skeleton={nodes.Object_22.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Linterna_Light}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Oxigeno}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.Oxigeno_Stroke}
                    skeleton={nodes.Object_26.skeleton}
                  />
                  <skinnedMesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials.Paletas}
                    skeleton={nodes.Object_28.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.Paleta_Stroke_Back}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <group name="Cable_Oxigeno_Cylinder004_65" />
                  <group name="Casco_Mesh_66" />
                  <group name="Chaleco_BodyMesh001_67" />
                  <group name="Cuerpo_HeadMesh_68" />
                  <group name="Lentes_Swimming_goggles_69" />
                  <group name="Linterna_Cylinder007_70" />
                  <group name="Oxigeno_Sphere_71" />
                  <group name="Paletas_Plane_72" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

export default Diver;



