import React from 'react';

const CopyEmailButton = ({ gmail }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gmail)
      .then(() => {
        alert('Correo electrónico copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar el correo electrónico: ', err);
      });
  };

  return (
    <button onClick={copyToClipboard} className='p-2 mt-4 text-white transition duration-75 rounded-lg bg-mycolors-ring hover:scale-105'>
      Copiar
    </button>
  );
};

export default CopyEmailButton;
