import React from 'react';

const Filter = ({ technologies, selectedTechnologies, onToggleTechnology }) => {
    return (
        <div>
            {technologies.map((tech) => (
                <button
                    key={tech}
                    onClick={() => onToggleTechnology(tech)}
                    className={`m-2 p-2 ring-1 ring-mycolors-ring rounded ${
                        selectedTechnologies.includes(tech) ? 'bg-mycolors-2 text-black' : 'bg-mycolors-bg text-white'
                    }`}
                >
                    {tech}
                </button>
            ))}
        </div>
    );
};

export default Filter;
