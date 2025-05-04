//! About Carousel
const myCarousel = document.getElementById("about-carousel");

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  touch: false,
});

//! Owl Carousel 
// $(document).ready(function () {
//   $(".carousel").owlCarousel({
//     items: 1,
//     // stagePadding: -0.2,
//     loop: true,
//     center: true,
//     mouseDrag: false,
//     // rewind: false,
//     nav: true,
//     navText: [
//       "<i class='fa-solid fa-angle-left'></i>",
//       "<i class='fa-solid fa-angle-right'></i>",
//     ],
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     animateOut: "animate__backOutUp",
//   });
// });
//!  Testimonials Owl Carousel 
$(document).ready(function () {
  $("#testimonials-slider").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// S T A R T___  C O U R S E S   S E C T I O N

// E N D___  C O U R S E S    S E C T I O N


// S T A R T___  G A L L E R Y   S E C T I O N
const galleryContainer = document.querySelector('.gallery-albums .row');
const galleryMainImgs = [
  "https://picsum.photos/id/0/300/300",
  "https://picsum.photos/id/1/300/300",
  "https://picsum.photos/id/2/300/300",
  "https://picsum.photos/id/3/300/300",
];
const createGalleryItems = () => {
  galleryContainer.innerHTML = '';
  for (let i = 0; i < galleryMainImgs.length; i++) {
    galleryContainer.innerHTML += `
    <div class="col">
      <div class="card" id="${i}">
        <figure type="button" >
          <img
            src="https://picsum.photos/id/${i}/305/300"
            class="card-img-top"
            alt="..."
          />
          <div class="overlay position-absolute w-100 h-100 start-0 d-flex justify-content-center align-items-center z-3 flex-column overflow-hidden">
            <div class="icons">
              <span class="icon d-inline-block">
                  <i class="fa-solid fa-arrow-up-right-from-square gallery-link"></i>
              </span>
            </div>
          </div>
        </figure>
        <div class="card-body d-flex align-items-center flex-column">
          <h5 class="card-title">Card title</h5>
          <p class="card-text text-muted">12 March 2025</p>
        </div>
      </div>
    </div
    `
  }
}
createGalleryItems()

galleryContainer.addEventListener('click', (e) => {
  if (e.target.closest('figure') || e.target.nodeName === "H5") {
    window.location.href = "../../pages/gallery.html";
    localStorage.setItem("galleryID", e.target.closest('div.card').id);
  }
})

// E N D___  G A L L E R Y    S E C T I O N




