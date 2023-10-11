"use strict";
let favorit_fruites = ["Banana", "Grapes", "Apple"];
let fruitStatement = "is my favorit fruit";
if (favorit_fruites.includes("Banana")) {
    console.log(`Banana ${fruitStatement}`);
}
if (favorit_fruites.includes("Grapes")) {
    console.log(`Grapes ${fruitStatement}`);
}
if (favorit_fruites.includes("Apple")) {
    console.log(`Apple ${fruitStatement}`);
}
if (favorit_fruites.includes("Mango")) {
    console.log(`Mango ${fruitStatement}`);
}
if (favorit_fruites.includes("Kivi")) {
    console.log(`Kivi ${fruitStatement}`);
}
else {
    console.log("Fruite is not included in the list");
}
