import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/contact";
import image from "../../components/images/Designer.png";

export default function About() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold my-3 text-center ">About us</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="container flex flex-col items-center justify-center sm:flex-col-reverse lg:flex-row gap-5 w-full bg-slate-200  rounded-lg py-5 px-8">
          <div className="history flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">History</h1>
            <span>
              Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students.
            </span>
          </div>
          <div className="Vision flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">Vision</h1>
            <span>
              To create a learning environment that fosters academic excellence,
              critical thinking, and ethical values.
            </span>
          </div>
          <div className="Mision flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">Mision</h1>
            <span>
              Our mission is to empower students with the knowledge, skills, and
              values needed to thrive in a dynamic world..
            </span>
          </div>

          <div className="Message flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">Principal's message</h1>
            <span>
              "At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future."
            </span>
            <span>~Principal</span>
          </div>
          <div className="Message flex flex-col items-center justify-center   p-4 rounded-md lg:w-1/5 sm:w-full ">
            <h1 className="text-3xl font-bold ">
              Infrastructure and Facilities
            </h1>
            <span>
              <ul className="list-disc">
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>
                  Library with a vast collection of books and digital resources
                </li>
                <li>
                  Sports facilities including a playground, gymnasium, and
                  swimming pool
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
