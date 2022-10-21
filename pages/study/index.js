import { useEffect, useRef ,useState} from "react";
import * as THREE from "three";
import styles from "./index.module.css";

const Index = () => {
let canvas,camera,renderer,scene=null

  useEffect(() => {
    requestAnimationFrame(render);
  }, []);

  function makeCube(geometryName, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometryName, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = canvas.clientWidth * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {

     canvas = document.querySelector("#c");
   renderer = new THREE.WebGLRenderer({ canvas });
   scene = new THREE.Scene();

 

    // 透视相机：视场、长宽比、近面、远面
   camera = new THREE.PerspectiveCamera(75, canvas.clientWidth/canvas.clientHeight, .1, 5);   
  camera.position.z = 2;


    const color = 0xfffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);



    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const cubes = [
      makeCube(geometry, 0x44aa88, 0),
      makeCube(geometry, 0x8844aa, -2),
      makeCube(geometry, 0xaa8844, 2),
    ];



    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }


    cubes.forEach((cube, index) => {
      const speed = 1 + index * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  return <canvas className={styles.c}  id="c"></canvas>;
};

export default Index;
