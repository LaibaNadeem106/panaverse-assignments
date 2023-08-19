//current users 
let current_users:string[]=["laiba90","atika56","andla23","sawera12","ayesha45"];
//new users 
let new_users:string[]=["laiba90","ayesha45","nadeem33","faisal44","shoaib77"];
//loop through new_users to check for existing usernames
for(let i=0;i<new_users.length;i++){
    if(current_users.includes(new_users[i])){
        console.log("Sorry,"+ new_users[i]+"is already taken.Please enetr a new username.");
    }else{
        console.log("Congratulations!"+ new_users[i]+"is available.");
    }

}