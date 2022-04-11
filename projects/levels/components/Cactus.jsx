import { MeshWobbleMaterial, useGLTF,MeshDistortMaterial} from '@react-three/drei'
import { Mesh } from 'three'

//  仙人掌
export default function Cactus() {
    const {nodes,materials}=useGLTF('/models/level-react-draco.glb')
    console.log(nodes)
    console.log(materials);
    return (
        <mesh geometry={nodes.Cactus.geometry} position={nodes.Cactus.position}   material={nodes.Cactus.material}  rotation={nodes.Cactus.rotation} >
                  {/* react three drei 封装的自带摇晃（wobble）材质  factor 摇晃幅度  speed 摇晃速度 map  */}
                  {/* 可理解为材质动画语法糖 */}
                  <MeshWobbleMaterial factor={0.2} speed={2} map={nodes.Cactus.material.map} />
        </mesh>
    )
}