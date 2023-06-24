import React from "react";
import { StrictMode, Suspense, useState,useEffect } from "react";
import { Loader } from "@react-three/drei";
import Image from "next/image";
import App from "./App";
import PC from './layout/PC';
const Boluoyouzi = () => {
  const [isMobile,set]=useState(true)
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
set(isMobile)
  }, []);

  //ref绑定空间网络
  return (
    <StrictMode>
      {/* 模型加载为异步需要Suspense包裹 */}
      <Suspense fallback={<Loader />}>
      {isMobile? <div
          style={{
            width: "100vw",
            height: "100vh",
            opacity: 0.75,
            position: "fixed",
            bottom: 0,
          }}
        >
          <Image
            width={750}
            height={1476}
            layout="fill"
            src="/projectsAssets/boluoyouzi/images/model_bg.png"
          />

        <App />
        </div>
      :<PC/>}
      </Suspense>
      
    </StrictMode>
  );
};
export default Boluoyouzi;
