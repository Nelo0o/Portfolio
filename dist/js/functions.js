import {mascotteLG, mascotteMD} from "./svg.js";

const SELECTOR_CONTAINER_SKILLS = ".container-skills";
const SELECTOR_HEADER = ".header";
const SELECTOR_HAMBURGER_MENU = ".header__nav-toggle";

const IMAGE_PATH = "./assets/svg/skills-svg/";

const SVG = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "Vue.js",
    "Node.js",
    "Bootstrap",
    "MySQL",
    "Figma",
];

const BG_SVG = [
    "bg-html",
    "bg-css",
    "bg-javascript",
    "bg-php",
    "bg-vue",
    "bg-node",
    "bg-bootstrap",
    "bg-mysql",
    "bg-figma",
];

export function handleCustomCursor(e) {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

export function slideDown(e) {
    e.preventDefault();

    window.scrollTo({
        top: document.querySelector(e.target.getAttribute("href")).offsetTop,
        behavior: "smooth",
    });
}

export function addSlideDownListener(selector) {
    const element = document.querySelector(selector);
    element.addEventListener("click", slideDown);
}

export function handleScroll() {
    const header = document.querySelector(SELECTOR_HEADER);
    const heroSection = document.querySelector(".skills");
    const heroSectionOffsetTop = heroSection.offsetTop;

    const currentScrollPos = window.scrollY + 1;

    if (currentScrollPos > heroSectionOffsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function toggleToVisible() {
    const elements = [
        document.querySelector(".container-logo"),
        document.querySelector(".container-nav"),
        document.querySelector(".socials"),
    ];

    elements.forEach((element) => {
        element.style.visibility = element.style.visibility === "visible" ? "hidden" : "visible";
    });
}

export function toggleMenuClick() {
    const header = document.querySelector(SELECTOR_HEADER);
    const hamburgerMenu = document.querySelector(SELECTOR_HAMBURGER_MENU);
    const page = document.documentElement;

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();
}

export function toggleMenu() {
    const header = document.querySelector(SELECTOR_HEADER);
    const hamburgerMenu = document.querySelector(SELECTOR_HAMBURGER_MENU);
    const page = document.documentElement;

    hamburgerMenu.classList.toggle("menu--open");
    header.classList.toggle("display-menu");
    page.classList.toggle("no-scroll");
    toggleToVisible();

    const menuLinks = document.querySelectorAll(".container-nav nav ul li a");

    menuLinks.forEach((link) => {
        link.removeEventListener("click", toggleMenuClick);
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
    const container = document.querySelector(SELECTOR_CONTAINER_SKILLS);

    SVG.forEach((element, index) => {
        const newCard = document.createElement("article");
        const newContainerInfos = document.createElement("div");
        const newImg = document.createElement("img");
        const newH4 = document.createElement("h4");
        const newSpan = document.createElement("span");

        newCard.className = "skills-card";
        newContainerInfos.className = "skills-card__infos";
        newImg.src = `${IMAGE_PATH}${element}.svg`;
        newImg.alt = element;
        newH4.innerText = element;
        newSpan.innerText = "1 an";

        const newBg = document.createElement("img");
        newBg.className = "bg-img";
        newBg.src = `${IMAGE_PATH}${BG_SVG[index]}.svg`;
        newBg.alt = BG_SVG[index];
        newCard.append(newBg);

        newContainerInfos.append(newImg, newH4, newSpan);
        newCard.appendChild(newContainerInfos);
        container.appendChild(newCard);
    });
}