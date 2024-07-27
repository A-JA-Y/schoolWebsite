import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import logo from "../images/Designer.png";


export default function Navbar({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between ">
          <div className="flex space-x-7">
            <div>
              <div to={'/'} className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2 hover:scale-110 rounded-full drop-shadow-md " />
                <span className="font-semibold text-gray-500 text-lg hover:text-green-600 transition delay-300 ">
                Springdale Public School
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div
              
              className="py-4 px-2  text-gray-500 border-green-500 font-semibold "
            >
              <div className="home flex text-center items-center content-evenly"><FaHome className="mx-1 "/>Home</div>
              
            </div>
            <div
             
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 " onClick={() => scrollToSection(refs.aboutRef)}
            >
              About us
              
            </div>
            <div
              
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => scrollToSection(refs.academicsRef)}
            >
              Academics
              
            </div>
            <div
              
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => scrollToSection(refs.admissionsRef)}
            >
              Admissions
              
            </div>
            <div
             
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => scrollToSection(refs.facultyRef)}
            >
              Faculty
              
            </div>
            <div
              
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => scrollToSection(refs.studentRef)}
            >
              Students
              
            </div>
            <div
             
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" onClick={() => scrollToSection(refs.galleryRef)}
            >
              Gallery
              
            </div>
            <div
              
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"onClick={() => scrollToSection(refs.contactRef)}
            >
              Contact us
              
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-600 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div to={'/'} className="block py-2 px-4 text-sm hover:bg-green-100">
        Home
        </div>
        <div to={'/products'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.aboutRef)}>
          About us
          
        </div>
        <div to={'/about'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.academicsRef)}>
          Academics
          
        </div>
        <div to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.admissionsRef)} >
          Admissions
          
          
        </div>
        <div to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.facultyRef)}>
          Faculty
          
        </div>
        <div to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.studentRef)}>
          Students
          
        </div>
        <div to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100"onClick={() => scrollToSection(refs.galleryRef)}>
          Gallery
          
        </div>
        <div to={'/contact-us'} className="block py-2 px-4 text-sm hover:bg-green-100" onClick={() => scrollToSection(refs.contactRef)}>
          Contact us
          
        </div>
        
      </div>
    </nav>
  );
}
