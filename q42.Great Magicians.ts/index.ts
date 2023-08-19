function showMagicians(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i]);
    }
}
function makeGreet(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        magicians[i]=" the Great " +  magicians[i];
    }
}

let magicians=["criss angel","david copperfield","Lance burton","derren brown"];
makeGreet(magicians);
showMagicians(magicians);