import React from 'react';

const DetailsMenu = ({ imgUrl, name, description, stack, onClose, certifUrl }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-[90vw] max-h-[90vh] md:max-w-[60vw] md:max-h-[70vh] p-6 rounded-lg shadow-lg bg-mycolors-bg overflow-y-scroll overscroll-x-none">
        <button 
          className="absolute text-2xl text-red-500 top-4 left-4 hover:text-red-600" 
          onClick={onClose}
        >
          ✖
        </button>

        <img 
          className="object-cover w-16 h-16 mx-auto mb-4 rounded-full"
          alt={name} 
          src={imgUrl} 
        />

        <h1 className="text-2xl font-bold text-center text-mycolors-2">{name}</h1>
        <p className="mt-4 text-center text-gray-600">{description}</p>
        <p className="mt-4 text-center text-gray-200">{stack}</p>

        {certifUrl ? (
          <img 
            className="object-cover w-full md:max-w-[60%] md:max-h-[40%] mx-auto mb-4 mt-6 rounded-lg"
            alt="Certificate" 
            src={certifUrl} 
          />
        ) : (
          <p className="mt-4 text-center text-gray-400">(A espera de Certificado)</p>
        )}
      </div>
    </div>
  );
};

export default DetailsMenu;
