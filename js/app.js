"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * nodo.nextElementSibling
 * nodo.firstElementChild
 * 
 * nodo.addEventListener
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

//variables
// Capturo las etiquetas article

const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1, 2, 3,];

//Funciones
const ordenarFor = (evento) => {
evento.preventDefault(); //Evito propagación del evento. En este caso que el enlace vaya a su destino (herf)

//Capturar el nodo 
let p1 = a1[1].firstElementChild.nextElementSibling;
let p2 = p1.nextElementSibling;

    p1.innerHTML = "<h6 style=\"color:red\">For: orden ascendente</h6>";
    //  console.log("For: orden ascendente");
    for (let i = 0; i < numbers.length; i++) {
        p1.innerHTML += `<div>Posicion ${i}:${numbers[i]}</div>`;
    }

    p2.innerHTML = "<h6 style=\"color:red\">For: orden descendente</h6>";
//     console.log("For: orden ascendente");
    for (let i = numbers.length - 1; i >= 0; i--) {
        p2.innerHTML += `<div>Posicion ${i}:${numbers[i]}</div>`;
    }
//         console.log(`Posicion ${i}:${numbers[i]}`);
// }
 }

const ordenarWhile = (e) => {
    e.preventDefault();
    let numbers = [1, 2, 3,23,47,54];
    let x = 0;
    while(x<numbers.length){
        console.log(`<div>Posicion ascendente ${x}:${numbers[x]}</div>`)
        x++; //x=x+1
    }
    x = numbers.length-1;
    while(x>=0){
        console.log(`<div>Posicion descendente ${x}:${numbers[x]}</div>`)
        x--;
    }
    //onsole.log(x)
}

const ordenarDoWhile = (e) => {
    e.preventDefault();
    let numbers = [1, 2, 3,];
//     let x = 0;

//E6 for of
// for(const value of numbers){
//     alert(value)

// }

//Método for each
numbers.forEach(
    (value, indice,array) =>{
        console.log(`${value}-${indice}-Array[${array}]`)
    }
);
    

    
//     do{
//         console.log(`<div>Posicion ascendente ${x}:${numbers[x]}</div>`)
//         x++; //x=x+1
//     }while(x<numbers.length);

//     x = numbers.length-1;
//    do{
//         console.log(`<div>Posicion descendente ${x}:${numbers[x]}</div>`)
//         x--;
//     }while(x>=0);
//     //onsole.log(x)
}

//Eventos

//Escuchar botón
document.querySelector("#b1")
    .addEventListener(
        "click",
        ordenarFor

    );
    document.querySelector("#b2")
    .addEventListener(
        "click",
        ordenarWhile

    );
    document.querySelector("#b3")
    .addEventListener(
        "click",
        ordenarDoWhile

    );

