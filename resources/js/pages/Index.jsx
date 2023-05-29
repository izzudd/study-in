import NavBar from '../components/NavBar';
import Hero from '../components/index/Hero'
import Path from '../components/index/Path'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Index({ courses }) {
  const [login,setLogin] = useState(false);
  return (
    <div>
      <NavBar isLogin = {login} />
      <Hero/>
      <Path/>
      <Footer/>
    </div>
  )
}