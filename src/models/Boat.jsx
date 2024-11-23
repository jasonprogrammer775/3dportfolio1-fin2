
import { useGLTF } from "@react-three/drei"

import boatScene from '../assets/boat.glb'



const boat = () => {
    const boat = useGLTF(boatScene)
  return (
    <mesh position={[30, 5.5, 6]} scale={[2.1, 2.2, 3.5]} rotation={[0, 2.0, 0]}>
        
        <primitive object={boat.scene} />
    </mesh>
  )
}

export default boat