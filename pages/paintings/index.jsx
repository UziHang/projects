import { SEO } from '../../components/SEO/SEO'
// import { Footer } from '../../components/Footer/Footer'
import Paintings from '../../projects/paintings' 
export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/paintings - UziHang"
        description="react react-three-fiber 镜头操控"
        image="/logo.png"
      />
     <Paintings />
     {/* <Footer/> */}

     </div>
 )
}