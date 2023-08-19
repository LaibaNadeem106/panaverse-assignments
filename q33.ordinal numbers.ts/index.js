"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//looop through aray
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal = "";
    //use if-else chain to print the proper ordinal ending for each number
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    //output the result
    console.log(number + ordinal);
}
