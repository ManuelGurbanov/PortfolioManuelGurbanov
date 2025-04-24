import Filter from "./Filter";
import ProjectList from "./ProjectList";
import React, { useState } from 'react';

import ArsenalImg from './img/ArsenalImg.webp';
import MoviesImg from './img/MoviesImg.webp';
import StreamingImg from './img/StreamingImg.webp';
import CafesImg from './img/CafesImg.webp';
import NikeImg from './img/NikeProyect.jpg';
import MonedasLC from './img/lc.webp';
import OptixImg from './img/OptixImg.webp';
const projectsData = [
    {
        id: 0,
        name: 'Opptix',
        description: 'Web para la plataforma Opptix, que lleva a cabo desarrollos en 3D.',
        technologies: ['React', 'Tailwind'],
        inProgress: true,
        imgLink: OptixImg,
        deployLink: "https://opptix.com.ar/",
        gitLink: "https://github.com/ManuelGurbanov/Opptix-Web"
    },
    {
        id: 1,
        name: '¿A Dónde Vamos?',
        description: 'Web y Aplicación Android con cafeterías de Buenos Aires donde podrás reseñar y ver qué opinan tus amigos de cada Café.',
        technologies: ['React', 'Tailwind', 'Firebase'],
        imgLink: CafesImg,
        deployLink: "https://www.adondevamoscafe.com.ar",
        gitLink: "https://github.com/ManuelGurbanov/ADondeVamos-Landing"
    },
    {
        id: 2,
        name: 'Web de LC',
        description: 'Realizada para un cliente Freelance con React y Google Firebase para Autenticación y Base de Datos.',
        technologies: ['React','Firebase', 'Tailwind'],
        inProgress: false,
        imgLink: MonedasLC,
        deployLink: "https://www.monedasfifalc.com.ar/",
        gitLink: "https://github.com/ManuelGurbanov/LC/"
    },
    {
        id: 3,
        name: 'Web de Nike',
        description: 'Carrito de compras y database de Productos. Diseño Responsive con Tailwind CSS. Realizada con Django y SQLite.',
        technologies: ['React','Python', 'Tailwind'],
        imgLink: NikeImg,
        gitLink: "https://github.com/ManuelGurbanov/Clon-Nike"
    },
    {
        id: 4,
        name: 'App de Películas',
        description: 'Los usuarios pueden dar su rating a películas, así como ver las puntuaciones de otros. Realizada con Django y Tailwind CSS. Base de datos en SQL, con Register y Login.',
        technologies: ['Python', 'Tailwind'],
        imgLink: MoviesImg,
        gitLink: "https://github.com/ManuelGurbanov/clon-letterboxd-django-tailwind"
    },
    {
        id: 6,
        name: 'Web de Arsenal de Sarandí',
        description: 'Crud a una base de datos de jugadores realizada para el curso de Fullstack Python en colaboración un compañero.',
        technologies: ['Python', 'Bootstrap'],
        imgLink: ArsenalImg,
        gitLink: "https://github.com/ManuelGurbanov/ArsenalDjango"
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
        <section className="flex flex-col gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg ring-1 ring-mycolors-ring">
            <h1 className='text-xl font-bold text-mycolors-2'>Proyectos Web</h1>
            <Filter
                technologies={allTechnologies}
                selectedTechnologies={selectedTechnologies}
                onToggleTechnology={handleToggleTechnology}
            />
            {filteredProjects.length > 0 ? (
                <ProjectList projects={filteredProjects} />
            ) : (
                <p className="text-lg text-left text-white">No hay proyectos que cumplan con los filtros.</p>
            )}
        </section>
    );
};

export default Projects;
