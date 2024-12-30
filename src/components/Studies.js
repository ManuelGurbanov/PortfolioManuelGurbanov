import React from 'react';
import { useState } from 'react';
const Studies = () => {
    const [progress, showProgress] = useState(false);
    return (
        <section className="w-full gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg flex-column ring-1 ring-mycolors-ring">

            <div
                className={
                    "fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-50 z-30 flex justify-center items-center" +
                    (progress ? " block" : " hidden")
                }
            >
                <div className="px-12 py-8 bg-mycolors-bg text-left rounded-xl flex flex-col justify-center items-center text-mycolors-2 z-50">
                    <h3 className="text-white text-2xl font-bold">Materias Aprobadas</h3>
                    <p>Algoritmos y Estructuras de Datos I</p>
                    <p>Álgebra I</p>
                    <p>Organizador del Computador I (Sistemas Digitales)</p>
                    <h3 className="text-white text-2xl font-bold mt-4">Materias en Curso</h3>
                    <p>Algoritmos y Estructuras de Datos II</p>
                    <p>Organizador del Computador II</p>

                    <button
                        className="bg-mycolors-2 px-2 py-1 text-white hover:scale-105 transition-all duration-75 rounded-xl mt-4"
                    onClick={() => showProgress(false)}>
                        Volver
                    </button>
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
