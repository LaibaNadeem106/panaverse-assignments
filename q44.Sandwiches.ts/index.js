"use strict";
function orderSandwich(...items) {
    console.log("you have order a sandwich with following items:");
    console.log(items);
}
//call the function three items with different number of arguments
orderSandwich("egg", "cheese", "salad");
orderSandwich("grilled cheese", "nutella", "peanut better");
orderSandwich("mayo", "jelly", "chocolate");
