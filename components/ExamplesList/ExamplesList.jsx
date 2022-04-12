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
      <ExamplesRow title={"study demo"}>
        <ExampleCard link="/levels" thumbnail="/thumbnails/level1.png" title="Levels demo" introduction="react  react-three-fiber  学习demo, 仿官方教程" />
      </ExamplesRow>
    </div>
  )
}
