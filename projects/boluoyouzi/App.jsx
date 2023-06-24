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
  const [modelVisible, setModelVisible] = useState(false);
  const [change, setChange] = useState(false);
  const [open,setOpen]=useState(false)

  useEffect(() => {
    // 模拟异步获取组件列表
    setTimeout(() => {
      setModelVisible(true);
    }, 5000);
  }, []);

  return (
    <>
   
        <div style={{visibility:modelVisible?'visible':'hidden'}} className={styles.models}>
          <Pineapples speed={speed} />
        </div>
      {/* // 定义渲染场景 */}
      <div className={styles.layout}>
        <div className={styles.topTitle}>
          <div className={change ? styles.change : styles.welcome}>
            {change ? "啊啊啊~" : "欢迎光临听友群"}
          </div>
          <div className={styles.textpopupright}>
            <span>黑</span>
            <span>猫</span>
            {!change && <span>吃</span>}
            <span>警</span>
            <span>长</span>
            {change && <span>!</span>}
          </div>
        </div>
        <Image
          className={styles.motorcycle}
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
          <div className={styles.cyberButton} onClick={()=>alert('开发中QAQ')}>众所周知</div>
          <div className={styles.cyberButton} onClick={()=>alert('开发中QAQ')}>
            <span>查看故事</span>
          </div>
          <Link href="/boluoyouzi/name-list">
            <div className={styles.cyberButton}>黑猫战士</div>
          </Link>
          <div className={styles.cyberButton} onClick={()=>alert('开发中QAQ')}>菠萝油子</div>
        </div>

        <div
          className={styles.mingzhongBtn}
          onClick={() => setModelVisible(!modelVisible)}
        >
          变变变！
        </div>
        <div className={styles.bigBtn} onClick={() => setChange(!change)}>
          啊啊啊~
        </div >
        {change&&<div className={styles.feifei}>
        <Image
          width={80}
          height={60}
          src="/projectsAssets/boluoyouzi/images/feifei.jpg"
        />
        </div>}
       
      </div>
    </>
  );
};
export default App;
