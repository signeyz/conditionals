// Operators

const oppo = 3 > 2;
console.log(oppo); //this returns true

const oppo2 = 3 >= 2;
console.log(oppo2); //this returns true

const oppo3 = 3 < 2;
console.log(oppo3); //this returns false

const oppo4 = 3 <= 2;
console.log(oppo4); //this returns false

// Strict operators

const oppo5 = 3 !== 2;
console.log(oppo5); //this returns true

const oppo6 = 3 === 2;
console.log(oppo6); //this returns false

const oppo7 = null === undefined;
console.log(oppo7); //this returns false

const oppo8 = 5 === '5';
console.log(oppo7); //this returns false

// Conditionals
// if statement, keep in mind what is in the parenthesis is a condition, you are writing a condition inside of it.
// When I just write this condition of true, it is saying it is always true for this if statement.

if (true) {
}

// Here I can write an expression inside the parenthesis
if (1 > 0) {
  console.log('Yes, 1 is greater than 0');
}

// I can also put a variable as my condition
let somethingTrue = true;

if (somethingTrue === true) {
  console.log('I am true');
}

// Else statements
// This is when the if statement turns out false, it goes to the next line which is an else statement

if (false) {
  // do something
} else {
  // do something else because if was false
}

// Else if statement

let a = true;
let b = false;

if (a === false) {
  console.log('Do something because it is true');
} else if (b === true) {
  console.log('Do something if a false but b is true');
} else {
  console.log('If a is false and b is false');
}

// Switch is great when your if, else if and else statements get too cluttered.
// In the parenthesis I will add the variable
// In the code of block I will add all the cases I want it to handle
// The keyword called break is always between cases, this is necessary for each case in order to identify the case based on the value of the variable
// The keyword default is a catch all

let age = 21;

switch (age) {
  case 20:
    console.log(20);
    break;
  case 21:
    console.log(21);
    break;
  default:
    console.log('Not identified');
}

// Nesting if statements
// You can see if one of the variables is true and the other is false it will not print out anything to the console.
let abby = true;
let babby = false;

if (abby === true) {
  if ((abby === true, babby === true)) {
    console.log('abby and babby are true');
  }
} else {
  // do something
}

// However, if both variables are true based on the nested if statement, then it will print out the the message to the console that is in the nested if statement.

let jabby = true;
let tabby = true;

if (jabby === true) {
  if ((jabby === true, tabby === true)) {
    console.log('jabby and tabby are true');
  }
} else {
  // do something
}

// Next is logical operator like &&, which means both conditions must be what I state

let user1 = true;
let user2 = false;

if (user1 === true && user2 === false) {
  console.log('Excellent, both conditions have matched!');
}

// I can use the OR operator so that either one can be true
let user3 = true;
let user4 = false;

if (user3 === true || user4 === true) {
  console.log('One of the two users have matched');
}

// I can also mix and match it all in one if statement

let user5 = true;
let user6 = false;
let user7 = true;
let user8 = false;

if (user5 === true && user6 === false && (user7 === true || user8 === true)) {
  console.log('Hey, it works!');
} else {
  console.log('Ah man, they do not match');
}

// Ternary operator
// Syntax is <condition> ? <expression1> : <expression2>
// The <condition> is evaluated as a boolean, the operator runs first expression if the condition is true or it runs the second expression if the condition is true

let isTrue = true;

isTrue ? console.log('It is true') : console.log('Ah, it is false');

let tryingTernary = false;

tryingTernary
  ? console.log('This is showing because it is true')
  : console.log('If you see this it is false');
