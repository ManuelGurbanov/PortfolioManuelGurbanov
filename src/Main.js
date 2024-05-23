import React from 'react';
import Presentation from './components/Presentation';
import Social from './components/Social';
import Studies from './components/Studies';
import Projects from './components/Projects';
import Slider from './components/Slider';
import Certificates from './components/Certificates';

export default function Main() {
    return (
        <div className='flex-col justify-center w-[100vw] mt-5'>
            <div className='w-[80vw] m-auto md:w-[60vw]'>

                    <Presentation />

                <section className='flex flex-col justify-center w-full gap-4 m-auto sm:flex-row'>

                    <Social /><Studies />
                    
                </section>

                    <Projects />

                    <Slider/>

                    <Certificates/>
            </div>
        </div>
    );
}
