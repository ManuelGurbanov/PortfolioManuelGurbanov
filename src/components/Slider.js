import React, { useState } from 'react';
import GooglePlay1 from './img/GooglePlay1.jpg';
import GooglePlay2 from './img/GooglePlay2.jpg';
import ArrowRight from './img/ArrowRight.svg';
import ArrowLeft from './img/ArrowLeft.svg';
const images = [
  GooglePlay1,
  GooglePlay2,
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <main className='flex flex-col gap-2 p-4 mt-4 mb-10 shadow-md rounded-2xl bg-mycolors-bg ring-1 ring-mycolors-ring'>
      <h1 className='text-xl font-bold text-mycolors-2'>Proyectos Android</h1>
      <p className='ml-3 font-semibold text-slate-500'>Entre 2020 y 2022 publiqué 9 aplicaciones en Google Play que acumularon +35.000 descargas y +125.000 impresiones.</p>
      <p className='ml-3 font-semibold text-slate-200'>Desarrolladas en su totalidad por mí, fueron mi primer contacto con la Programación Orientada a Objectos.</p>
      
      <div className="relative flex items-center justify-center w-3/4 mx-auto mt-10">
        <button
          onClick={prevSlide}
          className="absolute left-[0] p-2 transform -translate-y-1/2 bg-black bg-opacity-75 rounded-full shadow-md top-1/2 hover:bg-opacity-100"
        >
          <img src={ArrowLeft} alt='ArrowLeft' className='w-6' />
        </button>

        <div className="w-full max-w-xl mb-4 overflow-hidden">
          <img src={images[currentIndex]} alt="slider" className="object-cover w-full h-64 rounded-xl" />
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[0] p-2 transform -translate-y-1/2 bg-black bg-opacity-75 rounded-full shadow-md top-1/2 hover:bg-opacity-100"
        >
          <img src={ArrowRight} alt='ArrowRight' className='w-6' />
        </button>
      </div>
    </main>
  );
};

export default Slider;