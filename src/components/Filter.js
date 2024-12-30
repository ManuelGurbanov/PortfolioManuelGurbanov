import React from 'react';


import PythonImg from './img/PythonLogo.webp';
import TailwindImg from './img/TailwindLogo.webp';
import ReactImg from './img/ReactLogo.webp';
import JavaImg from './img/JavaLogo.webp';
import BootstrapImg from './img/BootstrapLogo.webp';
import FirebaseImg from './img/FirebaseLogo.webp';

const technologyImages = {
    'Python': PythonImg,
    'Tailwind': TailwindImg,
    'React': ReactImg,
    'Java': JavaImg,
    'Bootstrap': BootstrapImg,
    'Firebase': FirebaseImg,
};


const Filter = ({ technologies, selectedTechnologies, onToggleTechnology }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <button
                    key={technology}
                    onClick={() => onToggleTechnology(technology)}
                    className={`p-2 rounded ${selectedTechnologies.includes(technology) ? 'bg-mycolors-2 bg-opacity-25' : ''}`}
                >
                    <img
                        src={technologyImages[technology]}
                        alt={technology}
                        className="w-6 h-6 transition duration-75 hover:scale-110"
                    />
                </button>
            ))}
        </div>
    );
};

export default Filter;
