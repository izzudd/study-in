import NavBar from '../components/NavBar';
import Hero from '../components/index/Hero'
import Path from '../components/index/Path'
import Footer from '../components/Footer'

export default function Index({ courses }) {
  return (
    <div>
      <NavBar />
      <Hero/>
      <Path/>
      <Footer/>
    </div>
  )
}