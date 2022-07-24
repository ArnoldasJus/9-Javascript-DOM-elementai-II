"use strict";

// kai uzsikrauna puslapis atsiranda nuo 9 iki 99 kvadrateliu 3 stulpeliais. pradzioje visi melyni
//jeigu nera akmenuko nusidazo raudonai
//jeigu yra nusidazo zaliai
// pranesimas laimejot is 9 bandymo
//turi buti mygtukas pradeti is naujo
// sugeneruoti 9 kvadrateliai
// math random 0 iki 1
// 9 iki 90

let kvadrateliai = Math.floor(Math.random()*82) + 9;
let kvadrateliaiArray = [];

function zaidimoPradzia() {
    for (let i=0; i<kvadrateliai; i++) {
        //kvadrateliu braizymas
        let kvadratelis = document.createElement('div');
        kvadratelis.classList.add('kvadratelis');
        document.querySelector('#zaidimoLaukas').appendChild(kvadratelis);
    
        //masyvo pildymas
        kvadrateliaiArray.push(0);
    }

    let akmenukas = Math.floor(Math.random()*(kvadrateliaiArray.length-1));

    kvadrateliaiArray[akmenukas] = 1;

    let kvadrateliaiPaspaudimai = document.querySelectorAll('.kvadratelis');

    for (let j=0; j<kvadrateliaiPaspaudimai.length; j++) {
        kvadrateliaiPaspaudimai[j].addEventListener('click', function() {
            // kaip atpazinti kuris yra paspaustas
            console.log(j); // paspausto kvadratelio vieta masyve
            if(kvadrateliaiArray[j] == 1) {
                document.querySelector('#info').innerHTML = 'Laimėjai!';
                this.classList.add('geltona');
            } else {
                document.querySelector('#info').innerHTML = 'Nelaimejai, spausk kitą';
                this.classList.add('raudona');
            }
        });
    }
}

function isNaujo() {
    window.location.reload();
}


window.addEventListener('load', zaidimoPradzia);

document.querySelector('#isNaujo').addEventListener('click', isNaujo);