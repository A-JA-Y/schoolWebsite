import one from "../../images/anual_sports_day.avif";
import two from "../../images/science_exihibition.avif";
import three from "../../images/curtural_fest.avif";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style.css";

export default function MyCarousel() {
  const images = [
    { src: one, alt: "Image 1" },
    { src: two, alt: "Image 2" },
    { src: three, alt: "Image 3" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handlePrevious = () => {
    setIsSliding(true);
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
  const handleNext = () => {
    setIsSliding(true);
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 500); 
      return () => clearTimeout(timer); 
    }
  }, [isSliding]);

  return (
    <>
      <div className="carousel max-w-full mx-auto ">
        <div className="flex  items-center content-center">
          <div className={`imag-container ${isSliding ? "slide" : ""} w-full `}>
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="w-full"
            />

            <div className="flex flex-col items-center justify-center absolute w-full  h-full bg-black/50  hover:bg-opacity-5 transition delay-50  ">
              {activeIndex === 0 ? (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold  drop-shadow-md ">
                  Annual Sports Day
                  </h1>
                  <br />
                  Celebrating Excellence in Sports
                </span>
              ) : activeIndex === 1 ? (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold drop-shadow-md">
                  Science Exhibition
                  </h1>
                  <br />
                  Showcasing Student Innovations
                </span>
              ) : (
                <span className="py-10 text-center text-white">
                  <h1 className=" sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold drop-shadow-md">
                  Cultural Fest
                  </h1>
                  <br />
                  Embracing Diversity and Creativity
                </span>
              )}
              
            </div>
          </div>
          {activeIndex > 0 && (
            <button
              className="absolute bg-slate-500 bg-opacity-40 w-9 h-9  rounded-full float-left hover:text-green-600 transition-colors  delay-200"
              onClick={handlePrevious}
            >
              <FaArrowLeft className=" m-2" />
            </button>
          )}
          {activeIndex < images.length - 1 && (
            <button
              className=" bg-slate-500 bg-opacity-40 w-9 h-9  rounded-full absolute right-1 hover:text-green-600 transition-colors  delay-200  "
              onClick={handleNext}
            >
              <FaArrowRight className="m-2" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
