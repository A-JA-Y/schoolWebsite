import React from "react";

function Academics() {
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Academics</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="curriculum">
          <h1 className="text-4xl font-semibold my-2">Curriculum</h1>
        </div>
        <div className="container flex flex-col items-center justify-center sm:flex-col-reverse lg:flex-row gap-5 w-full bg-slate-200  rounded-lg py-5 px-8">
          <div className="history flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">Primary (Grades 1-5)</h1>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
          <div className="Vision flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">Secondary (Grades 6-10)</h1>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science(Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>
          <div className="Mision flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">
              Senior Secondary (Grades 11-12)
            </h1>
            <ul>
              <li>
                <div>
                  <h2 className="text-2xl font-medium">Science Stream</h2>
                  <ul>
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>Biology</li>
                    <li>Mathematics</li>
                    <li>Computer Science</li>
                    <li>English</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <h2 className="text-2xl font-medium">Commerce Stream</h2>
                  <ul>
                    <li>Accountancy</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                    <li>English</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="methodology">
          <h1 className="text-4xl font-semibold my-2">
            Teaching Methodologies
          </h1>
          <span>
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </span>
        </div>
        <div className="methodology">
          <h1 className="text-4xl font-semibold my-2">Educational Resources</h1>
          <span>Digital classrooms, interactive learning modules, and access to online educational platforms.</span>
        </div>
      </div>
    </>
  );
}

export default Academics;
