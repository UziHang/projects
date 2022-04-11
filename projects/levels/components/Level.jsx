


//   为 react-three-fiber提供有用的附加组件，如相机、平面和控制等 
import { useGLTF } from '@react-three/drei';
//  react three hook便于获取three场景元素 
import { useThree} from '@react-three/fiber';
//动画库
import { useSpring } from '@react-spring/three'

export  default function Level() {

    const {nodes,materials}=useGLTF('/models/level-react-draco.glb')
    console.log(`useGLTF获取nodes:`)
    console.log(nodes);
    console.log(`useGLTF获取materials:`);
    console.log(materials);

    // R3F hooks can only be used within the Canvas component!
    const {camera} =useThree()
    console.log(useThree());

    useSpring( // 弹簧动画hook
        ()=>({
            from:{y:camera.position.y+5},
            to:{y:camera.position.y},
            config:{friction:100},//   friction:摩擦力
            onChange:({value})=>{(camera.position.y=value.y)}  //动画事件触发function
        }),
        []
    )
  

    return <mesh geometry={nodes.Level.geometry}  material={nodes.Level.material}  position={nodes.Level.position} rotation={nodes.Level.rotation} />
      //  geometry：模型几何体 material：模型材质  position：模型放置位置  rotation: 模型角度
    return <mesh geometry={nodes.Level.geometry}  material={nodes.Level.material}  position={[-0.38, 0.69, 0.62]} rotation={[Math.PI / 2, -Math.PI / 9, 0]} />
}