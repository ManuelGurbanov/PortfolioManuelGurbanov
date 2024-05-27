import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Presentation from './components/Presentation';
import Social from './components/Social';
import Studies from './components/Studies';
import Projects from './components/Projects';
import Slider from './components/Slider';
import Certificates from './components/Certificates';

import Contact from './components/Contact';

export default function Main() {
    const [loading, setLoading] = useState(true);

    const handleFinishLoading = () => {
        setLoading(false);
    };

    return (
        <div className='relative'>
            {loading && <LoadingScreen onFinish={handleFinishLoading} />}
            <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <div className='flex-col justify-center w-[100vw] mt-5'>
                    <div className='w-[80vw] m-auto md:w-[60vw]'>

                        <Presentation />

                        <section className='flex flex-col justify-center w-full gap-4 m-auto sm:flex-row'>

                            <Social /><Studies />
                            
                        </section>

                        <Projects />

                        <Slider />

                        <Certificates />

                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    );
}
