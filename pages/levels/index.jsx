import { SEO } from '../../components/SEO/SEO'
import { Footer } from '../../components/Footer/Footer'

import Levels from '../../projects/levels'
export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/Levels - UziHang"
        description="react react-three-fiber 学习demo"
        image="/logo.png"
      />
     <Levels />
     <Footer/>

     </div>
 )
}