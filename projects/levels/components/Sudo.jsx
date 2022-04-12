import { useEffect } from 'react';
import {useGLTF} from '@react-three/drei' 
import { useSpring,a } from '@react-spring/three';


export default  function Sudo () {
    const { nodes } = useGLTF('/projectsAssets/levels/models/level-react-draco.glb')

    const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { friction: 40 } }), [])


    useEffect(()=>{
        let timeout
        const  bounce=()=> {
            
            api.start({rotation: [
                nodes.SudoHead.rotation.x+Math.random()/5,
                nodes.SudoHead.rotation.y,
                nodes.SudoHead.rotation.z+Math.random()/5,
            ]})
            setTimeout(bounce,(Math.random()+1)*1000)
        }
        bounce()
        return ()=>clearTimeout(timeout)

    },[])

    return (

        <group>
            <mesh geometry={nodes.Sudo.geometry} material={nodes.Sudo.material} position={nodes.Sudo.position}
            rotation={nodes.Sudo.rotation} ></mesh>
            <a.mesh geometry={nodes.SudoHead.geometry} material={nodes.SudoHead.material} position={nodes.SudoHead.position}
             rotation={nodes.SudoHead.rotation} {...spring} ></a.mesh>
        </group>

    )

}