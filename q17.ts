let guests_List1 = ["Mr. Imran", "Mr. Azmat", "Mr. Ikram"];
let invitation_Message1 = ", you are invited to dinner at my residence.";
console.log(guests_List1[0] + invitation_Message1);
console.log(guests_List1[1] + invitation_Message1);
console.log(guests_List1[2] + invitation_Message1);
console.log(guests_List1[2] + " " + `is not attending the dinner.`);
guests_List1.pop();
guests_List1.push("Mr. Khurram");
let scndinvitationMessage1 =
  ", you are invited to dinner at my residence please.";
console.log(guests_List1[0] + scndinvitationMessage1);
console.log(guests_List1[1] + scndinvitationMessage1);
console.log(guests_List1[2] + scndinvitationMessage1);
let bigtbstatment1 = ", I have found a big table for the dinner.";
console.log(guests_List1[0] + bigtbstatment1);
console.log(guests_List1[1] + bigtbstatment1);
console.log(guests_List1[2] + bigtbstatment1);
guests_List1.unshift("Mr. Saqib");
guests_List1.splice(2, 0, "Mr. Ammar");
console.log(guests_List1[0] + bigtbstatment1);
console.log(guests_List1[1] + bigtbstatment1);
console.log(guests_List1[2] + bigtbstatment1);
console.log(guests_List1[3] + bigtbstatment1);
console.log(guests_List1[4] + bigtbstatment1);
let shrinkMessage = "Sorry, I can invite only two people for dinner.";
console.log(shrinkMessage);
let dinrdeniedmsg = " sorry, you are not invited to the dinner at my house.";
console.log(guests_List1[4] + dinrdeniedmsg);
guests_List1.pop();
console.log(guests_List1[3] + dinrdeniedmsg);
guests_List1.pop();
console.log(guests_List1[2] + dinrdeniedmsg);
guests_List1.pop();
let messgeToactvons = ", you are still invited to the dinner";
console.log(guests_List1[0] + messgeToactvons);
console.log(guests_List1[1] + messgeToactvons);
guests_List1.pop();
guests_List1.pop();
console.log(guests_List1);
