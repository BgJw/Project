'use strict';

let ul = document.querySelector('.promo__interactive-list');
let input = document.querySelector('.adding__input');
let addBtn = document.querySelector('.add button');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sortArr = (arr) => arr.sort();


function createMovieList(parentEl, movies) {
    sortArr(movieDB.movies);

    parentEl.innerHTML = '';

    for (const key in movies) {

        parentEl.innerHTML += `<li class='promo__interactive-item'>
        ${+key+1} ${movies[key]}<div class="delete"></div></li>`;

        
        document.querySelectorAll('.delete').forEach( ( btn, i ) => {

            btn.addEventListener('click', ( e ) => {
                e.target.parentElement.remove();
                movieDB.movies.splice(i,1);
                sortArr(movieDB.movies);
                createMovieList(parentEl, movies);
            });
        });
    }
}



addBtn.addEventListener('click', ( e ) => {
    e.preventDefault();
    input.value = input.value.length > 21? input.value.slice(0, 20) + '...': input.value;
   
    movieDB.movies.push(input.value);
    sortArr(movieDB.movies);
    createMovieList(ul, movieDB.movies);
    input.value = ''; 

});




createMovieList(ul, movieDB.movies);
