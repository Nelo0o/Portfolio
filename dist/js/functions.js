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

export function addSlideDownListener(selector) {
    const element = document.querySelector(selector);
    element.addEventListener("click", slideDown);
}

// let prevScrollPos = window.scrollY;

export function handleScroll() {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".skills");
    const heroSectionOffsetTop = heroSection.offsetTop;

    const currentScrollPos = window.scrollY;

    if (currentScrollPos > heroSectionOffsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    // if (currentScrollPos > prevScrollPos) {
    //     header.style.visibility = "hidden";
    // } else {
    //     header.style.visibility = "visible";
    // }
    //
    // prevScrollPos = currentScrollPos;
}

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

function toggleMenuClick() {
    const header = document.querySelector(".header");
    const hamburgerMenu = document.querySelector(".header__nav-toggle");
    const page = document.documentElement;

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();
}

export function toggleMenu() {
    const header = document.querySelector(".header");
    const hamburgerMenu = document.querySelector(".header__nav-toggle");
    const page = document.documentElement;

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();

    const menuLinks = document.querySelectorAll(".container-nav nav ul li a");

    const linksArray = Array.from(menuLinks);

    // Supprimer les écouteurs d'événements existants
    linksArray.forEach((link) => {
        link.removeEventListener("click", toggleMenuClick);
    });

    linksArray.forEach((link) => {
        link.addEventListener("click", toggleMenuClick);
    });
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

export function createSkills() {
    const svg = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "Vue.js",
        "Node.js",
        "Bootstrap",
        "MySQL",
        "Figma",
    ]

    const bgSvg = [
        "bg-html",
        "bg-css",
        "bg-javascript",
        "bg-php",
        "bg-vue",
        "bg-node",
        "bg-bootstrap",
        "bg-mysql",
        "bg-figma",
    ]
    const container = document.querySelector(".container-skills");

    svg.forEach((element, index) => {
        const newCard = document.createElement("article");
        const newContainerInfos = document.createElement("div");
        const newImg = document.createElement("img");
        const newH4 = document.createElement("h4");
        const newSpan = document.createElement("span");

        newCard.className = "skills-card";
        newContainerInfos.className = "skills-card__infos";
        newImg.src = `./assets/svg/skills-svg/${element}.svg`;
        newH4.innerText = element;
        newSpan.innerText = "1 an";

        const newBg = document.createElement("img");
        newBg.className = "bg-img";
        newBg.src = `./assets/svg/skills-svg/${bgSvg[index]}.svg`;
        newCard.appendChild(newBg);

        newContainerInfos.appendChild(newImg);
        newContainerInfos.appendChild(newH4);
        newContainerInfos.appendChild(newSpan);

        newCard.appendChild(newContainerInfos);
        container.appendChild(newCard);
    });
}