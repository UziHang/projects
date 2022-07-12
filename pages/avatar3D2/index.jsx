import { SEO } from '../../components/SEO/SEO'
import { Footer } from '../../components/Footer/Footer'
import Avatar2 from '../../projects/avatar2'

export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/avatar3D - UziHang"
        description="react react-three-fiber react-three-drei 动作切换"
        image="/logo.png"
      />
      <Avatar2 />
     <Footer/>
     </div>
 )
}