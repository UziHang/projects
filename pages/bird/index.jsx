import { SEO } from '../../components/SEO/SEO'
import { Footer } from '../../components/Footer/Footer'
import Bird from '../../projects/bird'
export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/brid - UziHang"
        description="react react-three-fiber 镜头操控"
        image="/logo.png"
      />
     <Bird />
     <Footer/>

     </div>
 )
}