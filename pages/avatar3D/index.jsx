import { SEO } from '../../components/SEO/SEO'
import { Footer } from '../../components/Footer/Footer'
import Avatar from '../../projects/avatar'
export default function Index() {
 return(
     <div>
     <SEO
        title="Projects/avatar3D - UziHang"
        description="react react-three-fiber react-three-drei构建自己的3D形象"
        image="/logo.png"
      />
      <Avatar />
     <Footer/>
     </div>
 )
}