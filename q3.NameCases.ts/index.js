"use strict";
//store person's name in a variable
let p1 = "Laiba Nadeem";
//Print name in lowercase
console.log(`Name in lowercase:${p1.toLowerCase()}`);
//print name in uppercase
console.log(`Name in uppercase:${p1.toUpperCase()}`);
//print name in titlecase
const TitleCase = p1
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Name in TitleCase:${TitleCase}`);
