import { useGLTF } from "@react-three/drei";

export default function AutoModel() {
  const gltf = useGLTF("/projectsAssets/brid/models/brid-in-snow.glb", true);
  console.log(gltf);
  //primitive 原始
  return <primitive object={gltf.scene} dispose={null} scale={0.001} />;
}
