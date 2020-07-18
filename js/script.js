'use sctrict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из послд пром фильм?", ""),
      b = prompt("Оценка", ""),
      c = prompt("Один из послд пром фильм?", ""),
      d = prompt("Оценка", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);





