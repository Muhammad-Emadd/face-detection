const particlesOptions = {
  fpsLimit: 80,
  interactivity: {
    modes: {
      bubble: {
        distance: 200,
        duration: 2,
        opacity: 0.8,
        size: 20,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 120,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.22,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 400,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 2,
    },
  },
  detectRetina: true,
};

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  imgHeight: "",
  route: "signin",
  isSigned: false,
  user: {
    name: "",
    email: "",
    id: "",
    entries: 0,
    joined: "",
  },
};

export { particlesOptions, initialState };
