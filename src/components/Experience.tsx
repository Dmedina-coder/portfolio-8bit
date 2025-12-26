import React from 'react';
import '../styles/components.css';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Tecnico de sistemas microinformaticos',
            company: 'Cableroy Telecom SL',
            duration: '2019 - 2020',
            description: 'Soporte técnico y mantenimiento de equipos informáticos. Instalación y configuración de hardware y software. Resolución de incidencias técnicas y atención al usuario.'
        },
        {
            title: 'Analista funcional de sistemas de comunicaciones',
            company: 'Sector publico',
            duration: '2020 - Presente',
            description: 'Gestión y análisis de sistemas de comunicaciones, especializado en telefonía fija y móvil. Aseguramiento de la continuidad y eficiencia de infraestructuras críticas.'
        }
    ];

    return (
        <section className="experience" id="experience">
            <h2>./Experiencia</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <h3>{exp.title}</h3>
                        <p><strong>{exp.company}</strong> | {exp.duration}</p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;