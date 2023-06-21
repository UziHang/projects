import { SEO } from '../../components/SEO/SEO'
// import { Footer } from '../../components/Footer/Footer'
import Boluoyouzi from '../../projects/boluoyouzi'
export default function Index() {
 return(
     <div>
     <SEO
        title="《菠萝油子》 ft:黑猫吃警长"
        description="react react-three-fiber 镜头操控"
        image="/logo.png"
      />
     <Boluoyouzi />
     </div>
 )
}