import React, { useState } from 'react';

const CopyEmailButton = ({ gmail }) => {
  const [buttonText, setButtonText] = useState('Copiar dirección de correo');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gmail)
      .then(() => {
        setButtonText('Copiado!');
        setTimeout(() => setButtonText('Copiar dirección de correo'), 2000);
      })
      .catch((err) => {
        console.error('Error al copiar el correo electrónico: ', err);
      });
  };

  return (
    <button onClick={copyToClipboard} className='p-2 mt-4 text-white transition duration-75 rounded-lg bg-mycolors-ring hover:scale-105'>
      {buttonText}
    </button>
  );
};

export default CopyEmailButton;
