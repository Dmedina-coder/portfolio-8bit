import React from 'react';
import CharacterScene from './CharacterScene';
import '../styles/gameboy-theme.css';
import cvPdf from '../assets/CV_Daniel_Medina_Negrete.pdf';

const Home: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = cvPdf;
        link.download = 'CV_Daniel_Medina_Negrete.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-wrapper" id="home">
            <div className="home" style={{ padding: "20px 0px 0px 0px"}}>
                <h1>Daniel Medina Negrete</h1>
                <h2 style={{ textAlign: "center"}}>¡Bienvenido a Mi Portfolio 8-Bit!</h2>
                <p>Explora mi trabajo y experiencias en el mundo de la Informática.</p>
                
                <nav>
                    <ul>
                        <li onClick={() => scrollToSection('about')}>
                            <span>Sobre Mí</span>
                        </li>
                        <li onClick={() => scrollToSection('experience')}>
                            <span>Experiencia</span>
                        </li>
                        <li onClick={() => scrollToSection('projects')}>
                            <span>Proyectos</span>
                        </li>
                        <li onClick={() => scrollToSection('contact')}>
                            <span>Contacto</span>
                        </li>
                        <li onClick={downloadCV}>
                            <span>Descargar CV</span>
                        </li>
                    </ul>
                </nav>

                {/* Componente de animación del personaje */}
                <CharacterScene />
            </div>
        </div>
    );
};

export default Home;