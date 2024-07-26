import React from "react";

function Admissions() {
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Admissions</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="curriculum">
          <h1 className="text-4xl font-semibold my-2">Process</h1>
        </div>
        <div className="container flex flex-col items-center justify-center sm:flex-col-reverse lg:flex-row gap-5 w-full bg-slate-200  rounded-lg py-5 px-8">
            <h3 className="text-2xl font-medium">Admission forms are available for download. Submit the completed form along with required documents at the school office.</h3>
        </div>
      </div>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="curriculum">
          <h1 className="text-4xl font-semibold my-2">Criteria</h1>
        </div>
        <div className="container flex flex-col items-center justify-center sm:flex-col-reverse lg:flex-row gap-5 w-full bg-slate-200  rounded-lg py-5 px-8">
        <h3 className="text-2xl font-medium">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</h3>
        </div>
      </div>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="curriculum">
          <h1 className="text-4xl font-semibold my-2">Important Dates</h1>
        </div>
        <div className="container flex flex-col items-center justify-center sm:flex-col-reverse lg:flex-row gap-5 w-full bg-slate-200  rounded-lg py-5 px-8">
        <h3 className="text-xl font-medium"><ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
            </ul></h3>
        </div>
      </div>
    </>
  );
}

export default Admissions;
