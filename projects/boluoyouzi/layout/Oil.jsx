import * as THREE from 'three'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

export default function Oil({ setBg }) {
  const sphere = useRef()
  const light = useRef()
  const [mode, setMode] = useState(false)
  const [down, setDown] = useState(false)
  const [hovered, setHovered] = useState(false)



  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
        wobble: 0.4,
        coat:  1,
        ambient: 1.5,
        env: 1,
        color: '#E8B059',
    },
    [mode, hovered, down]
  )

  return (
    <>
     
      <Suspense fallback={null}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
        <a.mesh
          ref={sphere}
          scale={10}
       >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
        </a.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={ 0.8 }
          width={100}
          height={100}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  )
}
