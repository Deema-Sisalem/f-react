// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-700 text-white pt-24 pb-32 w-full relative">
      <div className="container text-center mx-auto flex justify-around">
        <div>
          <h3 className="text-2xl text-pink-300 font-semibold">LOCATION</h3>
          <p className="py-3">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div>
          <h3 className="text-2xl text-pink-300 font-semibold ">AROUND THE WEB</h3>
          <p className="py-3 underline">Facebook</p>
          <p className="underline">Instagram</p>
        </div>
        <div>
          <h3 className="text-2xl text-pink-300 font-semibold pb-3">ABOUT FREELANCER</h3>
          <p>Freelancer is a free to use, licensed Bootstrap theme</p>
          <p>Created by Route</p>
        </div>
      </div>
      <div className=" text-center bg-gray-800 bottom-0 py-5 left-0 right-0 absolute">
        <h1>Copyright © Your Website 2021 </h1>
      </div>
    </footer>
  );
}

export default Footer;
