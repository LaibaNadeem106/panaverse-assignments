const guestList = ["Allama Iqbal","Quaid-e-Azam","Albert Einstein"];
//one of guest can;t make it,so we reomeve him and invite someone else
const unableToAttend ="Albert Eintein";
const newInvitee="Obama";
// message
console.log(`${unableToAttend} is unable to attend the dinner.`);
const index = guestList.indexOf(unableToAttend);
if(index !==-1){
    guestList[index]=newInvitee;
}
for (let i=0; i<guestList.length; i++){
    console.log(`Dear ${guestList[i]}, \n\nYou are cordially invited to dinner at my home on Saturday,August28th at 6:00 PM.It will be an honor to have you join me for evening of good Food,conversation,
and company.Please let me know if you are able to attend by responsing to this Message. \n\nSincerely,\n[Laiba Nadeem]`);
}

