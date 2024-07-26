import React from 'react'
import MyCarousel from '../../components/home/carousel'

import Top from '../../components/wa-top-btn/toTop'
import Introduction from '../../components/home/intoduction'
import About from '../about'
import Academics from '../academics'
import Admissions from '../admissions'
import Faculty from '../faculty'
import Students from '../students'
import Gallery from '../gallery'
import Contact from '../../components/contact'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <MyCarousel/>
      <About/>
      <Academics/>
      <Admissions/>
      <Faculty/>
      <Students/>
      <Gallery/>
      <Contact/>
     
      <Top/>
    </div>
  )
}
