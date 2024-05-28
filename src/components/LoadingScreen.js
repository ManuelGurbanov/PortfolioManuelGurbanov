import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeInText, setFadeInText] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setFadeInText(true);
        }, 25);

        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onFinish, 1000);
        }, 1400);

        return () => {
            clearTimeout(timer);
            clearTimeout(textTimer);
        };
    }, [onFinish]);

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-opacity-90 flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className={`m-5 text-2xl font-normal text-mycolors-2 max-w-[80vw] transition-opacity duration-1000 ${fadeInText ? 'opacity-100' : 'opacity-0'}`}>
                <h3>
                    Bienvenidos a mi portfolio
                </h3>
                <h1 className='text-6xl text-white font-bolder'>
                    Manuel Gurbanov
                </h1>
            </div>
        </div>
    );
};

export default LoadingScreen;
