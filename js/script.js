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

advBlocks.forEach((block) => {
  block.remove();
});
