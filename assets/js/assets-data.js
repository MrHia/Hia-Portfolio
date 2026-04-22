// ============ ASSETS & LINKS DATA ============
// All image paths, icons, and external links are stored here for easy management

const ASSETS = {
  // Image paths
  images: {
    favicon: "favicon.ico",
    home: "assets/img/meme.png",
    about: "assets/img/memeLeft.png"
  },

  // Social media links
  socialLinks: {
    github: "https://github.com/MrHia",
    itchIo: "https://mrhia.itch.io/",
    linkedin: "https://www.linkedin.com/in/mrhia/"
  },

  // Icon library CDN (Boxicons)
  iconLibs: {
    boxicons: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    fontAwesome: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
  },

  // Font Awesome icon classes used in the project
  icons: {
    menu: "bx bx-menu",
    close: "bx bx-x",
    github: "fa-brands fa-github",
    itchIo: "fa-brands fa-itch-io",
    linkedin: "fa-brands fa-linkedin",
    unity: "fa-brands fa-unity",
    puzzlePiece: "fa-solid fa-puzzle-piece",
    bolt: "fa-solid fa-bolt"
  },

  // File downloads
  downloads: {
    cv: "assets/cv/Hia_CV.pdf"
  },

  // External services
  services: {
    formspree: "https://formspree.io/f/xvgwqblq"
  },

  // CSS files
  css: {
    main: "assets/css/style-orange-red.css"
  },

  // Project images mapping
  projectImages: {
    carlor: "assets/img/projects/project-carlor.jpg",
    sausageFlip: "assets/img/projects/project-sausage-flip.png",
    bikeObby: "assets/img/projects/project-bike-obby.png",
    dinoRace: "assets/img/projects/project-dino-race.png"
  }
};

// Project links mapping
const PROJECT_LINKS = {
  carlor: "https://appmagic.rocks/google-play/traffic-jam-game-car-parking/com.genify.traffic.parking.vehicles.car?infoCountry=US",
  sausageFlip: "https://appmagic.rocks/google-play/sausage-jump-flip-n-tap/com.genify.sausage.jump.flip.tap?infoCountry=US",
  bikeObby: "https://appmagic.rocks/google-play/bike-master-parkour-challenge/bikeparkour.bmxrace.obbybike?infoCountry=US",
  dinoRace: "https://web.telegram.org/k/#@dinorace_bot"
};

// ============ THEME DEFINITIONS ============
const THEMES = {
  default: {
    name: "Red",
    mainColor: "#b74b4b",
    accentColor: "#ff7a18",
    gradient: "linear-gradient(90deg, #b74b4b, #ff7a18)"
  },
  blue: {
    name: "Blue",
    mainColor: "#007AFF",
    accentColor: "#00D4FF",
    gradient: "linear-gradient(90deg, #007AFF, #00D4FF)"
  },
  green: {
    name: "Green",
    mainColor: "#00C853",
    accentColor: "#76FF03",
    gradient: "linear-gradient(90deg, #00C853, #76FF03)"
  },
  purple: {
    name: "Purple",
    mainColor: "#AA00FF",
    accentColor: "#E040FB",
    gradient: "linear-gradient(90deg, #AA00FF, #E040FB)"
  },
  gold: {
    name: "Gold",
    mainColor: "#FFAB00",
    accentColor: "#FFD600",
    gradient: "linear-gradient(90deg, #FFAB00, #FFD600)"
  },
  pink: {
    name: "Pink",
    mainColor: "#FF4081",
    accentColor: "#FF80AB",
    gradient: "linear-gradient(90deg, #FF4081, #FF80AB)"
  },
  teal: {
    name: "Teal",
    mainColor: "#00BFA5",
    accentColor: "#1DE9B6",
    gradient: "linear-gradient(90deg, #00BFA5, #1DE9B6)"
  },
  sunset: {
    name: "Sunset",
    mainColor: "#FF6B35",
    accentColor: "#F7C59F",
    gradient: "linear-gradient(90deg, #FF6B35, #F7C59F)"
  }
};

// ============ END THEME DEFINITIONS ============
