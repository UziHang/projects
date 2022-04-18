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
        <ExampleCard link="/levels" thumbnail="/thumbnails/level1.png" title="Levels demo" introduction="react  react-three-fiber  学习demo, 仿官方教程" />
        <ExampleCard link="/bird" thumbnail="/thumbnails/bird.jpg" title="雪中鸟3D" introduction="react-three-dri 镜头练习" />
        <ExampleCard link="/avatar3D" thumbnail="/thumbnails/avatar3D.jpg" title="我的虚拟形象" introduction=" 你你你要跳舞嘛~~  useAnimations练习" />
        </ExamplesRow>

      <ExamplesRow title={"study demo"}>
      <ExampleCard link="/levels" thumbnail="/thumbnails/level1.png" title="Levels demo" introduction="react  react-three-fiber  学习demo, 仿官方教程" />
      </ExamplesRow>
    </div>
  )
}
