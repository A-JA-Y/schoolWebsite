import React from "react";

function Students() {
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Students</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div>
          <h1 className="text-4xl font-semibold my-2">Life at springdale</h1>
        </div>
        <div className="container grid lg:grid-cols-2 items-center justify-center sm:grid-cols-1 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
          <div>
            <h3 className="text-2xl font-medium">Extracurricular Activities</h3>
            <ul>
              <li>Music</li>
              <li>Dance</li>
              <li>Drama</li>
              <li>Art</li>
              <li>Sports</li>
              <li>Robotics</li>
              <li>Debate club</li>
              <li>Science Club</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Clubs and Societies</h3>
            <ul>
              <li>Literary Society</li>
              <li>Environmental Club</li>
              <li> Astronomy Club</li>
              <li>Coding Club</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold my-2">Achievements</h1>
        </div>
        <div className="container grid lg:grid-cols-3 items-center justify-center sm:grid-cols-1 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
          <div>
            <h3 className="text-2xl font-medium">John Smith</h3>
            <span>National Level Math Olympiad Winner</span>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Sarah Lee</h3>
            <span>Gold Medalist in State Swimming Championship</span>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Tech Innovators Club</h3>
            <span>Winners of Inter-School Robotics Competition</span>
          </div>
          
        </div>
        <div>
          <h1 className="text-4xl font-semibold my-2">Student Council</h1>
        </div>
        <div className="container grid lg:grid-cols-3 items-center justify-center sm:grid-cols-1 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
            <div className="flex flex-col m-3 bg-slate-300 rounded-md py-3 items-center justify-center">
                <h1 className="text-2xl font-bold">President</h1>
                <span className="text-xl font-medium">Amy Parker</span>
                <span>Grade 12</span>
            </div>
            <div className="flex flex-col m-3 bg-slate-300 rounded-md py-3 items-center justify-center">
                <h1 className="text-2xl font-bold">Vice President</h1>
                <span className="text-xl font-medium">Rajiv Mehta</span>
                <span>Grade 11</span>
            </div>
            <div className="flex flex-col m-3 bg-slate-300 rounded-md py-3 items-center justify-center">
                <h1 className="text-2xl font-bold">Secretary</h1>
                <span className="text-xl font-medium"> Lisa Wong</span>
                <span>Grade 10</span>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default Students;
