// kai uzsikrauna puslapis atsiranda nuo 9 iki 99 kvadrateliu 3 stulpeliais. pradzioje visi melyni

//jeigu nera akmenuko nusidazo raudonai

//jeigu yra nusidazo zaliai

// pranesimas laimejot is 9 bandymo

//turi buti mygtukas pradeti is naujo

// (pradet nuo laimejimo salygos)
// (apribot iki 9 pradzios)

"use strict";

let kvadratukai = [];

function pildytiKvadratukus() {
    for(let i=0; i<9; i++) {
        let kvadratukas = '<div class="kvadratas"></div>';
        document.querySelector('#zaidimoLaukas').innerHTML += kvadratukas;
        kvadratukai.push(kvadratukas);
    };
};

// function isNaujo(){
//     document.querySelector('#isNaujo').addEventListener('click', pildytiKvadratukus);
// };

function teisingai() {
    document.querySelector('.kvadratas').classList.add('geltona');
};

function neteisingai() {
    document.querySelector('.kvadratas').classList.add('raudona');
};

window.addEventListener('load', pildytiKvadratukus);
//document.querySelector('.kvadratas').addEventListener('click', teisingai); <---neveikia
document.querySelector('.kvadratas').addEventListener('click', teisingai);