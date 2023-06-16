console.log("    )                          \n" +
    " ( /(       (           )      \n" +
    " )\\())   (  )\\       ( /(      \n" +
    "((_)\\   ))\\((_) (    )\\()) (   \n" +
    " _((_) /((_)_   )\\  ((_)\\  )\\  \n" +
    "| \\| |(_)) | | ((_) /  (_)((_) \n" +
    "| .` |/ -_)| |/ _ \\| () |/ _ \\ \n" +
    "|_|\\_|\\___||_|\\___/ \\__/ \\___/ \n" +
    "                               \n" +
    "\n");

// Import.
import {
    handleCustomCursor,
    handleScroll,
    toggleMenu,
    setupMascotteContainers, addSlideDownListener, createSkills
} from "./functions.js";

// Façade
window.addEventListener("load", () => {
    const customCursor = document.querySelector(".custom-cursor");
    const loading = document.querySelector(".container-loading");
    const body = document.querySelector("body");

    loading.style.display = "none";
    customCursor.style.display = "block";
})

// Custom cursor.
window.addEventListener("mousemove", handleCustomCursor);

// Smooth slide sur la section suivante.
addSlideDownListener(".hero__push-link");
addSlideDownListener(".about");
addSlideDownListener(".discover");
addSlideDownListener(".more");
addSlideDownListener(".contact");

// Rend sticky le header au scroll à partir de la seconde section.
window.addEventListener("scroll", handleScroll);

// Le menue Hamburger
const hamburgerMenu = document.querySelector(".header__nav-toggle");
hamburgerMenu.addEventListener("click", toggleMenu);

// Permet de switch de taille de mascotte pour le responsive.
setupMascotteContainers();

createSkills();