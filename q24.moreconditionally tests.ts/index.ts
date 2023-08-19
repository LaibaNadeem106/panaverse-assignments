let mystring="world!";
let mynumber="5";
let myArray=["yellow","orange","blue"];
//test for equality and  nonequality
console.log("Is mystring equal to 'world!'?I predict to true.");
console.log(mystring=="world!");
console.log("Is mystring not eqaul to 'hello'?I predict true");
console.log(mystring!="hello");

//test using lowercase function
console.log("Is mystring all lowercase? I predict true");
console.log(mystring.toLowerCase()=="world");
console.log("Is mystring all uppercase ?I predict to false.");
console.log(mystring.toUpperCase()=="HELLO");

//numerical test
console.log("Is mynumber equal to 5?I predict true");
console.log(mynumber=='5');

console.log("Is mynumber less than 5?I predict false.");
console.log(mynumber<'5');

console.log("Is mynumber greater than or equal to 5?I predict true.");
console.log(mynumber>='5');

console.log("Is mynumber less than or equal to 10?I predict to true.");
console.log(mynumber<='10');

//test using and or operations
console.log("Is mynumber between 5 and 15?I predict true.");
console.log(mynumber>'4'&&mynumber<'14');

console.log("Is mystring equal to 'world' or mynumber greater than 7?");
console.log(mystring=='world'||mynumber>'7');

//test whether an item is in array
console.log ("Is 'yellow' in the array? I predict true");
console.log(myArray.includes("yellow"));

console.log("Is 'blue' in the array ? I predict true");
console.log(myArray.includes("green"));

console.log("Is 'green' not in array?i predict true");
console.log(!myArray.includes("green"));

console.log("Is 'orange' not in the array? I predict false");
console.log(!myArray.includes("orange"));

//test whether an item is not in an array 

