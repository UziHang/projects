import { useGLTF } from "@react-three/drei";

export default function AutoModel() {
  const gltf = useGLTF("/projectsAssets/myAvatar/models/mybody.glb", true);
  console.log(gltf);
  //primitive 原始
  return <primitive object={gltf.scene} dispose={null} scale={1} />;
}
