let score = /*"64"*/"64abc"

// what is the need of checking the type of the variable?
// let's you are a backend engineer then you might not know what is the type of the field in forms as it is set by front-end engineer.

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score);
// console.log(typeof valueInNumber) //65abc can be typecasted to number
// console.log(valueInNumber) //but its value is NotANumber
// Here in JS we have some problem with numbers so generally people prefer using TYPESCRIPT. 


// "33" => 33
// "33abc", "Sahithi", undefined => NaN
// true => 1, false => 0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "Sahithi" => true

let someNumber = 82;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// 82 => "82"
// true => "true", false = "false"
