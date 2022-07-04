'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--
    }
}

if (personalMovieDB.count < 10) {
    console.log('Malo filmov')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Enough')
} else if (personalMovieDB.count >= 30) {
    console.log('Kinoman')
} else {
    console.log('Error')
}

console.log(personalMovieDB);