import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
// https://github.com/pmndrs/drei
import { useGLTF, Detailed, Environment } from '@react-three/drei'
// https://github.com/pmndrs/react-postprocessing
// https://github.com/vanruesc/postprocessing
// import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

function Pineapple({ index, z, speed }) {
  const ref = useRef()
  // useThree 可以访问 R3F（React Three Fiber）的状态模型
  const { viewport, camera } = useThree()
  // getCurrentViewport 是一个帮助函数，用于计算视口的大小
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  // useGLTF 是对 R3F 的 useLoader(GLTFLoader, url) 的一个封装
  // 它可以自动处理包含 draco 和 meshopt 压缩的资源，无需担心二进制等...
  const { nodes, materials } = useGLTF('/projectsAssets/boluoyouzi/models/pineapple.gltf')
  // 到这一步时，模型已经加载完毕，这是通过 React suspense 实现的

  // 组件的本地状态，可以安全地进行修改，因为它是固定的数据
  const [data] = useState({
    // 在垂直方向上随机分布对象
    y: THREE.MathUtils.randFloatSpread(height * 2),
    // 这给我们一个介于 -1 和 1 之间的随机值，我们将其乘以视口宽度
    x: THREE.MathUtils.randFloatSpread(2),
    // 对象旋转的速度，randFloat 给出介于最小值和最大值之间的随机值，在这里是 8 和 12
    spin: THREE.MathUtils.randFloat(8, 12),
    // 一些随机的旋转，Math.PI 表示 360 度的弧度
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  // useFrame 每秒执行 60 次
  useFrame((state, dt) => {
    // 使 X 位置响应式，缓慢向上滚动对象的 Y，沿 Z 轴进行分布
    // dt 是 delta，即本帧与上一帧之间的时间差，我们可以使用它来独立于屏幕刷新率
    // 我们将 dt 限制在 0.1 以内，因为现在它在用户切换标签页时不能累积，它将简单地停止
    if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
    // 围绕旋转对象
    ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
    // 如果它们太远了，将它们设置回底部
    if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
  })

  // 使用 drei 的 Detailed 是一个很好的技巧，可以减少顶点数，因为
  // 对于远处的对象，我们不需要高分辨率。该模型包含 3 个经过简化的网格...
  return (
    <Detailed ref={ref} distances={[0, 65, 80]}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.color}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.color}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.color}
      />
   
    </Detailed>
  )
}

export default function Pineapples({ speed = 5, count = 70, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
  return (
    // 不需要抗锯齿（更快），dpr 将分辨率限制在 1.5（也比全分辨率更快）
    <Canvas style={{width:'100vw',height:'100vh',position:'fixed'}}gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 20, near: 0.01, far: depth + 15 }}>
      {/* <color attach="background" args={['#ffbf40']} /> */}
    
      <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
      {/* 在这里使用立方缓动函数以更有趣的方式展开对象，我想要一个单独的大对象在前面... */}
      {Array.from({ length: count }, (_, i) => <Pineapple key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
      <Environment preset="sunset" />
      {/* 多重采样（MSAA）是 WebGL2 的抗锯齿功能，我们不需要它（更快） */}
      {/* <EffectComposer multisampling={0}>
        <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
      </EffectComposer> */}
    </Canvas>
  )
}
