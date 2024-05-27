import React from 'react';
import GitButton from './img/GitButton.webp';
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
      <div className='flex flex-col flex-1 p-4'>
        <h3 className='mb-3 ml-3 font-bold text-white'>{project.name}</h3>
        <p className='mb-2 ml-3 font-semibold text-slate-600'>{project.description}</p>
        <p className='mb-4 ml-3 font-semibold text-slate-700'>{project.technologies.join(', ')}</p>

        <div className="mt-auto">
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
