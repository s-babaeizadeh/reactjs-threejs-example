import React from "react";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      App
    </Canvas>
  );
};

export default App;
