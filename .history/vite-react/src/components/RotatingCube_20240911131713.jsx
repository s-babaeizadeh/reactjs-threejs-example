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
    <mesh ref={meshRef}>
       <bufferGeometry>
    <bufferAttribute attach="attributes-position" count={v.length / 3} array={v} itemSize={3} />
    </mesh>
  );
};

export default RotatingCube;
