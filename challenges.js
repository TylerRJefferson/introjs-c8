//isDrinkingAge

function drinkingAge(age) {
    return age >= 21
}

const age = 19.5

console.log(drinkingAge(age))

//TODD's EXAMPLE -
// Define our function:
function isDrinkingAge(age) {
    const drinkingAge = 21;
    const canDrink = age >= drinkingAge;
    return canDrink;
}
// Create some examples
const tyler = 22
const emily = 19.5
const fanessa = 28
// Test our examples
console.log('Tyler', isDrinkingAge(tyler)) //expect: true
console.log('Emily', isDrinkingAge(emily)) //expect: false
console.log('Fanessa', isDrinkingAge(fanessa)) //expect: true

//----------------------------------
//computeAreaOfTriangle

const base = 5
const height = 7

function computeAreaOfSquare(base, height){
    return base * height
}

const areaOfSquare = base * height
console.log(areaOfSquare);

function computeAreaOfTriangle(areaOfSquare){
    return areaOfSquare * .5
}
const areaOfTriangle = areaOfSquare * .5

console.log(areaOfTriangle);

//TODD's EXAMPLE - 
//Define function
function calculateAreaOfTriangle(base, height) {
    return(base * height) / 2;
}

//Create example
const b = 10
const h = 5

//Test example
console.log('Area of Triangle', calculateAreaOfTriangle(b,h))