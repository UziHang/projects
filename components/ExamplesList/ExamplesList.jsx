import React from 'react'
import { ExampleCard } from '../ExampleCard/ExampleCard'
import styles from './ExampleList.module.css'



function ExamplesRow({ title, children }) {
  return (
    <div className={styles['example-row']}>
      <h2 className={styles['example-row__title']}>{title}</h2>
      <ul className={styles['example-row__list']}>{children}</ul>
    </div>
  )
}

export function ExamplesList() {
  return (
    <div className={styles.container}>
      <ExamplesRow title={"create"}>
        <ExampleCard link="https://github.com/UziHang/wedding-invitation-h5" thumbnail="/thumbnails/wxQR.jpg" title="婚礼邀请函(微信扫码浏览)" introduction="个人设计，开发的婚礼邀请函小程序。故事模块方便你更多了解我~" />
        <ExampleCard link="/avatar3D" thumbnail="/thumbnails/avatar3D.jpg" title="我的虚拟3D形象" introduction=" 你你你要跳舞嘛~~  useAnimations练习" />
        <ExampleCard link="/levels" thumbnail="/thumbnails/level1.png" title="Levels demo" introduction="react  react-three-fiber  学习demo, 仿官方教程" />
        <ExampleCard link="/bird" thumbnail="/thumbnails/bird.jpg" title="雪中鸟3D" introduction="react-three-drei 镜头，阴影(开发中)" />
        <ExampleCard link="/paintings" thumbnail="/thumbnails/paintings.png" title="卷轴画3D" introduction="react-three-drei 2d视角锁定（开发中）" />
        <ExampleCard link="/twoPeople" thumbnail="/thumbnails/twoPeople.png" title="二人游3D" introduction="react-three-drei 弹簧控制（开发中）" />
        <ExampleCard link="/avatar3D2" thumbnail="/thumbnails/twoPeople.png" title="girl" introduction="react-three-drei 动作，服装切换练习" />
        <ExampleCard link="/boluoyouzi" thumbnail="/thumbnails/twoPeople.png" title="黑猫吃警长" introduction="菠萝油子黑猫欢迎会" />
        </ExamplesRow>
      <ExamplesRow title={"study demo"}>
      <ExampleCard link="/levels" thumbnail="/thumbnails/level1.png" title="Levels demo" introduction="react  react-three-fiber  学习demo, 仿官方教程" />
      <ExampleCard link="/study/index.html" thumbnail="/thumbnails/level1.png" title="three base demo" introduction="threejs demo 练习" />
      </ExamplesRow>
    </div>
  )
}
