/***** Initialize Swiper *****/
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const loginSwiper = new Swiper(".loginSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const certificateSwiper = new Swiper(".certificateSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
