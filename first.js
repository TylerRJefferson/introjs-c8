const firstName = 'Tyler';

console.log('Hello ' + firstName);

const age = 22

console.log("I am " + age + " years old today.");
console.log(`I am ${age} years old today.`); //This is a 'Template Literal'

// Leonardo DiCaprio problem:
const youngest = (age / 2) + 7;

console.log("The youngest I can date is " + youngest);

// Numbers as strings
console.log("1" + 2 + 3); // logs as '123'
//Whereas
console.log(1 + 2 + "3"); // logs as '33'
// On line 16, JS looks at "1" as a string, so adds 2 & 3 as a string also

