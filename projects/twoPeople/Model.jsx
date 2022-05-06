
import React ,{useRef}from 'react'

import { useGLTF } from "@react-three/drei";


export default  function Model(props)  {
    const group = useRef();
    const {nodes,materials}=useGLTF('/projectsAssets/twoPeople/models/twoPeople.glb')
    const gltf=useGLTF('/projectsAssets/twoPeople/models/twoPeople.glb')
    console.log(nodes)
    console.log(gltf);
    return (
        
      <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bird2.geometry}
        material={nodes.bird2.material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.04, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bird3.geometry}
        material={nodes.bird3.material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bird.geometry}
        material={nodes.bird.material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.03, 0.05, 0.05]}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_3.geometry}
          material={nodes.球体_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_3_1.geometry}
          material={nodes.球体_3_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2_2.geometry}
          material={nodes.对称2_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2_2_1.geometry}
          material={nodes.对称2_2_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["5"].geometry}
        material={nodes["5"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称1_1.geometry}
          material={nodes.对称1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称1_1_1.geometry}
          material={nodes.对称1_1_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["4001"].geometry}
        material={nodes["4001"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["11"].geometry}
        material={nodes["11"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_6.geometry}
          material={nodes.球体_6.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_6_1.geometry}
          material={nodes.球体_6_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.扫描_1.geometry}
          material={nodes.扫描_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.扫描_1_1.geometry}
          material={nodes.扫描_1_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_7.geometry}
          material={nodes.球体_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_7_1.geometry}
          material={nodes.球体_7_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={nodes["1"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[0.19, -0.01, -0.07]}
        scale={[0.22, 0.24, 0.22]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体001.geometry}
          material={nodes.球体001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体001_1.geometry}
          material={nodes.球体001_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[2.4, -0.01, -0.07]}
        scale={[0.17, 0.19, 0.17]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体005.geometry}
          material={materials["2.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体005_1.geometry}
          material={materials["bg.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1001"].geometry}
        material={nodes["1001"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2.geometry}
          material={nodes.对称2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2_1.geometry}
          material={nodes.对称2_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2_1_1.geometry}
          material={nodes.对称2_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.对称2_1_2.geometry}
          material={nodes.对称2_1_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["5001"].geometry}
        material={nodes["5001"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.扫描.geometry}
          material={nodes.扫描.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.扫描_2.geometry}
          material={nodes.扫描_2.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6001"].geometry}
        material={nodes["6001"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[1.1, -0.01, -0.07]}
        scale={[0.19, 0.21, 0.19]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体002.geometry}
          material={nodes.球体002.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体002_1.geometry}
          material={nodes.球体002_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[-1.18, -0.02, -0.05]}
        scale={[0.15, 0.16, 0.15]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体004.geometry}
          material={materials["2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体004_1.geometry}
          material={materials["bg.003"]}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_2.geometry}
          material={nodes.球体_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_2_1.geometry}
          material={nodes.球体_2_1.material}
        />
      </group>
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_2001.geometry}
          material={materials["3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.球体_2001_1.geometry}
          material={nodes.球体_2001_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["11001"].geometry}
        material={nodes["11001"].material}
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <group
        position={[0.4, 0.23, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.空白.geometry}
          material={nodes.空白.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.空白_1.geometry}
          material={nodes.空白_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["6"].geometry}
        material={materials["材质.002"]}
        position={[-9, -1.8, 0]}
        scale={[20.03, 21.72, 21.72]}
      />
    </group>
    )
}