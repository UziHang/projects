import React from "react";
import { StrictMode, Suspense, useState } from "react";
import { Loader } from "@react-three/drei";
import Image from "next/image";
import App from "./App";
import Loading from "./layout/Loading";
import Pineapples from "./layout/Pineapples";
const Boluoyouzi = () => {
  //ref绑定空间网络
  return (
    <StrictMode>
      {/* 模型加载为异步需要Suspense包裹 */}
      <Suspense fallback={<Loader />}>
        <div
        style={{ width:'100vw',height:'100vh', opacity: 0.75, position: "fixed",bottom:0}}>
        <Image
          width={750}
          height={1476}
          layout="fill"
          src="/projectsAssets/boluoyouzi/images/model_bg.png"
        />
        </div>
        <App />
      </Suspense>
    </StrictMode>
  );
};
export default Boluoyouzi;
