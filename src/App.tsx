import React, { useState, useEffect, useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PixelBlast from './components/PixelBlast';
import './styles/global.css';
import musicFile from './assets/music/MundoPixelado.mp3';
import soundPlaying from './assets/imagenes/volume.svg';
import soundMute from './assets/imagenes/volume-off.svg';
import arrowUp from './assets/imagenes/arrow-up.svg';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicControlRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón si el usuario ha bajado más de 100vh
      if (window.scrollY > (window.innerHeight/3)) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Crear el elemento de audio
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Actualizar el volumen cuando cambie
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Error al reproducir audio:', error);
        });
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#5a7942"
        patternScale={2.5}
        patternDensity={0.8}
        liquid={true}
        liquidStrength={0.08}
        liquidRadius={1.2}
        enableRipples={true}
        rippleIntensityScale={1.5}
        rippleSpeed={0.4}
        transparent={true}
        edgeFade={0.05}
        speed={0.3}
      />
      <div className="portfolio">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Control de música */}
      <div 
        className="music-control"
        ref={musicControlRef}
        onMouseEnter={() => setShowVolumeControl(true)}
        onMouseLeave={() => setShowVolumeControl(false)}
      >
        <button 
          className="music-toggle" 
          onClick={toggleMusic}
          aria-label={isMusicPlaying ? 'Pausar música' : 'Reproducir música'}
          title={isMusicPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          <img 
            src={isMusicPlaying ? soundPlaying : soundMute} 
            alt={isMusicPlaying ? 'Música sonando' : 'Música silenciada'}
            className="music-icon"
          />
        </button>
        
        {showVolumeControl && (
          <div className="volume-control">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              aria-label="Control de volumen"
            />
            <span className="volume-value">{volume}%</span>
          </div>
        )}
      </div>

      {/* Botón de volver arriba */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <img 
            src={arrowUp} 
            alt="Volver arriba" 
            className="arrow-icon"
          />
        </button>
      )}
    </>
  );
};

export default App;