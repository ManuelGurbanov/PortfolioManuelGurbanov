import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 1000); // Duración del fade out
        }, 2000); // Duración de la pantalla de carga

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-opacity-90 bg-mycolors-bg flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className="m-5 text-2xl font-semibold text-mycolors-2 max-w-[80vw]">
                <h3>
                    Bienvenidos a mi portfolio
                </h3>
                <h1 className='text-white font-bolder text-7xl'>
                    Manuel Gurbanov
                </h1>
            </div>
        </div>
    );
};

export default LoadingScreen;
