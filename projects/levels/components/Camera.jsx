import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'


// 摄像机模型
export default function Camera() {
  const { nodes, materials } = useGLTF('/projectsAssets/levels/models/level-react-draco.glb')
  const [spring, api] = useSpring(() => ({ 'rotation-z': 0, config: { friction: 40 } }), [])
  
  useEffect(() => {
    let timeout
    const wander = () => {
      api.start({ 'rotation-z': Math.random() })
      timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000)
    }
    wander()
    return () => clearTimeout(timeout)
  }, [])
  return (
    //   模型为集合 取集合的位置与角度
    <a.group position={nodes.Camera001.position} rotation={nodes.Camera001.rotation} {...spring}>
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={nodes.Camera_1.material.Lens} />
    </a.group>
    
  )
}
