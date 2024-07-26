import React from "react";
import one from "../../components/images/anual_sports_day.avif";
import two from "../../components/images/science_exihibition.avif";
import three from "../../components/images/curtural_fest.avif";
import four from "../../components/images/library.avif";
import five from "../../components/images/classroom.avif";

function Gallery() {
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Gallery</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div>
          <h1 className="text-4xl font-semibold my-2">Photos</h1>
        </div>
        <div className="container grid lg:grid-cols-3 items-center justify-center sm:grid-cols-2 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
          <div className="bg-gray-300 p-3 rounded-md">
            <img src={one} alt="" />
            <span>Students participating in various sports events.</span>
          </div>
          <div className="bg-gray-300 p-3 rounded-md">
            <img src={two} alt="" />
            <span>Students participating in various sports events.</span>
          </div>
          <div className="bg-gray-300 p-3 rounded-md">
            <img src={three} alt="" />
            <span>Students participating in various sports events.</span>
          </div>
          <div className="bg-gray-300 p-3 rounded-md">
            <img src={four} alt="" />
            <span>Students participating in various sports events.</span>
          </div>
          <div className="bg-gray-300 p-3 rounded-md">
            <img src={five} alt="" />
            <span>Students participating in various sports events.</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold my-2">Videos</h1>
        </div>
        <div className="container grid lg:grid-cols-2 items-center justify-center sm:grid-cols-2 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
          <div className=" p-3 rounded-md">
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/LlCwHnp3kL4?si=jkgaah3IZuJRcPtc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <span className="text-xl font-medium">Virtual tour of Springdale Public School.</span>
          </div>
          <div className=" p-3 rounded-md">
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/OtEE4LIoL_w?si=VK1T2a9RjG5w6I4t"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <span className="text-xl font-medium">Students participating in various sports events.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
