"use strict";

// sugeneruoti 9 kvadrateliai
// math random 0 iki 1
// 9 iki 90

let kvadrateliai = Math.floor(Math.random()*82) + 9;
let kvadrateliaiArray = [];
//console.log(kvadrateliai);
for (let i=0; i<kvadrateliai; i++) {
    //kvadrateliu braizymas
    let kvadratelis = document.createElement('div');
    kvadratelis.classList.add('kvadratelis');
    document.querySelector('#zaidimoLaukas').appendChild(kvadratelis);

    //masyvo pildymas
    kvadrateliaiArray.push(0);
}

//console.log(kvadrateliaiArray);

// akmenuko vieta yra atsitiktinis ksaicius nuo 9 iki 90
// 0 iki 91
let akmenukas = Math.floor(Math.random()*(kvadrateliaiArray.length-1));

// priskirti akmenuko vieta
// 
kvadrateliaiArray[akmenukas] = 1;

console.log(akmenukas);
console.log(kvadrateliaiArray);

// iskarto visi kvadrateliai pataps spaudziami
// suranda pati pirma kvadrateli ir uzdeda paspaudima

let kvadrateliaiPaspaudimai = document.querySelectorAll('.kvadratelis');

for (let j=0; j<kvadrateliaiPaspaudimai.length; j++) {
    kvadrateliaiPaspaudimai[j].addEventListener('click', function() {
        // kaip atpazinti kuris yra paspaustas
        console.log(j); // paspausto kvadratelio vieta masyve
        if(kvadrateliaiArray[j] == 1) {
            console.log('laimejai');
            this.classList.add('geltona');
        } else {
            console.log('nelaimejai, spausk kita');
            this.classList.add('raudona');
        }
    });
}

console.log(kvadrateliaiPaspaudimai.length);