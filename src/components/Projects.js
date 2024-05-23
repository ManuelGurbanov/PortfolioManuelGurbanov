import Filter from "./Filter";
import ProjectList from "./ProjectList";
import React, { useState } from 'react';

import ArsenalImg from './img/ArsenalImg.webp';
import MoviesImg from './img/MoviesImg.webp';
import StreamingImg from './img/StreamingImg.webp';
import CafesImg from './img/CafesImg.webp';

const projectsData = [
    {
        id: 1,
        name: 'App de Películas',
        description: 'Los usuarios pueden dar su rating a películas, así como ver las puntuaciones de otros. Realizada con Django y Tailwind CSS. Base de datos en SQL, con Register y Login',
        technologies: ['Python', 'Tailwind'],
        imgLink: MoviesImg
    },
    {
        id: 2,
        name: 'A Dónde Vamos',
        description: 'Landing page de aplicación en desarrollo para encontrar las mejores cafeterías de Buenos Aires',
        technologies: ['React', 'Tailwind'],
        imgLink: CafesImg
    },
    {
        id: 3,
        name: 'Clon de Web de Streaming',
        description: 'Diseñada para el Curso de Fullstack Java, con fetch a API de películas y próximamente db en Java.',
        technologies: ['Java', 'Bootstrap'],
        imgLink: StreamingImg
    },
    {
        id: 4,
        name: 'Web de Arsenal de Sarandí',
        description: 'Crud a una base de datos de jugadores realizada para el curso de Fullstack Python',
        technologies: ['Python', 'Bootstrap'],
        imgLink: ArsenalImg
    },
];

const Projects = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

    const handleToggleTechnology = (technology) => {
        setSelectedTechnologies((prevSelected) =>
            prevSelected.includes(technology)
                ? prevSelected.filter((tech) => tech !== technology)
                : [...prevSelected, technology]
        );
    };

    const filteredProjects = selectedTechnologies.length > 0
        ? projectsData.filter(project =>
            selectedTechnologies.every(tech => project.technologies.includes(tech))
        )
        : projectsData;

    const allTechnologies = [...new Set(projectsData.flatMap(project => project.technologies))];
    
    return (
        <>
        <section className="flex flex-col gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg ring-1 ring-mycolors-ring">
        <h1 className='text-xl font-bold text-mycolors-2'>Proyectos Web</h1>
        <Filter
            technologies={allTechnologies}
            selectedTechnologies={selectedTechnologies}
            onToggleTechnology={handleToggleTechnology}
            />
        <ProjectList projects={filteredProjects} />
        </section>
        </>
    );
};

export default Projects;
