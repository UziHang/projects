
import React from 'react'
import { StrictMode, Suspense,useState} from 'react'
import { Loader } from '@react-three/drei'
import Image from 'next/image'
import App from './App'
import Pineapples from './Pineapples'
const Boluoyouzi = () => {
  //ref绑定空间网络
  const [speed, set] = useState(1)
  return (
    <StrictMode>
      {/* 模型加载为异步需要Suspense包裹 */}
      <Suspense>
      <Image
        style={{opacity:0.75}}
        width={750}
        height={1476}
        layout='fill'
       src="/projectsAssets/boluoyouzi/images/model_bg.png" />
         <Pineapples speed={speed} />
      <App/>
      </Suspense>
    <Loader />
    </StrictMode>
  )
}
export default Boluoyouzi
