function storeCarInfo(manufacturer:string,model:string,...args:any[]){
    const carInfo:any = {
        manufacturer:manufacturer,
        model:model
    };
    //loop through the array of key-value pairs and store them in object
    for(let i=0;i<args.length;i+=2){
        const key =args[i];
        const value =args[i+1];
        carInfo[key]=value;
    }
    return carInfo; //return the objct

}

//call the function and print the return object
const car = storeCarInfo('Ford','Mustang','color','red','year',2022);
console.log(car);//output