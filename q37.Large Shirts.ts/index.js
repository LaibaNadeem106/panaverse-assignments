"use strict";
function make_shirt(size = "Large", message = "I love typescript") {
    console.log("You ordered a " + size + " shirt with the message:" + message);
}
//calling the shirt with default arguments
make_shirt();
//callinmg the shirt with default size
make_shirt(undefined, "Typescript is awesome!");
//calling the func with medium size and default size
make_shirt("Medium");
