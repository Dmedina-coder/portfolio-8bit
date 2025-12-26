import React from 'react';
import '../styles/components.css';
import { LogoLoop } from './LogoLoop';

const About: React.FC = () => {
    const techLogos = [
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', alt: 'Angular' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
        { src: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vmware_workstation_16_icon.svg', alt: 'VMware' },
        { src: 'https://www.svgrepo.com/download/354803/aruba.svg', alt: 'Aruba Networks' },
        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', alt: 'MySQL' },
        { src: 'https://www.svgrepo.com/download/512317/github-142.svg', alt: 'GitHub' },
    ];

    return (
        <section className="about" id="about">
            <h2>./Sobre Mí</h2>
            <p>
                ¡Hola! Soy un protoingeniero Informático con sólida experiencia en el sector público, 
                especializado en análisis de sistemas y gestión de comunicaciones. Durante varios años 
                he trabajado en proyectos relacionados con telefonía fija y móvil, asegurando la 
                continuidad y eficiencia de las infraestructuras críticas.
            </p>
            <p>
                Mi enfoque combina conocimientos técnicos avanzados con capacidad para optimizar 
                procesos y garantizar soluciones seguras y escalables. Apasionado por la tecnología 
                y la mejora continua, busco aportar valor mediante innovación y compromiso en cada proyecto.
            </p>
            
            <h3>Habilidades</h3>
            <ul className="skills-grid">
                <li>Análisis de Sistemas</li>
                <li>Gestión de Comunicaciones</li>
                <li>Telefonía Fija y Móvil</li>
                <li>Infraestructuras Críticas</li>
                <li>Coordinación de equipos técnicos</li>
                <li>Desarrollo multiplataforma</li>
            </ul>

            <h3>Tecnologías y Herramientas</h3>
            <div className="tech-logos-container">
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover={true}
                    scaleOnHover={true}
                    fadeOut={true}
                    fadeOutColor="var(--gb-light)"
                />
            </div>
        </section>
    );
};

export default About;