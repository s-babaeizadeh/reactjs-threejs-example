import React, { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  return (
    <div>
      <mesh ref={meshRef}></mesh>
    </div>
  );
};

export default RotatingCube;
