import React from 'react';
import { useState } from 'react';
import Correlatividades from './Correlatividades';

const Studies = () => {
    const [progress, showProgress] = useState(false);
    return (
        <section className="w-full gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg flex-column ring-1 ring-mycolors-ring">

            <div
                className={
                    "fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-50 z-30 flex justify-center items-center" +
                    (progress ? " block" : " hidden")
                }
                onClick={() => showProgress(false)}
            >
                <div className="px-12 py-8 bg-mycolors-bg text-left rounded-xl flex flex-col justify-center items-center sm:w-2/3 w-full h-3/4 text-mycolors-2 z-50 relative">
                    <article className='flex flex-row items-center justify-end absolute top-4 right-4 gap-6 h-8'>
                        <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 rounded-full aspect-square bg-mycolors-2'></div>
                        <p className="text-white">Aprobado</p>
                        </div>
                        <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 rounded-full aspect-square bg-yellow-300'></div>
                        <p className="text-white">Cursando</p>
                        </div>
                    </article>
                    <Correlatividades />
                </div>
            </div>

        <ul className="text-xl">
            <li>
                <h3 className="mt-2 text-xl font-bold text-mycolors-2">Estudios</h3>
            </li>
            <li>
                <h3 className="mt-2 text-xl text-white">Licenciatura en Ciencias de la Computación</h3>
                <button className='bg-mycolors-2 px-2 py-1 text-white hover:scale-105 transition-all duration-75 rounded-xl text-xs font-bold'
                onClick={() => showProgress(true)}>Ver Progreso</button>
            </li>
            <li>
                <h3 className="mt-2 text-xl text-white">Escuela Superior de Comercio Carlos Pellegrini</h3>
            </li>
        </ul>
    </section>
    );
};

export default Studies;
