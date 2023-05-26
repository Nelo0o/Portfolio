// Import.
import {handleCustomCursor, slideDown, handleScroll} from "./functions.js";
import {mascotteMD, mascotteLG} from "./svg.js";

// Custom cursor.
window.addEventListener("mousemove", handleCustomCursor);

// Smooth slide sur la section suivante.
const heroPushLink = document.querySelector(".hero__push-link");
heroPushLink.addEventListener("click", slideDown);

// Rend sticky le header au scroll à partir de la seconde section.
window.addEventListener("scroll", handleScroll);

const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".header__nav-toggle");
const page = document.documentElement;

hamburgerMenu.addEventListener("click", () => {

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();

});

function toggleToVisible() {

    const elements = [
        document.querySelector(".container-logo"),
        document.querySelector(".container-nav"),
        document.querySelector(".socials"),
    ]

    elements.forEach((element) => {
        element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible";
    });
}

const hero = document.querySelector(".hero");

const containerMascotteLG = document.createElement("div");
containerMascotteLG.className = "container-mascotte-lg";
containerMascotteLG.innerHTML = mascotteLG;
hero.appendChild(containerMascotteLG);

const containerMascotteMD = document.createElement("div");
containerMascotteMD.className = "container-mascotte-md";
containerMascotteMD.innerHTML = mascotteMD;
hero.appendChild(containerMascotteMD);

function toggleMascotteContainer() {
    if (window.innerWidth > 2000) {
        containerMascotteLG.style.display = "block";
        containerMascotteMD.style.display = "none";
    } else {
        containerMascotteLG.style.display = "none";
        containerMascotteMD.style.display = "block";
    }
}

toggleMascotteContainer();

window.addEventListener("resize", toggleMascotteContainer);
