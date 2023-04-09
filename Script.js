let imageWatch = document.querySelector("#imageWatch")
let blackColor = document.querySelector("#blackColor")
let orengeColor = document.querySelector("#orengeColor")
let pinkColor = document.querySelector("#pinkColor")
let purpleColor = document.querySelector("#purpleColor")


blackColor.addEventListener('click', () => {
    imageWatch.src = 'img/black-watch.png'
})

orengeColor.addEventListener('click', () => {
    imageWatch.src = 'img/orenge-watch.png'
    imageWatch.alt = 'นาฬิกาสีส้ม'
})

pinkColor.addEventListener('click', () => {
    imageWatch.src = 'img/pink-watch.png'
    imageWatch.alt = 'นาฬิกาสีชมพู'
})

purpleColor.addEventListener('click', () => {
    imageWatch.src = 'img/purple-watch.png'
    imageWatch.alt = 'นาฬิกาสีม่วง'
})