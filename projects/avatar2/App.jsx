import React, { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
//  react three hook便于获取three场景元素
import Model from "./Model";
import Dancing from "./Dancing";
import styles from "./button.module.css";
import AutoModel from "./AutoModel";
// import bg from '/projectsAssets/avatar2/images/bg.webp'
const Avatar = () => {
  const [color, setColor] = useState("pink");
  const [isDancing, setIsDancing] = useState(false);

  useEffect(() => {
    //  let timeout
    // const  bounce=()=> {
    //     setColor('#'+(Math.random()*0xffffff<<0).toString(16))
    //     setTimeout(bounce,1000)
    // }
    // bounce()
    // return ()=>clearTimeout(timeout)
  });

  return (
    // 定义渲染场景
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:isDancing?`url(/projectsAssets/avatar2/images/bg.jpg)`:'none',
        backgroundSize:'100% 100%'
      }}
    >
   

      <button className={styles.dancing} onClick={()=>setIsDancing(!isDancing)}>{isDancing?`stop`:'dancing~'}</button>
      {/* 定义React three Fiber Scene */}
      <Canvas
        flat
        shadows
        style={{}}
        // dpr={[1, 2]} //像素比m in,max
        camera={{
          // 配置摄像头
          fov: 15, //视角
          position: [2, 0, 12.5], // 摄像头位置
        }}
        // resize={{
        //   scroll: true,
        //   debounce: {
        //     scroll: 50,
        //     resize: 0,
        //   },
        // }}
      >
        {/* 背景色 */}
        {/* <color attach="background" args={[color]} /> */}
        {/* 环境光源   颜色          强度 */}
        <ambientLight color="#fff" intensity={0.5} />
        {/*  点光光源   */}
        <pointLight color="#fff" position={[10, 10, 10]} />
        {/* 渲染的物体 */}

        {/* 展示控制 */}

        {!isDancing ? (
          <Model position={[0.025, -0.9, 0]} />
        ) : (
          <Dancing position={[0.025, -0.9, 0]} />
        )}
        {/* < AutoModel/> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Avatar;
