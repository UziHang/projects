import React, { useEffect, useRef,useState } from "react";
import { PresentationControls,GizmoHelper,GizmoViewport} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
//  react three hook便于获取three场景元素
import { useThree } from "@react-three/fiber";
import isPC from '../../public/js/util';

import Model from "./Model";


const Brid = () => {
  const [isPc,setIsPc]=useState(isPC)
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
          position: [0, 1, 2], // 摄像头位置
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
        <color attach="background" args={["gray"]} />
        {/* 环境光源   颜色          强度 */}
        <ambientLight color="#fff" intensity={0.3} />
        {/*  点光光源   */}
        <pointLight color="#fff" position={[-5, 5,5]} />
        {/* 渲染的物体 */}

        {/* 接触地面阴影    resolution；分辨率  */}
        {/* <ContactShadows
          opacity={1}
          scale={5}
          blur={1}
          far={5}
          resolution={32}
          color="#000000"
        /> */}

        {/* 展示控制 */}
        <PresentationControls
          global //全局旋转或者拖拽模型
          // cursor //是否在拖动上切换光标样式
          speed={5} //灵敏性级别控制
          zoom={0.5} //最大缩放级别
          rotation={[0, 0, 0]} //模型默认旋转角度
          polar={[0,0]} //垂直极限控制
          azimuth={[-Infinity, Infinity]} //水平极限控制
          config={{ mass: 1, tension: 100, friction: 50 }} // Spring的配置=》质量 张力 摩擦力
        >
          <Model
            scale={isPc?0.0005:0.0002}
            position={[0, -0.1, 0]}
            onPointerMissed={() => {
              console.log("动画结束");
            }}
          />

           {/* 视角辅助器 */}
        <GizmoHelper
          alignment="bottom-left" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
          onUpdate={() => {
            /* called during camera animation  */
          }}
          onTarget={() => {
            /* return current camera target (e.g. from orbit controls) to center animation */
          }}
          renderPriority={() => {
            /* use renderPriority to prevent the helper from disappearing if there is another useFrame(..., 1)*/
          }}
        >
          <GizmoViewport
            axisColors={["red", "green", "yellow"]}
            labelColor="black"
          />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      
         {/* <OrbitControls /> */}
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default Brid;
