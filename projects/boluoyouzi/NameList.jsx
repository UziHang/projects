import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text,Text3D,TrackballControls } from '@react-three/drei'
import styles from './NameList.module.css'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/AlibabaPuHuiTi-3-45-Light.woff', fontSize: 2.5, letterSpacing: -0.05,fontWeight:700, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)


  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return <Text  ref={ref} onPointerOver={over} onPointerOut={out} onClick={over} {...props} {...fontProps} children={children} />
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const names=[`幸运的脏狒`,`勒不思暑`,`Odo`,`np小郝`,`Young.`,`why`,`Simon`,`孔宇`,`Yamazakura`,`柒角`,`一颗反尔`,`空白哇咔咔`,`Finn`,`XY`,`可以喝的谷粒多`,
    `火柴`,`柯希莫`,`与你同醉`,`水瓶哥`,`MISSINGO`,`核桃牙膏`,`黑猫警长`,`温虾米`,`Suzumiya`,`枫叶`,`舒肤佳`,`老虎`,`消失东尼`,`不器`,'jie','飞','big','命中','枫叶','原神哥',`炸年糕打大王`]
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
       temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),names[temp.length-1]])
      } 
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function NameList() {
  return ( 
    <div className={styles.root}>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 60], fov: 90 }}>
      <fog attach="fog" args={['#202025', 30, 100]} />
      <Cloud count={6} radius={20} />
      <TrackballControls />
    </Canvas>
    </div>
  )
}
