const guestList = ["Allama Iqbal","Quaid-e-Azam","Albert Einstein","Obama","Marrie Curie","Elon Musk"];
//one of guest can;t make it,so we reomeve him and invite someone else
console.log("Good news! We found a bigger dinner table");
//can only invite two people for dinner
console.log("sorry,we can invite only two people for dinner.");
while(guestList.length>2){
    const poppedGuest = guestList.pop();
    console.log(`sorry ${poppedGuest}, we won't be able to invite you to dinner.`);
}

for (let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, \n\nYou still invited to dinner at my home on Saturday,August28th at 6:00 PM.It would be an honor to have you join me for an evening of good Food,conversation,
and company.Please let me know if you are still able to attend by responsing to this Message. \n\nSincerely,\n[Laiba Nadeem]`);
}
//clear the list
guestList.length = 0;
console.log(guestList); //output[]