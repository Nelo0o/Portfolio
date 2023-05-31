// Import.
import {
    handleCustomCursor,
    slideDown,
    handleScroll,
    toggleMenu,
    setupMascotteContainers, addSlideDownListener
} from "./functions.js";

// Custom cursor
window.addEventListener("mousemove", handleCustomCursor);

// Smooth slide sur la section suivante.
addSlideDownListener(".hero__push-link");
addSlideDownListener(".about");
addSlideDownListener(".discover");

// Rend sticky le header au scroll à partir de la seconde section.
window.addEventListener("scroll", handleScroll);

// Le menue Hamburger
const hamburgerMenu = document.querySelector(".header__nav-toggle");
hamburgerMenu.addEventListener("click", toggleMenu);

// Permet de switch de taille de mascotte pour le responsive
setupMascotteContainers();