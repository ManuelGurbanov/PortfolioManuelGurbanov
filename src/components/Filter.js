import React from 'react';


import PythonImg from './img/PythonLogo.png';
import TailwindImg from './img/TailwindLogo.png';
import ReactImg from './img/ReactLogo.png';
import JavaImg from './img/JavaLogo.png';
import BootstrapImg from './img/BootstrapLogo.png';

const technologyImages = {
    'Python': PythonImg,
    'Tailwind': TailwindImg,
    'React': ReactImg,
    'Java': JavaImg,
    'Bootstrap': BootstrapImg,
};


const Filter = ({ technologies, selectedTechnologies, onToggleTechnology }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <button
                    key={technology}
                    onClick={() => onToggleTechnology(technology)}
                    className={`p-2 rounded ${selectedTechnologies.includes(technology) ? 'ring-2 ring-mycolors-ring2' : ''}`}
                >
                    <img
                        src={technologyImages[technology]}
                        alt={technology}
                        className="w-10 h-10 transition duration-75 hover:scale-110"
                    />
                </button>
            ))}
        </div>
    );
};

export default Filter;
