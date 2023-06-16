import React, { useEffect, useRef, useState } from "react";
import {
  PresentationControls,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import styles from "./App.module.css";
import "./global.module.css";
const App = () => {
  return (
    // 定义渲染场景
    <div className={styles.layout}>
      <div className={styles.topTitle}>
        <div className={styles.welcome}>欢迎来到播客群</div>
        <div className={styles.title}>黑猫吃警长</div>
      </div>
      <Image
        layout="fill"
        src="/projectsAssets/boluoyouzi/images/motorcycle.png"
      />
      <div className={styles.buttons}>
        <div className={styles.cyberButton}>查看故事</div>
        <div className={styles.cyberButton}>黑猫战士</div>
        <div className={styles.cyberButton}>众所周知</div>
        <div className={styles.cyberButton}>关于作者</div>
      </div>
    </div>
  );
};
export default App;
