const firstName = "Tyler"; //Change me!
console.log("Hello " + (firstName || "guest"));


const age = 18 //Change me!
if (age >= 21) {
    console.log("Welcome to the bar!")
} else {
    console.log("Please come back in " + (21 - age) + " years.");
}


const hour = 12 //Change me!
let message = (hour <= 11) ? "Good morning!" : "Good afternoon!" //This is a 'Ternary'!
console.log(message);
