import React from 'react';

const Studies = () => {
    return (
        <section className="w-full gap-5 p-4 mt-4 shadow-md rounded-2xl bg-mycolors-bg flex-column ring-1 ring-mycolors-ring">
        <ul className="text-xl">
            <li>
                <h3 className="mt-2 text-xl font-bold text-mycolors-2">Estudios</h3>
            </li>
            <li>
                <h3 className="mt-2 text-xl text-white">Licenciatura en Ciencias de la Computación (en curso)</h3>
            </li>
            <li>
                <h3 className="mt-2 text-xl text-white">Escuela Superior de Comercio Carlos Pellegrini</h3>
            </li>
        </ul>
    </section>
    );
};

export default Studies;
