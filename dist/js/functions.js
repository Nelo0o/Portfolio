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