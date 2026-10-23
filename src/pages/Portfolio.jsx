import React from 'react';
import About from "../components/About";
import NavBar from "../components/Navbar";
import ProjectStack from "../components/Projects";
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Experiences from '../components/Experiences';
import TechMarquee from '../components/TechMarquee';
import useReveal from '../hooks/useReveal';

function Section({ id, title, children }) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
            <h2 data-reveal className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl mb-12">
                {title}
            </h2>
            {children}
        </section>
    );
}

function Portfolio() {
    useReveal();

    return (
        <>
            <NavBar />
            <main>
                <About/>

                <TechMarquee/>

                <Section id="projects" title="Projects">
                    <ProjectStack/>
                </Section>

                <Section id="skills" title="Skills">
                    <Skills/>
                </Section>

                <Section id="experience" title="Experience">
                    <Experiences/>
                </Section>
            </main>
            <Footer/>
        </>
    );
}

export default Portfolio;
