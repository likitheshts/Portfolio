export default {
  background: {
    color: {
      value: "#EDE8F5",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 6,
      },
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0.8,
        size: 10,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#3498db",
    },
    links: {
      color: "#3498db",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 8 },
    },
  },
  detectRetina: true,
};
