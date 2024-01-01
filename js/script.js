"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const advBlocks = document.querySelectorAll(".promo__adv > img");
const genre = document.querySelector(".promo__genre");

advBlocks.forEach((block) => {
  block.remove();
});

genre.textContent = "Драма";
