import { Canvas, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, Center, Text3D, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import Image from "next/image";

export default function PC() {
  return (
    
    <div
      style={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        margin: 0,
        padding: '0 10vw',
        position: "fixed",
        background: "#151520",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }}
    >
      <div
        style={{
          width: "50vw",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 0, 100], zoom: 11 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} />
          <Scene />
          {/* <axesHelper scale={2} position={[0, 0, 0]} onUpdate={(self) => self.setColors('#ff2080', '#20ff80', '#2080ff')} /> */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={10}
          />
        </Canvas>
      </div>
      <h1 style={{
        writingMode: 'vertical-rl',
        background: 'linear-gradient(135deg, #5c6bc0, #ab47bc)',
        padding:'  10px 0'
    }}>没做PC端适配</h1>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <Image
          width={150}
          height={150}
          src="/projectsAssets/boluoyouzi/images/QR.png"
        />
      </div>
    <h1 style={{
        writingMode: 'vertical-rl',
        background: 'linear-gradient(135deg, #5c6bc0, #ab47bc)',
        padding:'  10px 0'
    }}>手机扫码浏览</h1>
    </div>
  );
}

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={1}
          letterSpacing={-0.06}
          size={1}
          font="/Inter_Bold.json"
        >
          {`Dirty\nBaboon`}
          <meshNormalMaterial />
        </Text3D>

        <Center position={[-2.5, 0, 0]}>
          <Pineapple scale={2} />
        </Center>
      </Center>
    </>
  );
}

function Pineapple(props) {
  const { nodes, materials } = useGLTF(
    "/projectsAssets/boluoyouzi/models/pineapple.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials.color}
      />
      {/* <mesh castShadow receiveShadow geometry={nodes.coffee_cup_top_16oz.geometry} material={materials['13 - Default']}>
        <Decal position={[0, 0.75, 0.3]} rotation={[0, 0, 0]} scale={[0.52, 0.6, 0.6]} map={texture} />
      </mesh> */}
    </group>
  );
}
