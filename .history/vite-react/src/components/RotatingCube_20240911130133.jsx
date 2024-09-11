import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {});
  return (
    <div>
      <mesh ref={meshRef}></mesh>
    </div>
  );
};

export default RotatingCube;
