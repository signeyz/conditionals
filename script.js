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
