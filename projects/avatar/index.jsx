
import React from 'react'
import { StrictMode, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import App from './App'
const Brid = () => {
  //ref绑定空间网络
  return (
    <StrictMode>
      {/* 模型加载为异步需要Suspense包裹 */}
    <Suspense  fallback={null}> 
       <App/>
    </Suspense>
    <Loader />
    </StrictMode>
  )
}
export default Brid
