import { useEffect,useRef} from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
export default function ReactIcon() {
  const { nodes } = useGLTF("/projectsAssets/levels/models/level-react-draco.glb");
  //  材质捕捉渲染 纹理hook    65A0C7_C3E4F8_A7D5EF_97CAE9为确切的材质
  const [matcap] = useMatcapTexture("65A0C7_C3E4F8_A7D5EF_97CAE9", 1024);

  const [springs,api]=useSpring(()=>({
      rotation:nodes.React.rotation, // [0.8, 1.1, -0.4]
      position:nodes.React.position,  //[-0.79, 1.3, 0.62]
      config:{mass:2,tension:200}
  }))
  const ref =useRef()
  
  useEffect( ()=> {
      let timeout
      let floating =true
      const bounce =() => {
          api.start({ 'rotation-x':0.8-(floating ?0.6:0),'position-y':floating?1.5:1.3})
          floating=!floating
          timeout=setTimeout(bounce,1*1000)
      }
      bounce()
      return ()=>clearTimeout(timeout)
  },[])

 
 return (
    <a.mesh  ref={ref} geometry={nodes.React.geometry} {...springs}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  );
}
