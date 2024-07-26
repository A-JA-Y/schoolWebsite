export default function Contact() {
  return (
    <>
      <h1 className="text-5xl font-extrabold my-3 text-center ">Contact us</h1>
      <div className="about flex flex-col items-center justify-center my-2 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 bg-slate-100 py-5">
        <div className="conatctInfo">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">Address:</h1>
            <span>
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </span>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">Phone:</h1>
            <span>+1 (123) 456-7890</span>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">E-mail:</h1>
            <span>info@springdale.edu</span>
          </div>
        </div>
        <div className="cotactForm">
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdY3fKukBIRT4x7luxA0SaOxKFkUH7nn7dEhO6wGTpQnlmghw/viewform?embedded=true"
              width="320"
              height="950"
              frameborder="0"
              marginheight="0"  
              marginwidth="0"
              c
            >
              Loading…
            </iframe>
          </div>
        </div>
        <div className="map m-3">
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.905991179578!2d77.45018687315496!3d28.692458627522207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1763b4de44b%3A0x5a640da86eaee1c1!2sSpringdales%20Public%20School!5e0!3m2!1sen!2sin!4v1722018424989!5m2!1sen!2sin" width="300" height="225"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
