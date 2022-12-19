const sliderList = document.querySelector(".gallery__list")
const sliderVisibleList = document.querySelector(".gallery__slider-wrap")
const backBtn = document.querySelector(".gallery__arrow--left")
const nextBtn = document.querySelector(".gallery__arrow--right")

const step = sliderVisibleList.offsetWidth
const maxOffset = sliderList.offsetWidth - step
let currentOffset = 0

function sliderScroll(direction) {
    switch (direction) {
        case "right":
            if (currentOffset + step < maxOffset) currentOffset += step
            break
        case "left":
            if (currentOffset - step >= 0) currentOffset -= step
            break
        default:
            throw new Error("Incorrect direction")
    }
    sliderList.style.transform = `translate(-${currentOffset}px,0)`
}

nextBtn.addEventListener("click", () => {
    sliderScroll("right")
})

backBtn.addEventListener("click", () => {
    sliderScroll("left")
})