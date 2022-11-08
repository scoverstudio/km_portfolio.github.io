import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ opacity: "1" }}
        options={{
          background: {
            color: {
              value: "#2C3333",
            },
          },
          fpsLimit: 144,

          fullScreen: {
            enable: true,
            zIndex: -1,
          },

          particles: {
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1080,
              },
              limit: 0,
              value: 100,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 3,
                sync: false,
              },
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            shape: {
              type: "square",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
