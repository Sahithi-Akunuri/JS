const studentID = 329
let studentName = "Sahithi"
var studentPhone = 7093165555
studentCity = "Vijayawada"
let studentState;

// console.log(studentID);
// console.log(studentName);
// console.log(studentPhone);
// console.log(studentCity); //can use table

// MODIFICATION
// studentID = 330 //not allowed as it is a const variable
studentName = "Jay"
studentPhone = 7893339444
studentCity = "Bangalore"

// declaration of constant -> 1 way -> const
// declaration of variable -> 2 ways -> let, var
// difference between let and var -> Scope{ } => var->no scope, let->scope
// JS is a safe language that we can use a variable without let and var -> bad declaration
// The variables which are not initialized are by default declared as "undefined"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([studentID, studentName, studentPhone, studentCity, studentState])