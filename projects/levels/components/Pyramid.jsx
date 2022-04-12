import { useEffect } from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export default function Pyramid() {
    const { nodes, materials } = useGLTF(
        "/projectsAssets/levels/models/level-react-draco.glb"
    );
 //                使用useSpring hook 需先设定好初始值
    const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 5, tension: 200 } }),
        []
    );

    useEffect(() => {
        let timeout
        const rotate = () => {
            api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
            timeout = setTimeout(rotate, Math.random() * 2 * 1000)
        }
        rotate()
        return () => {
            clearTimeout(timeout)
        }

    }, [api]);

    return (
        <a.mesh
            geometry={nodes.Pyramid.geometry}
            position={nodes.Pyramid.position}
            rotation={nodes.Pyramid.rotation}
            material={nodes.Pyramid.material}
            {...spring}
        ></a.mesh>
    );
}
