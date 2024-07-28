import React from 'react';

function Contact() {
  return (
    <><div className="  mx-auto p-4 flex flex-col items-center justify-center content-center scroll-pb-96">
      <h2 className="text-4xl font-bold my-6  uppercase ">Contact section</h2>
      <div className="w-28 h-2  relative">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 left-1/4 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 left-2/4 w-1/4 h-full bg-pink-300 rounded-full"></div>

      </div>
    </div>
    <div className="container mx-auto p-4">
        <form className='container mx-auto w-[50%]'>
          <input type="text" placeholder="Name"  className='w-full my-5 border-b rounded border-pink-100 px-3 py-2'/>
          <input type="number" placeholder="Age"  className='w-full my-5 border-b rounded border-pink-100 px-3 py-2'/>
          <input type="email" placeholder="Email"  className='w-full my-5 border-b rounded border-pink-100 px-3 py-2'/>
          <input type="password" placeholder="Password" className='w-full my-5 border-b rounded border-pink-100 px-3 py-2' />
          <button type="submit" className='mt-2 mb-6 bg-pink-300 text-white py-2 px-5 rounded'>Send Message</button>
        </form>
      </div></>
  );
}

export default Contact;
