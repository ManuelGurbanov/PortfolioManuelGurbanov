import React from 'react';

const Presentation = () => {
    return (
        <section className="flex-col w-full rounded-xl">
            <div className="flex flex-col items-center justify-between gap-4 p-4 mx-auto shadow-md bg-mycolors-bg lg:flex-row lg:gap-24 rounded-2xl ring-1 ring-mycolors-ring">
                <div className="flex flex-col gap-2 text-center lg:text-left">
                    <p className="text-3xl text-slate-600">Portfolio de</p>
                    <h1 className="text-4xl font-bold text-white">Manuel Gurbanov</h1>
                    <p className="text-xl text-slate-600">Actualmente Desarrollador Freelancer</p>
                    <p className="text-xl text-mycolors-2 font-bold">Disponibilidad  
                        <span className='text-slate-300'> Fulltime</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/70826979?v=4"
                        alt="Manuel Gurbanov"
                        className="object-cover w-24 h-24 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Presentation;