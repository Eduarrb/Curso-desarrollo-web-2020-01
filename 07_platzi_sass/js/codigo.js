/*
var numero = 10;

var palabra = "jaimito";

var decimal = 10.5;

var verdadero = true;

var lista = [1,2,67,34, 'palabra'];

console.log(numero);

console.log(palabra);

let numero1 = 2;

if(numero > numero1){
    console.log('numero es mayor que numero1')
}
else{
    console.log('numero es menor que numero1');
}
*/

var botonMenu = document.querySelector('.nav__menuIcon');

var menu = document.querySelector('.nav__menuBox');

console.log(menu);
// console.log(botonMenu);

/*
botonMenu.addEventListener('click', function(){
    console.log('hiciste click');
    // menu.classList.add('active');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }
    else{
        menu.classList.add('active');
    }
});
*/
function showMenu(){
    menu.classList.toggle('active');
}

botonMenu.addEventListener('click', showMenu);

// botonMenu.addEventListener('click', function(){
//     menu.classList.toggle('active');
// });

/* GESTOS CON HAMMER.JS */

var $body = document.body;
var gestos = new Hammer($body);

function mostrarMenu(){
    menu.classList.add('active');
}
function esconderMenu(){
    menu.classList.remove('active');
}

gestos.on('swiperight', mostrarMenu);
gestos.on('swipeleft', esconderMenu);
