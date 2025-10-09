import React from 'react';
import About from "../components/About";
import NavBar from "../components/Navbar";
import ProjectStack from "../components/Projects";
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Experiences from '../components/Experiences';

function Portfolio() {

    return (
        <>
            <NavBar />
            <main className="pt-20">
                
                <About/>

                <div className='border-b-2 border-indigo-500 m-16'></div>

                <section
                    id="projects"
                    className="flex flex-col items-center justify-center text-center bg-gray-50" 
                >
                    <h2 className="text-4xl font-bold">Projects</h2> 

                    <ProjectStack/>
                </section>

                <div className='border-b-2 border-indigo-500 m-16'></div>

                <section
                    id="skills"
                    className='flex flex-col items-center justify-center text-center bg-gray-50'
                >
                    <h2 className="text-4xl font-bold">Skills</h2> 

                    <Skills/>
                </section>

                <div className='border-b-2 border-indigo-500 m-16'></div>

                <section
                    id="experience"
                    className='flex flex-col items-center justify-center text-center bg-gray-50'
                >
                    <h2 className="text-4xl font-bold">Experience</h2> 

                    <Experiences/>
                </section>

                <div className='border-b-2 border-indigo-500 m-16'></div>

                <Footer/>
            </main>
        </>
    );
}

export default Portfolio;