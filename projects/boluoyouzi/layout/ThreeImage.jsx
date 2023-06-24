import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, useIntersect, ScrollControls, Scroll, Image as ImageImpl } from '@react-three/drei'


function ThreeImage({ c = new THREE.Color(), ...props }) {
    const visible = useRef(false)
    const [hovered, hover] = useState(false)
    const ref = useIntersect((isVisible) => (visible.current = isVisible))
    useFrame((state, delta) => {
      // 鼠标悬浮时的图片材质颜色变化
      ref.current.material.color.lerp(c.set(hovered ? '#fff' : '#ccc'), hovered ? 0.4 : 0.05);
      // 图片滚动到视区时大小缩放变化
      ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 4, 4, delta)
    })
    return <ImageImpl ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} {...props} />
  }

  export default ThreeImage

  
