import NavBar from '../components/NavBar';
import Hero from '../components/index/Hero'
import Path from '../components/index/Path'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function Index({ courses, loggedin }) {
  
  return (
    <div>
      <NavBar isLogin = {loggedin} />
      <Hero/>
      <Path courses={courses.data} />
      <Footer />
    </div>
  )
}