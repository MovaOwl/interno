// search

function openModal() {
  document.getElementById("overlay").style.top = "0px";
}

function closeModal() {
  document.getElementById("overlay").style.top = "-100vh";
}

// Swiper
var swiper = new Swiper(".swiper-feedback", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  }
});
