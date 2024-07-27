import React, { useCallback, useEffect, useState } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleContainer({ theme }) {
  const [particleOptions, setParticleOptions] = useState({});
  const [key, setKey] = useState(Date.now()); // To force re-render

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  useEffect(() => {
    const darkModeOptions = {
      fullScreen: { enable: false },
      background: { color: { value: " " } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          push: { quantity: 90 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#6e8e2e' },
        links: { color: '#f5d393', distance: 150, enable: true, opacity: 0.5, width: 1 },
        collisions: { enable: true },
        move: {
          directions: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    };

    const lightModeOptions = {
      fullScreen: { enable: false },
      background: { color: { value: " " } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          push: { quantity: 90 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#000000' },
        links: { color: '#06031f', distance: 150, enable: true, opacity: 0.5, width: 1 },
        collisions: { enable: true },
        move: {
          directions: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    };

    setParticleOptions(theme === 'dark' ? darkModeOptions : lightModeOptions);
    setKey(Date.now()); 
  }, [theme]);

  return (
    <Particles
      key={key} 
      className='w-full absolute h-full translate-z-0'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
}

export default ParticleContainer;
