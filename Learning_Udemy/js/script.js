// const personalMovieDB = {
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,

//     start: function() {
        
//         while (this.count == '' || this.count == null || isNaN(this.count) ) {
//             this.count = +prompt('Cколько фильмов вы уже просмотрели?');
//         }
//     },

//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('Last watched Movie?');
//             let b = prompt('what rating will you put on the film?');
            
//             if (a == '' || b == '' || a == null || b == null || a.length > 50) {
//                 console.log('error');
//                 i--;
//             } else {
//                 this.movies[a] = b;
//             }  
//           }         
//     },

//     detectPersonalMovie: function() {
        
//        if ( Number( this.count )) {

//           if(this.count  < 10) {
//              console.log('very small');
//           } else if(this.count < 30) {
//              console.log('good');
//           } else if( this.count > 30) {
//              console.log('very good');
//           }
//         } else {
//              console.log('error');
//         }
//     },

//     showMyDB: function() {
//       return this.privat? 
//       console.log('It`s privat account') : console.log(this);
//      },

//     writeYourGenres: function() {
//         for (let index = 0; index < 3; index++) {
   
//             const yourGenres = prompt('Your Genres?');
        
//            if (yourGenres == null || yourGenres == '') {
//                index--;
//            } else {
//                this.genres.push(yourGenres);
//            } 
//          }  
//          this.genres.forEach( (index, i) => {
//             console.log(`Your genres ${i+1}: ${index}`);
//         }); 
//     },
//     toggleVisibleMyDB: function() {
//       this.privat = !this.privat;
//     }

// };

//  personalMovieDB.start();

//  personalMovieDB.rememberMyFilms();

//  personalMovieDB.showMyDB();

//  personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB);
// const options = {
//   name: 'test',
//   width: 1024,
//   height: 2048,
//   colors: {
//       border: 'black',
//       bg: 'red'
//   },
//   makeTest: function(name) { 
//       console.log(this.name);
//   }
// };

// // options.makeTest();
// const {border, bg} = options.colors;

// let a = [1,4,6,89,9],
//     b = ['a', 'b', 'c'],
//     copyArr = [...a, 10, ...b, 'd'];

// console.log(copyArr);


// function log(a, b, c) {
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }
// const num = [2, 5, 7];


// log(...num);


// const arr1 = ['a', 'b'];

// const arr2 = [...arr1];

// const q = {
//     one: 1,
//     two: 2,
//     options: {
//         a: 'abstraction'
//     }
// };

// const copyObj = {...q};

class Soldier{
    constructor(name, health, armor){
        this.name = name; 
       this.health = health;
        this.armor = armor;
    }
    log(){
        console.log(this.name + ' you a Soldier');
    }
}

//  Object.setPrototypeOf('','') prototype первый от второго
//  let a = Object.create('') переменная а наследует от ' '
let jonh = new Soldier('Jonh', 100, 50);


const box = document.querySelector('.modal_box'),
      bttnAdd = document.querySelector('#add'),
      bttnRemove = document.querySelector('#remove');

// document.createElement(div);
                // Манипуляция обьектами
// не рекомендуется className замена classList
// appendChild old method 
// append() and prepend() new method;
// old .insertBefore(div, div1): new .before(), .after()
// old .removeChild(div) new .remove();
// old .replaceChild(div, div) before.replaceWith(after) - replace node before on after
                     //Css
// .innerHTML = 'by world'; - можно передавать и nody(div, h1)
// .textContent = 'hello world'; только текст(когда нужно ввести данные пользователю для безопасности)

// .insertAdjacentHTML('beforebegin/afterbegin/beforeend/afterend', `<div><h2>Hello</h2></div>`)


bttnAdd.addEventListener('click', function(){
  box.classList.add('box-remove');    
  bttnAdd.disabled = true;
  bttnRemove.disabled = false;
  bttnAdd.style.cursor = 'no-drop';
  bttnRemove.style.cursor = 'pointer';
});


bttnRemove.addEventListener('click', function(){
    box.classList.remove('box-remove');
    bttnAdd.disabled = false;
    bttnRemove.disabled = true;
    bttnRemove.style.cursor = 'no-drop';
    bttnAdd.style.cursor = 'pointer';
 
  });
let btns = document.querySelector('.button');
