import React from "react";

function Faculty() {
  const Profiles = [
    {
      Name: "John Doe",
      Position: "Principal",
      Education: "M.Ed.",
      Experience: "20 years of experience in educational administration",
    },
    {
      Name: "Jane Smith",
      Position: "Vice Principal",
      Education: "M.Sc. in physics",
      Experience: "15 years of teaching experience.",
    },
    {
      Name: "Emily Johnson",
      Position: "English Teacher",
      Education: "M.A. in english ",
      Experience: "10 years of teaching experience.",
    },
    {
      Name: "Michael Brown",
      Position: "Mathematics Teacher",
      Education: " M.Sc. in Mathematics",
      Experience: "8 years of teaching experience",
    },
    {
      Name: "Sophia Davis",
      Position: "Science Teacher",
      Education: " M.Sc. in Chemistry",
      Experience: "12 years of teaching experience",
    },
    {
      Name: "David Wilson",
      Position: "Computer Science Teacher",
      Education: " B.Tech in Computer Science",
      Experience: " 5 years of teaching experience",
    },
  ];
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Faculty</h1>
      <div className="about my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div >
          <h1 className="text-4xl font-semibold my-2">Profiles</h1>
        </div>
        <div className="container grid lg:grid-cols-3 items-center justify-center sm:grid-cols-2 gap-5 w-full bg-slate-200  rounded-lg py-5 px-4">
            {Profiles.map((profile, index) => (
                <div
                key={index}
                className="history flex flex-col  justify-center  rounded-md lg:w-1/3 sm:w-full "
                >
                <h1 className="text-3xl font-bold ">{profile.Name}</h1>
                <p>{profile.Position}</p>
                <p>{profile.Education}</p>
                <p>{profile.Experience}</p>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Faculty;
