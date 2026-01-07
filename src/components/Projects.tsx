import React from 'react';
import '../styles/components.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Super Gramola',
            description: 'Una aplicación web para reproducir música en bares, permitiendo a los usuarios seleccionar canciones de una lista y controlar la reproducción. Desarrollada con Angular para el frontend y Java para el backend.',
            link: 'https://github.com/Dmedina-coder/SuperGramola'
        },
        {
            title: 'Spotifice',
            description: 'Una aplicación que replica el funcionamiento básico de Spotify, permitiendo la gestión de renderizado y servidores de música de manera distribuida utilizarndo para ello Python y ZeroC Ice para la comunicación entre servicios.',
            link: 'https://github.com/Dmedina-coder/IceGrid_Spotifice'
        },
        {
            title: 'GameKey Hunter 2.0',
            description: 'Un proyecto que consiste en una aplicación para comparar claves de videojuegos digitales de manera consultando diversas APIs. ',
            link: 'https://github.com/Dmedina-coder/isi-gamekeyhunter2.0'
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2>./Proyectos más relevantes</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </li>
                ))}
            </ul>
            
            <div className="github-link-container">
                <h2>./Otros proyectos</h2><br/>
                <ul>
                    <li>
                        <h3>Repositorio GutHub</h3>
                        <p>Puedes ver más trabajos personales en mi repositorio de GitHub.</p>
                        <a href="https://github.com/Dmedina-coder" target="_blank" rel="noopener noreferrer">Repositorio</a>
                    </li>
            </ul>
            </div>
        </section>
    );
};

export default Projects;