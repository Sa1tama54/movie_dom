"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector(".add");
  const addInput = addForm.querySelector(".adding__input");
  const favorite = addForm.querySelector("input[type=checkbox]");

  advBlocks.forEach((block) => {
    block.remove();
  });

  genre.textContent = "Драма";

  promoBg.style.backgroundImage = "url('../img/bg.jpg')";

  const sortArr = (arr) => {
    const newArr = [];

    arr.forEach((item) => {
      newArr.push(item.toLowerCase());
    });

    return newArr.sort();
  };

  const generateMovieList = (movies) => {
    movieList.innerHTML = "";

    const sortedMovies = sortArr(movies);

    sortedMovies.forEach((movie, i) => {
      const li = document.createElement("li");
      li.className = "promo__interactive-item";

      const removingElement = document.createElement("div");
      removingElement.className = "delete";

      li.textContent = `${i + 1}. ${movie}`;
      li.append(removingElement);

      movieList.append(li);

      removingElement.addEventListener("click", () => {
        movies.splice(i, 1);
        generateMovieList(movies);
      });
    });
  };

  const addNewMovie = (e) => {
    e.preventDefault();

    let newMovie = addInput.value.trim();

    if (newMovie) {
      if (newMovie.length > 21) {
        newMovie = newMovie.slice(0, 21) + "...";
      }

      if (favorite.checked) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newMovie);
      const sortedMovies = sortArr(movieDB.movies);

      generateMovieList(sortedMovies);
    }

    favorite.checked = false;
    addInput.value = "";
  };

  addForm.addEventListener("submit", addNewMovie);

  generateMovieList(movieDB.movies);
});
