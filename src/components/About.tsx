import React from 'react';
import '../styles/components.css';
import { LogoLoop } from './LogoLoop';
import reactLogo from '../assets/icons/react.svg';
import nodejsLogo from '../assets/icons/nodejs.svg';
import pythonLogo from '../assets/icons/python.svg';
import javaLogo from '../assets/icons/java.svg';
import angularLogo from '../assets/icons/angular.svg';
import gitLogo from '../assets/icons/git.svg';
import dockerLogo from '../assets/icons/docker.svg';
import vmwareLogo from '../assets/icons/vmware.svg';
import arubaLogo from '../assets/icons/aruba.svg';
import mysqlLogo from '../assets/icons/mysql.svg';
import githubLogo from '../assets/icons/github.svg';

const About: React.FC = () => {
    const techLogos = [
        { src: reactLogo, alt: 'React' },
        { src: nodejsLogo, alt: 'Node.js' },
        { src: pythonLogo, alt: 'Python' },
        { src: javaLogo, alt: 'Java' },
        { src: angularLogo, alt: 'Angular' },
        { src: gitLogo, alt: 'Git' },
        { src: dockerLogo, alt: 'Docker' },
        { src: vmwareLogo, alt: 'VMware' },
        { src: arubaLogo, alt: 'Aruba Networks' },
        { src: mysqlLogo, alt: 'MySQL' },
        { src: githubLogo, alt: 'GitHub' },
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