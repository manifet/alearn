const sliderList = document.querySelector(".gallery__list")
const sliderItems = document.querySelectorAll(".gallery__item")
const sliderVisible = document.querySelector(".gallery__slider-wrap")
const paginationItems = document.querySelectorAll(".gallery__pagination-item")
const backBtn = document.querySelector(".gallery__arrow--left")
const nextBtn = document.querySelector(".gallery__arrow--right")

const sliderItemWidth = sliderItems[0].offsetWidth
const sliderListWidth = sliderList.offsetWidth
const sliderVisibleWidth = sliderVisible.offsetWidth
const sliderItemsLength = sliderItems.length
const paginationItemsLength = paginationItems.length

const step = sliderVisibleWidth + (sliderListWidth - sliderItemsLength * sliderItemWidth) / sliderItemsLength// visible width + one margin
const maxOffset = sliderListWidth - step
const paginationStep = maxOffset / (paginationItemsLength - 1)
let currentOffset = 0

function sliderScroll(direction) {
    switch (direction) {
        case "right":
            if (currentOffset + step < maxOffset) currentOffset += step
            else currentOffset += maxOffset - currentOffset
            break
        case "left":
            if (currentOffset - step >= 0) currentOffset -= step
            else currentOffset = 0
            break
        default:
            throw new Error("Incorrect direction")
    }
    sliderList.style.transform = `translateX(-${currentOffset}px)`
}

nextBtn.addEventListener("click", () => {
    sliderScroll("right")
})

backBtn.addEventListener("click", () => {
    sliderScroll("left")
})

paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentOffset = paginationStep * index
        sliderList.style.transform = `translateX(-${currentOffset}px)`
    })
})