
import React ,{useRef}from 'react'

import { useGLTF } from "@react-three/drei";


export default  function Model(props)  {
    const group = useRef();
    const {nodes,materials}=useGLTF('/projectsAssets/paintings/models/paintings.glb')
    const gltf=useGLTF('/projectsAssets/paintings/models/paintings.glb')
    console.log(nodes)
    console.log(gltf);
    return (
        
      <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Assembly~143_Defintion"].geometry}
        material={materials.lef11}
        position={[0, 0.97, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.06, 0.04]}
      />
      <group
        position={[0, 0.82, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Assembly~145_Defintion_1"].geometry}
          material={materials.ddaa2zzz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Assembly~145_Defintion_2"].geometry}
          material={materials.z}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Assembly~145_Defintion_3"].geometry}
          material={materials["20 - Default"]}
        />
      </group>
    </group>
    
    )
}