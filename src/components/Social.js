import React from 'react';
import GitButton from './img/GitButton.webp';
import LinkedInButton from './img/LinkedInButton.webp';
const Social = () => {
    return (
        <div className="w-full gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg flex-column ring-mycolors-ring ring-1">
            <h1 className="mt-2 text-xl font-semibold text-mycolors-2">Mis Redes:</h1>
            <div className="flex gap-4 mt-4">
                <a href="https://github.com/ManuelGurbanov" className="transition duration-75 hover:scale-105" rel="noopener noreferrer" target='_blank'>
                    <img
                        src={GitButton}
                        alt="Github"
                        className="w-10 h-10 text-white"
                    />
                </a>
                <a href="https://www.linkedin.com/in/manuel-gurbanov-5b6307242/" className="transition duration-75 hover:scale-105" rel="noopener noreferrer" target='_blank'>
                    <img
                        src={LinkedInButton}
                        alt="Linkedin"
                        className="w-10 h-10 text-white"
                    />
                </a>
            </div>
        </div>
    );
};

export default Social;
