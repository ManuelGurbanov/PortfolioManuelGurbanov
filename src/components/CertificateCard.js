import React from 'react';

const CertificateCard = ({ imgUrl, name, stack, onClick }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-lg cursor-pointer hover:bg-mycolors-sutilbg" onClick={onClick}>
      <img 
        className="object-cover w-24 h-24 mb-4 rounded-full"
        alt={name} 
        src={imgUrl} 
      />
      <footer className="text-center">
        <h1 className="text-lg font-bold text-mycolors-2">{name}</h1>
        <p className="text-sm text-gray-600">{stack}</p>
      </footer>
    </div>
  );
};

export default CertificateCard;