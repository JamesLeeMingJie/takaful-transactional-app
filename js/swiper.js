/***** Initialize Swiper *****/
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const loginSwiper = new Swiper(".loginSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
