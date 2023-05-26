import {mascotteLG, mascotteMD} from "./svg.js";

export function handleCustomCursor(e) {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

export function slideDown(e) {
    e.preventDefault();

    window.scrollTo({
        top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
        behavior: "smooth",
    });
}

export function handleScroll() {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".skills");
    const heroSectionOffsetTop = heroSection.offsetTop;

    if (window.scrollY > heroSectionOffsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

export function toggleToVisible() {

    const elements = [
        document.querySelector(".container-logo"),
        document.querySelector(".container-nav"),
        document.querySelector(".socials"),
    ]

    elements.forEach((element) => {
        element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible";
    });
}

export function toggleMenu() {
    const header = document.querySelector(".header");
    const hamburgerMenu = document.querySelector(".header__nav-toggle");
    const page = document.documentElement;

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();
}

export function setupMascotteContainers() {
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
}