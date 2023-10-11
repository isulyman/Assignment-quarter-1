let guestsList = ["Mr. Imran", "Mr. Azmat", "Mr. Ikram"];
let invitationMessage = ", you are invited to dinner at my residence.";
console.log(guestsList[0] + invitationMessage);
console.log(guestsList[1] + invitationMessage);
console.log(guestsList[2] + invitationMessage);
console.log(guestsList[2] + " " + `is not attending the dinner.`);
guestsList.pop();
guestsList.push("Mr. Khurram");
let scnd_invitation_Message =
  ", you are invited to dinner at my residence please.";
console.log(guestsList[0] + scnd_invitation_Message);
console.log(guestsList[1] + scnd_invitation_Message);
console.log(guestsList[2] + scnd_invitation_Message);
