import { useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const reducedMotion = useReducedMotion();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (reducedMotion) return null;

  return (
    <Particles
      id="particles"
      init={particlesInit}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      options={{
        fullScreen: false,
        fpsLimit: 30,
        particles: {
          number: { value: 40, density: { enable: true, area: 900 } },
          color: { value: ["#5865F2", "#FF6400"] },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: { min: 0.5, max: 2 } },
          move: {
            enable: true,
            speed: 0.25,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#FF6400",
            opacity: 0.1,
            width: 0.5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
