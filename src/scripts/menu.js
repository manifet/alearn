const hamburger = document.querySelector(".header__hamburger")
const menu = document.querySelector(".header__menu")

hamburger.addEventListener("click", () => {
    menu.classList.add("active")
})

document.addEventListener("click", (e) => {
    const composed = e.composedPath()
    const withinBoundaries = composed.includes(menu) || composed.includes(hamburger);
    if (!withinBoundaries) {
        menu.classList.remove("active")
    }
})