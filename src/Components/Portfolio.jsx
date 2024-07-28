import React, { useState, useEffect, useRef } from 'react';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    './../../images/poert1.png',
    './../../images/port2.png',
    './../../images/port3.png',
    './../../images/poert1.png',
    './../../images/port2.png',
    './../../images/port3.png',
  ];

  const handleImageClick = (index) => {
    setIsModalOpen(index);
  };

  const handleOutsideClick = (event) => {
    if (isModalOpen && modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isModalOpen]);

  return (
    <><div className="  mx-auto p-4 flex flex-col items-center justify-center content-center scroll-pb-96">
      <h2 className="text-4xl font-bold my-6  uppercase ">portfolio component</h2>
      <div className="w-28 h-2  relative">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 left-1/4 w-1/4 h-full bg-pink-300 rounded-full"></div>
        <div className="absolute top-0 left-2/4 w-1/4 h-full bg-pink-300 rounded-full"></div>

      </div>
    </div><div className="container mx-auto pb-16 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Project ${index + 1}`} className="hover:opacity-75 cursor-pointer" onClick={() => handleImageClick(index)} />
            </div>
          ))}
        </div>

        {/* {isModalOpen !== null && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <div ref={modalRef} className="bg-white rounded-lg p-8">
          <img src={projects[isModalOpen]} alt={`Project ${isModalOpen + 1}`} className="w-full mb-4" />
        </div>
      </div>
    )} */}
      </div></>
  );
};

export default Portfolio;
