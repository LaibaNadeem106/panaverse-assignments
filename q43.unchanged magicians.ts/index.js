"use strict";
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function makeGreet(magicians) {
    let greetMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greetMagicians.push(" the Great " + magicians[i]);
    }
    return greetMagicians;
}
let magicians = ["criss angel", "david copperfield", "Lance burton", "derren brown"];
let greetMagicians = makeGreet([...magicians]);
showMagicians(magicians);
console.log("--------");
showMagicians(greetMagicians);
