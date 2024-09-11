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
      <sphereGeometry args={[1, 16, 16]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

export default RotatingCube;
