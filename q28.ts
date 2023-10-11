let personAge = 99;
if (personAge <= 2) {
  console.log("Person is baby");
} else if (personAge > 2 && personAge <= 4) {
  console.log("Person is toddler");
} else if (personAge > 4 && personAge <= 13) {
  console.log("Person is Kid");
} else if (personAge > 13 && personAge <= 20) {
  console.log("Person is teenager");
} else if (personAge > 20 && personAge <= 65) {
  console.log("person is an adult");
} else if (personAge > 60) {
  console.log("Person is an elder");
}
