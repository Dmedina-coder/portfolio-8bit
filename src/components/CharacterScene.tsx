import React, { useEffect, useRef } from 'react';
import '../styles/character-animation.css';
import arbol from '../assets/imagenes/arbol.png';
import nube1 from '../assets/imagenes/nube1.png';
import nube2 from '../assets/imagenes/nube2.png';
import nube3 from '../assets/imagenes/nube3.png';
import personaje1 from '../assets/imagenes/personaje1.png';
import personaje2 from '../assets/imagenes/personaje2.png';
import terreno from '../assets/imagenes/terreno.png';
import fondoImage from '../assets/imagenes/fondo.png';

const CharacterScene: React.FC = () => {
    const cloudsRef = useRef<HTMLDivElement>(null);
    const sceneryRef = useRef<HTMLDivElement>(null);
    const groundRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            // Animar fondo (muy muy lento - parallax más lejano)
            if (backgroundRef.current) {
                const background = backgroundRef.current;
                const currentX = parseFloat(background.style.transform?.replace('translateX(', '').replace('px)', '') || '0');
                const newX = currentX - 0.05;
                
                if (Math.abs(newX) >= background.scrollWidth / 2) {
                    background.style.transform = 'translateX(0px)';
                } else {
                    background.style.transform = `translateX(${newX}px)`;
                }
            }

            // Animar nubes (muy lento)
            if (cloudsRef.current) {
                const clouds = cloudsRef.current;
                const currentX = parseFloat(clouds.style.transform?.replace('translateX(', '').replace('px)', '') || '0');
                const newX = currentX - 0.1;
                
                if (Math.abs(newX) >= clouds.scrollWidth / 2) {
                    clouds.style.transform = 'translateX(0px)';
                } else {
                    clouds.style.transform = `translateX(${newX}px)`;
                }
            }

            // Animar escenario (árboles - velocidad media)
            if (sceneryRef.current) {
                const scenery = sceneryRef.current;
                const currentX = parseFloat(scenery.style.transform?.replace('translateX(', '').replace('px)', '') || '0');
                const newX = currentX - 0.4;
                
                if (Math.abs(newX) >= scenery.scrollWidth / 2) {
                    scenery.style.transform = 'translateX(0px)';
                } else {
                    scenery.style.transform = `translateX(${newX}px)`;
                }
            }

            // Animar suelo (más rápido pero no tanto)
            if (groundRef.current) {
                const ground = groundRef.current;
                const currentX = parseFloat(ground.style.transform?.replace('translateX(', '').replace('px)', '') || '0');
                const newX = currentX - 1;
                
                if (Math.abs(newX) >= ground.scrollWidth / 2) {
                    ground.style.transform = 'translateX(0px)';
                } else {
                    ground.style.transform = `translateX(${newX}px)`;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="character-scene">
            {/* Fondo animado - capa más lejana */}
            <div className="scene-background" ref={backgroundRef}>
                <img src={fondoImage} alt="background" className="background-tile" />
                <img src={fondoImage} alt="background" className="background-tile" />
                <img src={fondoImage} alt="background" className="background-tile" />
                <img src={fondoImage} alt="background" className="background-tile" />
                <img src={fondoImage} alt="background" className="background-tile" />
                <img src={fondoImage} alt="background" className="background-tile" />
            </div>

            {/* Nubes */}
            <div className="clouds" ref={cloudsRef}>
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
                <img src={nube1} alt="cloud" className="cloud" />
                <img src={nube2} alt="cloud" className="cloud" />
                <img src={nube3} alt="cloud" className="cloud" />
            </div>
            
            {/* Elementos del escenario */}
            <div className="scenery" ref={sceneryRef}>
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
                <img src={arbol} alt="tree" className="tree" />
            </div>
            
            {/* Personaje caminando con sprite animation */}
            <div className="character">
                <img src={personaje1} alt="character" className="character-sprite sprite-1" />
                <img src={personaje2} alt="character" className="character-sprite sprite-2" />
            </div>
            
            {/* Suelo animado con imagen */}
            <div className="ground" ref={groundRef}>
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
                <img src={terreno} alt="ground" className="ground-tile" />
            </div>
        </div>
    );
};

export default CharacterScene;