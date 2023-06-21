import { SEO } from '../../../components/SEO/SEO'
// import { Footer } from '../../components/Footer/Footer'
import NameList from '../../../projects/boluoyouzi/NameList'
export default function Index() {
 return(
     <div>
     <SEO
        title="黑猫の战士们"
        description="react react-three-fiber 镜头操控"
        image="/logo.png"
      />
      <NameList />
     </div>
 )
}