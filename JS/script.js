'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');
}
}
// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function remamberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('на сколько оцените его?', '');
          if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(personalMovieDB.movies,'FILMS')
          } else {
            console.log ('error')
            i--
          }
  }
}
remamberMyFilms()

function detecterPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log ('просмотрено довольно мало фильмов')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log ('вы классичечкий зритель')
  } else if (personalMovieDB.count > 30) {
    console.log ('Вы киноман')
  } else {
    console.log (" Произошла ошибка")
  }
}

detecterPersonalLevel()
function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB)
  }
}

// personalMovieDB.genres = 
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const d = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres.push(d);
  };


};
writeYourGenres()

console.log (personalMovieDB)
