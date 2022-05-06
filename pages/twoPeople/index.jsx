import { SEO } from '../../components/SEO/SEO'
// import { Footer } from '../../components/Footer/Footer'
import TwoPeople from '../../projects/twoPeople' 
export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/twoPeople - UziHang"
        description="react react-three-fiber 镜头操控"
        image="/logo.png"
      />
     <TwoPeople />
     {/* <Footer/> */}

     </div>
 )
}