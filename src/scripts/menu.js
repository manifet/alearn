const hamburger = document.querySelector(".header__hamburger")
const menu = document.querySelector(".header__menu")
const menuTitles = document.querySelectorAll(".header__menu-title")

hamburger.addEventListener("click", () => {
    menu.classList.add("active")
})
document.addEventListener("click", (e) => {
    const target = e.target
    if (!target.closest('.header__menu') && !target.closest('.header__hamburger')) menu.classList.remove("active")
})

menuTitles.forEach((item) => {
    item.addEventListener("click", () => {
        menuTitles.forEach((item) => {
            const menuItem = item.parentElement
            menuItem.classList.remove("active")
        })
        const menuItem = item.parentElement
        menuItem.classList.add("active")
    })
})