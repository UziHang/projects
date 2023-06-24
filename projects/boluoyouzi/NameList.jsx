import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  Text,
  Text3D,
  OrbitControls,
  TrackballControls,
} from "@react-three/drei";
import { Loader } from "@react-three/drei";
import { useSpring, animated, a } from "@react-spring/three";
import styles from "./NameList.module.css";

import Oil from "./layout/Oil";
import { update } from "react-spring";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/AlibabaPuHuiTi-3-45-Light.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    fontWeight: 700,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);

    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "rgb(252, 179, 44);" : "white"),
      0.1
    );
  });
  return (
    <Text
      className={styles.cyberButton}
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={over}
      {...props}
      {...fontProps}
      // eslint-disable-next-line react/no-children-prop
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const names = [
      "A.K.A.BB",
      "Big",
      `炸年糕大王`,
      "命中",
      `幸运的脏狒`,
      `柯希莫`,
      `小乐园`,
      `np小郝`,
      `勒不思暑`,
      `Odo`,
      `Young.`,
      "多长点头发",
      `why`,
      `Simon`,
      `孔宇`,
      `Yamazakura`,
      `柒角`,
      `一颗反尔`,
      `空白哇咔咔`,
      `Finn`,
      `阿凛`,
      `可以喝的谷粒多`,
      "Echo",
      `火柴`,
      `与你同醉`,
      `水瓶哥`,
      `MISSINGO`,
      `核桃牙膏`,
      `温虾米`,
      `Suzumiya`,
      `枫叶`,
      `舒肤佳`,
      `老虎`,
      `消失东尼`,
      `不器`,
      "jie",
      `黑猫警长`,
      "飞",
      "枫叶",
      "原神哥",
      "贺贺打",
      "哈尔等风来",
      "雪碧",
      "花石夏",
      "nicolos",
      "果盘",
      "透明木盆",
    ];
    const temp = [];
    console.log(names.length);
    const newArray =names.sort(() => Math.random() - 0.5);

    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          newArray[temp.length - 1],
        ]);
      }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

const Cat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.rightBeardAni}></div>
        <div className={styles.leftBeardAni}></div>
        <div className={styles.leftEyeGlowAni}>
          <div className={styles.leftEyeAni}></div>
        </div>
        <div className={styles.rightEyeGlowAni}>
          <div className={styles.rightEyeAni}></div>
        </div>
        <div className={styles.nose}></div>
      </div>
    </div>
  );
};

export default function NameList() {




const  Box =(props)=> {
  const { camera } = useThree();
  
  // 使用 useSpring 定义摄像头的动画属性
  const { position } = useSpring({
    from: { position: [20, 30, 60] },
    to: { position: [0, 0,0] },
    config: { duration: 5000 }
  });
  return (
    <a.mesh position={position}>
    <Oil />
    <Cloud count={7} radius={20} />
    </a.mesh>
  )
}




  return (
    <Suspense fallback={<Loader />}>
      <div className={styles.root}>
        <Cat />
        <Canvas dpr={[1, 2]} camera={{ position: [20, 30, 50], fov: 90 }}>
          <fog attach="fog" args={["#202025", 30, 100]} />
          <ambientLight  intensity={0.3}  />
          <Box/>
          <OrbitControls autoRotate autoRotateSpeed={0.8} />
          <TrackballControls />
          {/* 辅助线 */}
          {/* <axesHelper
          scale={100}
          position={[0, 0, 0]}
          onUpdate={(self) => self.setColors("#ff2080", "#20ff80", "#2080ff")}
        /> */}
        </Canvas>
      </div>
    </Suspense>
  );
}
