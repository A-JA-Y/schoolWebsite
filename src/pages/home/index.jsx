import {useRef} from 'react'
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
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const admissionsRef = useRef(null);
  const facultyRef = useRef(null);
  const studentRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} refs={{aboutRef,studentRef,galleryRef,facultyRef,admissionsRef,academicsRef,contactRef}}/>
      <Introduction/>
      <MyCarousel/>
      <div ref={aboutRef}>
      <About ref={aboutRef}/>
      </div>
      <div ref={academicsRef}>
      <Academics ref={academicsRef}/>
      </div>
      <div ref={admissionsRef}>
      <Admissions ref={admissionsRef}/>
      </div>
      <div ref={facultyRef}>
      <Faculty ref={facultyRef}/>
      

      </div>
      <div ref={studentRef}>
      <Students ref={studentRef}/>

      </div>
      <div ref={galleryRef}>
      <Gallery ref={galleryRef}/>

      </div>
      <div ref={contactRef}>
      <Contact ref={contactRef}/>

      </div>
      
      
      
     
     
      <Top/>
    </div>
  )
}
