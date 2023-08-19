const placesToVisit = ["Hunza Valley","Naran Kanghan","Taj Mahal","Victoria Falls","Great wall of china","Machu Picchu","London"];
console.log("Original order");
console.log(placesToVisit);

//print in alphabetical order without modifying the original lsit
console.log("Alphabetial Order:");
console.log([...placesToVisit].sort());

//check original order
console.log("Original order (not modeified):");
console.log(placesToVisit);

//print in reverse alphabeticalorder without modifiyng original list
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

//checking original order 
console.log("Original order (not modified):");
console.log(placesToVisit);

//Reversing order of list
placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);

//sort the list in alphabetical order
placesToVisit.sort()
console.log("Alphabetical order:");
console.log(placesToVisit);

//sort the list in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
