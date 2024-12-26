"use strict"; // treat all JS code as newer version. No need to write explictly(by default).

//alert(3+4) // we are using nodejs, not browser.

// console.log(3+3) console.log("Sahithi") // error
// console.log(3+3); console.log("Sahithi") // correct but not good practice as it ends the code readability.
// console.log(3
//     +3
// ) // this is also not a good practice

// Original documentation of JS is ECMA-script(before it different browser->different standards) -> This is used to specify the standards. Not that easy to understand.
// https://262.ecma-international.org/

// So use mdn docs (by mozilla org). Easy to understand.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

// DATATYPES
let name = "Sahithi"
let age = 21
let isLoggedIn = false
let temp = null
let state

// number => range: 2 power 53
// bigint -> trading or any ecommerce
// string => "" or ''
// boolean => true/false
// null => standalone value -> representation of empty value. ex: temp variable(above).
// undefined => the variables which are not initialized(not assigned any value) are treated as undefined. ex: state variable(above).
// symbol => to find the uniqueness of the component(used in react, figma).

// object

console.log(typeof "Sahithi");
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null); //object
console.log(typeof temp); //object
console.log(typeof undefined); //undefined
console.log(typeof state); //undefined
