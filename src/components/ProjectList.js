import React from 'react';

const ProjectList = ({ projects }) => {
  return (
  <div className='flex-col gap-4 lg:grid lg:grid-cols-2'>

    {projects.map((project) => (
      <div key={project.id} className='flex flex-col mt-3 shadow-md bg-mycolors-bg rounded-xl ring-1 ring-mycolors-ring2'>
        <div>
          <img
            className='object-cover w-full h-full rounded-t-xl'
            src={project.imgLink}
            alt={project.name}
          />
        </div>
        <div className='p-4'>
          <h3 className='mb-3 ml-3 font-bold text-white'>{project.name}</h3>
          <p className='mb-2 ml-3 font-semibold text-slate-600'>{project.description}</p>
          <p className='mb-4 ml-3 font-semibold text-slate-700'>{project.technologies.join(', ')}</p>
          <a
            href='#'
            className='inline-block px-4 py-2 text-center text-white transition-colors duration-200 rounded-md bg-mycolors-bg hover:bg-mycolors-ring'
          >
            Ver Repositorio
          </a>
        </div>
      </div>
    ))}



  </div>
  );
};

export default ProjectList;
