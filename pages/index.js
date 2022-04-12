import { SEO } from '../components/SEO/SEO'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { ExamplesList } from '../components/ExamplesList/ExamplesList'


const Home = () => {
  return (
    <div>
      <SEO
        title="Projects - UziHang"
        description="Three.js Journey excersices implemented using react-three-fiber."
        image="/logo.png"
      />
      <Header />
      <main>
        <ExamplesList />
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default Home