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
// console.log(typeof stringNumber);
// console.log(stringNumber);

// 82 => "82"
// true => "true", false = "false"

// OPERATIONS
let value = 3;
let negValue = -value;
// console.log(negValue);

// Basic Arithmetic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2/4);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Sahithi";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log(1 + "2" + 2); //122

// console.log(3 + 4 * 5 % 2); //Not recommendable
// console.log(+true); //increment -> conversion of true to number => 1 but it will not be incremented.
// console.log(true+); //error
// console.log(+true+1); //2
// console.log(+"") //increment -> conversion of "" to number => 0, but it will not be incremented.

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //not readable

let gameCounter = 100;
gameCounter++; //gameCounter++ //prefix(increment first) and postfix(increment at the end).
// console.log(gameCounter);

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); //false
// console.log(null == 0); //false as null is not same as 0
// console.log(null >= 0); //true
// The reason is that equality check == and comparisions >,<,<=,>= work differently.
// Comparisions convert null to number, treating it as 0
// That is why (null >= 0) => (0 >= 0) => true and (null > 0) => (0 > 0) => false


// console.log(undefined == null); //true
// console.log(undefined >= null); //false as null is converted to 0
// console.log(undefined <= null); //false as null is converted to 0
// console.log(undefined > null); //false as null is converted to 0

// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined <= 0); //false
// console.log(undefined > 0); //false

console.log("2" === 2); //checks the equality of type and value
console.log("2" == 2); //check the equality of the value