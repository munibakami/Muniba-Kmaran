"use strict";
//3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstName = "kamran ismail";
console.log("lowercase: ", firstName.toLowerCase());
console.log("uppercase: ", firstName.toUpperCase());
console.log("titlecase: ", firstName.replace(/\bw/g, c => c.toUpperCase()));
