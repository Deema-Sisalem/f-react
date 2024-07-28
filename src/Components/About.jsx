import React from 'react';

function About() {
  return (
    <div className=" bg-pink-300 mx-auto p-4 flex flex-col items-center justify-center content-center scroll-pb-96">
      <h2 className="text-4xl font-bold my-6 text-white uppercase mt-36">About Component</h2>
      <div className="w-28 h-2  relative">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 right-0 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 left-1/4 w-1/4 h-full bg-white rounded-full"></div>
                <div className="absolute top-0 left-2/4 w-1/4 h-full bg-white rounded-full"></div>

            </div>
          
   <div className='flex flex-wrap container mx-auto justify-around'>
   <p className="text-lg mt-5 my-10 w-[45%] text-white">
        Freelancer is a free bootstrap theme created by Route. The download includes the
        complete source files including HTML, CSS, and JavaScript as well as optional SASS
        stylesheets for easy customization.
      </p>
      <p className='w-[45%] text-lg mt-5 my-36 text-white'> Freelancer is a free bootstrap theme created by Route. The download includes the
        complete source files including HTML, CSS, and JavaScript as well as optional SASS
        stylesheets for easy customization.</p>
   </div>
    </div>
  );
}

export default About;
