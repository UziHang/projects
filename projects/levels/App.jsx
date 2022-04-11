
import React from 'react'
import { PresentationControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
//  react three hook便于获取three场景元素 
import { useThree} from '@react-three/fiber';
//动画库

import Level from './components/Level'
import Cactus from './components/Cactus'
import Camera from './components/Camera';
import ReactIcon from './components/ReactIcon'
const Levels = () => {



  return (
    // 定义渲染场景
    <div style={{
      height: '100vh',
      width: '100vw'
    }}>
    <Canvas
      flat 
      dpr={[1, 2]}
      camera={{  // 配置摄像头
        fov: 25,  //视角
        position: [0, 0, 8] // 摄像头位置
      }}
    >
      {/* 背景色 */}
      <color attach="background" args={['#e0b7ff']} />
      {/* 环境光源   颜色          强度 */}
      <ambientLight color='#fff' intensity={0.5} />
      {/*  点光光源   */}
      <pointLight color='red' position={[10, 10, 10]} />
      {/* 渲染的物体 */}

       {/* 展示控制 */}
      <PresentationControls
        global  //全局旋转或者拖拽模型
        cursor//是否在拖动上切换光标样式
        speed={5}   //灵敏性级别控制
        zoom={0.5}  //最大缩放级别
        // rotation={[0,-Math.PI/4,0]} //模型默认旋转角度
        // polar={[-Infinity, Infinity]} //垂直极限控制
        // azimuth={[-Math.PI / 4, Math.PI / 4]} //水平极限控制
        config={{ mass: 0.5, tension: 170, friction:100}} // Spring的配置=》质量 张力 摩擦力
      >
        <group  position-y={-0.75} dispose={null} scale={1}>
          <Level />
          <Cactus />
          <Camera />
          <ReactIcon />
          </group>
        </PresentationControls>
    </Canvas>
    </div>

  )
}
export default Levels
