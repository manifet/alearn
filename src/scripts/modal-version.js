const modalVersion = document.querySelector(".modal-version")
const modalClose = document.querySelector(".modal-version__close")

setTimeout(() => {
    modalVersion.classList.add("active")
}, 2000)

modalClose.addEventListener("click", ()=>{
    modalVersion.classList.remove("active")
})