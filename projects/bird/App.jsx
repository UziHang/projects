import React, { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
//  react three hook便于获取three场景元素
import { useThree } from "@react-three/fiber";

import Model from "./Model";
import AutoModel from './AutoModel';
const Brid = () => {
  return (
    // 定义渲染场景
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* 定义React three Fiber Scene */}
      <Canvas
        flat
        shadows
        dpr={[1, 2]} //像素比m in,max
        camera={{
          // 配置摄像头
          fov: 25, //视角
          position: [0, 0, 0], // 摄像头位置
        }}
        resize={{
          scroll: true,
          debounce: {
            scroll: 50,
            resize: 0,
          },
        }}
      >
        {/* 背景色 */}
        <color attach="background" args={["#e0b7ff"]} />
        {/* 环境光源   颜色          强度 */}
        <ambientLight color="#fff" intensity={0.5} />
        {/*  点光光源   */}
        <pointLight color="red" position={[10, 10, 10]} />
        {/* 渲染的物体 */}

        {/* 展示控制 */}
        <PresentationControls
          global //全局旋转或者拖拽模型
          cursor //是否在拖动上切换光标样式
          speed={5} //灵敏性级别控制
          zoom={0.5} //最大缩放级别
          rotation={[0, 0, 0]} //模型默认旋转角度
          // polar={[-Infinity, Infinity]} //垂直极限控制
          // azimuth={[-Math.PI / 4, Math.PI / 4]} //水平极限控制
          config={{ mass: 0.5, tension: 170, friction: 100 }} // Spring的配置=》质量 张力 摩擦力
        >
          {/* <Model /> */}
          < AutoModel/>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default Brid;
