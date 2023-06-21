import React, { useEffect, useRef, useState } from "react";
import {
  PresentationControls,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import Image from "next/image";
import Link from "next/link";
import styles from "./App.module.css";
import "./global.module.css";
import Pineapples from "./layout/Pineapples";

const App = () => {
  const [speed, set] = useState(1);

  return (
    <>
      <Pineapples speed={speed} />
      {/* // 定义渲染场景 */}
      <div className={styles.layout}>
        <div className={styles.topTitle}>
          <div className={styles.welcome}>欢迎光临听友群</div>
          <div className={styles.textpopupright}>黑猫吃警长</div>
        </div>
        <Image
          layout="fill"
          src="/projectsAssets/boluoyouzi/images/motorcycle.png"
        />
        <div className={styles.rightMiddle}>
          <input
            type="range"
            min="0"
            max="10"
            value={speed}
            step="1"
            onChange={(e) => set(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.cyberButton}>
            <span>查看故事</span>
          </div>
          <Link href="/boluoyouzi/name-list">
            <div className={styles.cyberButton}>黑猫战士</div>
          </Link>
          <div className={styles.cyberButton}>众所周知</div>
          <div className={styles.cyberButton}>关于作者</div>
        </div>
      </div>
    </>
  );
};
export default App;
