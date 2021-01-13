const obj = {
    name: 'Bohdan',
    age: 25,
    isMarried: false
};

console.log(obj);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 'banan.png'];



let numberOfFilms = prompt('Cколько фильмов вы уже просмотрели?');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let lastWatchedFilms = prompt('Last watched Movie?');
let ratingFilms = prompt('what rating will you put on the film?');

personalMovieDB.movies.lastWatchedFilms = ratingFilms;

console.log(personalMovieDB);
