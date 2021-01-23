let numberOfFilms;

function start() {

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cколько фильмов вы уже просмотрели?');

    }
 }

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {

    
for (let i = 0; i < 2; i++) {
    let a = prompt('Last watched Movie?');
    let b = prompt('what rating will you put on the film?');
    
    if (a == '' || b == '' || a == null || b == null || a.length > 50) {
    console.log('error');
    i--;
    } else {
        personalMovieDB.movies[a] = b;
    }  
  }

}
rememberMyFilms();

function detectPersonalMovie() {

 if ( Number( personalMovieDB.count )){

 if(personalMovieDB.count  < 10) {
     console.log('very small');
 } else if(personalMovieDB.count < 30) {
     console.log('good');
 } else if( personalMovieDB.count > 30) {
     console.log('very good');
 }
} else {
    console.log('error');
 }
}

function showMyDB() {
    return personalMovieDB.privat? 
    console.log('ok') : console.log(personalMovieDB);
}
showMyDB();

function writeYourGenres() {
 for (let index = 0; index < 3; index++) {
   const yourGenres = prompt('Your Genres?')
   if (yourGenres == null || yourGenres == '') {
       index--;
   } else {
       personalMovieDB.genres.push(yourGenres);
   } 
 }   
}

writeYourGenres();

console.log(personalMovieDB) 