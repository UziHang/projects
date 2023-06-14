import React, { useEffect, useRef,useState } from "react";
import { PresentationControls,GizmoHelper,GizmoViewport} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const App = () => {
  return (
    // 定义渲染场景
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position:'absolute',
        zIndex:999
      }}
    >
      <span>黑猫警长</span>
    </div>
  );
};
export default App;
