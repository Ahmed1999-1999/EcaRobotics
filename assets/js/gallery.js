const imgsContainer = document.querySelector(".imgs-container");
const layerModal = document.querySelector(".img-layer");
const galleryImgs = document.querySelectorAll("figure img");
const currentImg = document.querySelector(".img-layer .img");
const closeBtn = document.querySelector(".close-modal");
const prevImgBtn = document.querySelector(".prev-img");
const nextImgBtn = document.querySelector(".next-img");
let currentImgIndex;

let imgsObj = {
  0: [
    "https://picsum.photos/id/1/300/300",
    "https://picsum.photos/id/2/300/300",
    "https://picsum.photos/id/3/300/300",
    "https://picsum.photos/id/4/300/300",
    "https://picsum.photos/id/5/300/300",
    "https://picsum.photos/id/6/300/300",
  ],
  1: [
    "https://picsum.photos/id/7/300/300",
    "https://picsum.photos/id/8/300/300",
    "https://picsum.photos/id/9/300/300",
    "https://picsum.photos/id/10/300/300",
    "https://picsum.photos/id/11/300/300",
    "https://picsum.photos/id/12/300/300",
  ],
  2: [
    "https://picsum.photos/id/13/300/300",
    "https://picsum.photos/id/14/300/300",
    "https://picsum.photos/id/15/300/300",
    "https://picsum.photos/id/16/300/300",
    "https://picsum.photos/id/17/300/300",
    "https://picsum.photos/id/18/300/300",
  ],
  3: [
    "https://picsum.photos/id/19/300/300",
    "https://picsum.photos/id/20/300/300",
    "https://picsum.photos/id/21/300/300",
    "https://picsum.photos/id/22/300/300",
    "https://picsum.photos/id/23/300/300",
    "https://picsum.photos/id/24/300/300",
  ],
};

let imgsURL = imgsObj[`${localStorage.getItem('galleryID')}`];

for (let i = 0; i < imgsURL.length; i++) {
  imgsContainer.innerHTML += `
  <div class="col-md-6 col-lg-4">
    <figure class="position-relative overflow-hidden">
      <img src="${imgsURL[i]}" alt="" class="w-100">
        <i class="icon position-absolute bi bi-zoom-in h2" style="color: var(--main-color);"></i>
    </figure>
  </div>
  `;
}

imgsContainer.addEventListener("click", (e) => {
  if (!e.target.closest("figure")) return;
  const imgSelected = e.target.parentElement.children[0];
  const imgSRC = imgSelected.getAttribute("src");
  currentImg.style.backgroundImage = `url("${imgSRC}")`;
  layerModal.classList.remove("d-none");
  ///
  currentImgIndex = imgsURL.indexOf(imgSRC);  
});


//! Navigate Between Images
//? Functions
const getNextElement = () => {
    if (currentImgIndex === imgsURL.length - 1) {
      currentImgIndex = 0;
      currentImg.style.backgroundImage = `url("${imgsURL[currentImgIndex]}")`;
    } else {
      currentImg.style.backgroundImage = `url("${
        imgsURL[currentImgIndex + 1]
      }")`;
      currentImgIndex++;
    }
};
const getPrevElement = (e) => {
    if (currentImgIndex === 0) {
      currentImgIndex = imgsURL.length - 1;
      currentImg.style.backgroundImage = `url("${imgsURL[currentImgIndex]}")`;
    } else {
      currentImg.style.backgroundImage = `url("${
        imgsURL[currentImgIndex - 1]
      }")`;
      currentImgIndex--;
    }
};
//? Events
//* Next Image
nextImgBtn.addEventListener("click", (e) => {
  if(e.target.classList.contains('next-img')) getNextElement();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && !layerModal.classList.contains("d-none"))
    getNextElement();
});
//* Previous Image
prevImgBtn.addEventListener("click", (e) => {
  if(e.target.classList.contains('prev-img')) getPrevElement();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && !layerModal.classList.contains("d-none"))
    getPrevElement();
});

//! Close Image Modal
//? Function
const closeModal = () => {
  layerModal.classList.add("d-none");
};
//? Events
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !layerModal.classList.contains("d-none"))
    closeModal();
});
// layerModal.addEventListener("click", closeModal);
layerModal.addEventListener('click', e => {
  if (e.target.classList.contains("img-layer")) closeModal();
})
closeBtn.addEventListener("click", closeModal);
