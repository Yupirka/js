'use strict';
const numberOfFilms = prompt ('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
for (let i = 0; i < 2; i++) {
  const a = prompt ('Один из последних просмотренных фильмов?', ''),
        b = prompt ('на сколько оцените его?', '');
        if (a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
          personalMovieDB.movies[a] = b;
        } else {
          console.log ('error')
          i--
        }
}
if (personalMovieDB.count < 10) {
  console.log ('просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log ('вы классичечкий зритель')
} else if (personalMovieDB.count > 30) {
  console.log ('Вы киноман')
} else {
  console.log (" Произошла ошибка")
}
console.log (personalMovieDB)
