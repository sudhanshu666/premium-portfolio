import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBG = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#0ff" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#00f5ff",
            opacity: 0.2,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticlesBG;
