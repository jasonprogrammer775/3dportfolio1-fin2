


import { Html } from "@react-three/drei";




// import { Html, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { extend } from '@react-three/fiber'
// import { OrbitControls, TransformControls } from 'three-stdlib'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import   Avatar  from '../models/Avatar' // Import your Avatar component he
// extend({ OrbitControls, TransformControls })

// // Register GLTFLoader with Three.js
// extend({ GLTFLoader })






const Loader = () => {

  return (





    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin">Loading…</div>
      </div>
    </Html>

   
  );
};

export default Loader;






// import React from "react";
// import { Lottie } from "lottie-react";
// import animationData from "../assets/animations/jay.json";
//  // Replace with your Lottie JSON file

//  const Loader = () => {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
   
//     fetch("/jay.json") // Replace with your file URL
//       .then((response) => response.json())
//       .then((data) => setAnimationData(data));
     
//   }, []);

//   if (!animationData) return <div>Loading animation...</div>;

//   return (
//     <div className="flex items-center justify-center h-full">
//       <Lottie animationData={animationData} loop={true} className="w-48 h-48" />
//     </div>
//   );
// };

// export default Loader;


















// import React from "react";
// import { Html, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { extend } from '@react-three/fiber'
// import { OrbitControls, TransformControls } from 'three-stdlib'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import   Avatar  from '../models/Avatar' // Import your Avatar component he
// extend({ OrbitControls, TransformControls })

// // Register GLTFLoader with Three.js
// extend({ GLTFLoader })

// // Create a custom component for yo






// const Loader = () => {
//   return (
//     <Canvas>
//       {/* Lighting for the Scene */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />

//       {/* Character */}
//       <Avatar />

//       {/* Centered Loading Spinner */}
//       <Html center>
//         <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full">
//           <div className="text-xl font-bold">Loading...</div>
//           <div className="w-10 h-10 mt-2 border-4 border-dashed rounded-full animate-spin border-blue-500" />
//         </div>
//       </Html>
//     </Canvas>
//   );
// };

// export default Loader;

