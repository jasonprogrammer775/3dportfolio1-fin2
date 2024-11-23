import React, { Suspense, useEffect, useRef, useState, lazy } from "react";
import { Canvas,useFrame,useThree } from "@react-three/fiber";
import Loader from "../components/Loader";
import Boat from "../models/Boat";
import Sky from "../models/Sky";
import Mill from "../models/Mill";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Info from "../components/Info";
import forest from "../assets/forest.mp3";
import { soundoff, soundon } from "../assets/icons";
import { Cloud,OrbitControls } from '@react-three/drei';
import Ocean from "../models/Ocean";
import ShootingStar from '../models/ShootingStar';
import Light from "../models/Light";
import Sparkles from "../models/Sparkle";  // Import the Sparkles component
import Mooon from "../models/Mooon";
import Diver from "../models/Diver";
import Effects from "../models/Effects";

import { useSpring, animated } from '@react-spring/three'  // Import useSpring and animated from react-spring/three

import { extend } from '@react-three/fiber'
import { TransformControls } from 'three-stdlib'
extend({ TransformControls })

import Avatar from '../models/Avatar'; // Import the Avatar model














const MovingCloud = (props) => {
  const cloudRef = useRef();
  
  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.position.x += props.speed; // Move cloud along x-axis
      if (cloudRef.current.position.x > 10) {
        cloudRef.current.position.x = -10; // Reset position for looping
      }
    }
  });

  return <Cloud ref={cloudRef} {...props} />;
};

const Clouds = () => {
  return (
    <>
      <MovingCloud position={[0, 10, 50]} opacity={0.5} speed={0.01} />
      <MovingCloud position={[2, 12, 50]} opacity={0.6} speed={0.02} />
      <MovingCloud position={[-2, 12, 30]} opacity={0.7} speed={0.015} />
      <MovingCloud position={[3, 15, 20]} opacity={0.4} speed={0.01} />
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1}/>
      <Clouds />
 
    </>
  );
};
























    


const Home = () => {
  const audioRef = useRef(new Audio(forest));
  audioRef.current.volume = 0.4; // Set the volume to 50%
  audioRef.current.loop = true; // Enable looping
  


  const [isRotating, setRotating ] = useState(false);
  const [currentStage, setCurrentStage] = useState(true); 
  // Define currentStage and setCurrentStage 
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic){
      audioRef.current.play()
    }
        return () => {
          audioRef.current.pause();
        }

  }, [isPlayingMusic])

  
  const adjustMillForScreenSize = () => {
    let screenScale = [8, 8, 8];
    let screenPosition = [5, 6.5, -10];
    let rotation = [0, 0, 0]

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
 
    } else {
      screenScale = [8, 8, 8];
    
    }

    return [screenScale, screenPosition,rotation];

  }
  const adjustPlaneForScreenSize = () => {
    let screenScale ,
        screenPosition,
        rotation;
       

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
      // rotation = [0, 0, 0]
    } else {
      screenScale = [0, 0, 0]
      screenPosition = [5, 6.5, -10]
      // rotation = [0, 20.1, 0]
   
 
    }

    return [screenScale, screenPosition];
  }




 const [millScale, millPosition,millRotation] = adjustMillForScreenSize();  
 const [planeScale, planePosition] = adjustPlaneForScreenSize();





  return (
     <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
       { currentStage && <Info  currentStage={currentStage} />  }
     
      </div>
     
<Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
     camera={{ position: [5, 5, 50], fov: 75   }}
     >






     <Suspense fallback={<Loader />}> 
    

       <directionalLight position={[1, 1, 1]} intensity={2} />
       <ambientLight intensity={2} />
       
       <Light />
       <ShootingStar />
       <ShootingStar />
      <ShootingStar />
      <ShootingStar />

      <Sparkles />
    <Effects />  
      


      <OrbitControls />
 


        
      <Scene />
      <Diver position={[10, -2.8, 40]} /> 
       <Ocean />
       
       <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        <Plane 
          planeScale={planeScale} // this is the scale of the plane model in the scene
          planePosition={planePosition} // this is the position of the plane model in the scene
         
          isRotating={isRotating} // this is the state of the rotation of the plane model in the scene
          rotation={[0, 20, 0]}
        />
       <Bird />
       <Mooon position={[-70, 40, -35]} scale={[5, 5, 5]}/>
       <Boat />
       <Sky  isRotating={isRotating}/>
       <Mill 
        position={millPosition}
        scale={millScale}
        rotation={millRotation} // this is the rotation of the mill model in the scene    
        isRotating={isRotating} // this is the state of the rotation of the mill model in the scene
        setRotating={setRotating} // this is the function to set the state of the rotation of the mill model in the scene
        setCurrentStage={setCurrentStage} // this is the function to set the current stage of the mill model in the scene

      

       />  
       {/* scale={millScale} position={millPosition} rotation={millRotation} */}

     </Suspense>
     </Canvas>
     <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

     </section>
  )
}

export default Home