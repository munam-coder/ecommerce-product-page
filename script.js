let images = [
    "image-product-2",
    "image-product-3",
    "image-product-4"
]

let currentindex = 0;

let carouselImages = document.getElementById("carouselImages");
let leftbtn = document.getElementsByClassName("left");
let rightbtn = document.getElementsByClassName("right")

function updateimages() {
    carouselImages.src = images[currentindex];    
}

leftbtn.addEventListener("click", ()=>{
    currentindex = (currentindex - 1 + images.length) % images.length;
    updateimages();
})

rightbtn.addEventListener("click", ()=>{
    currentindex = (currentindex + 1) % images.length;
    updateimages()
})


