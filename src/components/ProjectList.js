import React from 'react';
import GitButton from './img/GitButton.webp';

const ProjectList = ({ projects }) => {
  return (
    <div className='flex-col gap-4 lg:grid lg:grid-cols-2'>
      {projects.map((project) => (
        <div key={project.id} className='flex flex-col mt-3 shadow-md bg-mycolors-bg rounded-xl ring-1'>
          <div className='relative'>
            <img
              className='object-cover w-full h-full rounded-t-xl'
              src={project.imgLink}
              alt={project.name}
            />
            <div className={
              'absolute top-0 left-1 bg-red-600 text-white font-bold px-2 py-1 rounded-br-xl rounded-lg ' +
              (project.inProgress ? 'block' : 'hidden')
            }>
              <h1>En Progreso</h1>
            </div>

          </div>
          <div className='flex flex-col flex-1 p-4'>
            <h3 className='mb-3 ml-3 font-bold text-white'>{project.name}</h3>
            <p className='mb-2 ml-3 font-semibold text-slate-600'>{project.description}</p>
            <p className='mb-4 ml-3 font-semibold text-slate-700'>{project.technologies.join(', ')}</p>

            <div className="flex gap-2 mt-auto">
            {project.deployLink && (
                <a
                  href={project.deployLink}
                  className="px-4 py-2 text-white transition duration-75 rounded-lg bg-mycolors-2 hover:scale-105 ring-1 ring-mycolors-2 ring-opacity-45"
                  rel="noopener noreferrer"
                  target='_blank'
                >
                  <p>Ver Deploy</p>
                </a>
              )}
              <a href={project.gitLink} className="" rel="noopener noreferrer" target='_blank'>
                <img
                  src={GitButton}
                  alt="Ver en GitHub"
                  className="w-10 h-10 text-white transition duration-75 hover:scale-105"
                />
              </a>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
