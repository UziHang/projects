import { useEffect} from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
export default function ReactIcon() {
  const { nodes } = useGLTF("/projectsAssets/levels/models/level-react-draco.glb");
  //  材质捕捉渲染 纹理hook    65A0C7_C3E4F8_A7D5EF_97CAE9为确切的材质
  const [matcap] = useMatcapTexture("65A0C7_C3E4F8_A7D5EF_97CAE9", 1024);

  //   官方 异步获取nodes useEffect api的会报错
//   const [springs,api]=useSpring(()=>({
//     'rotation':nodes.React.rotation, // [0.8, 1.1, -0.4]
//     'position':nodes.React.position,  // [-0.79, 1.3, 0.62]
//     config:{mass:2,tension:200}
// }))

  const [springs,api]=useSpring(()=>({
      'rotation-x':0, // [0.8, 1.1, -0.4]
      'position-y':0,  // [-0.79, 1.3, 0.62]
      config:{mass:2,tension:200}
  }))



  //数据从模型nodes中拿，在做animations 
  
  useEffect( ()=> {
      let timeout
      let floating =false
      const bounce =() => {
          api.start({ 'rotation-x':nodes.React.rotation.x - (floating ? 0.2: 0), 'position-y': floating ? nodes.React.position.y : 1.5})
          floating=!floating
          timeout=setTimeout(bounce,1*1000)
      }
      bounce()
      return ()=>clearTimeout(timeout)
  },[])

 
 return (
    <a.mesh geometry={nodes.React.geometry}  position={nodes.React.position} rotation={nodes.React.rotation} {...springs}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  );
}
