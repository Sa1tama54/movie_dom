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
const promoBg = document.querySelector(".promo__bg");
const interactiveList = document.querySelector(".promo__interactive-list");

advBlocks.forEach((block) => {
  block.remove();
});

genre.textContent = "Драма";

promoBg.style.backgroundImage = "url('../img/bg.jpg')";

interactiveList.innerHTML = "";

const movies = movieDB.movies.sort();

movies.forEach((movie, i) => {
  console.log(interactiveList);
  interactiveList.innerHTML += `
    <li class='promo__interactive-item'>
      ${i + 1}. ${movie}
      <div class='delete'></div>
    </li>`;
});
