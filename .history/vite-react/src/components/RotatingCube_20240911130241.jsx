import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y -= 0.01;
    }
  });
  return (
    <div>
      <mesh ref={meshRef}></mesh>
    </div>
  );
};

export default RotatingCube;
