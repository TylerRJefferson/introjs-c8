// TYPES OF FUNCTIONS

// 1. DO SOMETHING / NO PARAMETERS

function sayHello() {
  console.log('Hello')
}

sayHello()

// 2. DO SOMETHING / WITH PARAMETERS

function greetPerson(name) {
  console.log(`Hello ${name}. Welcome!`)
}

greetPerson('Tyler')
greetPerson('Todd')

// 3. RETURNS SOMETHING / NO PARAMETERS

function addTwoPlusTwo() {
  return 2 + 2
}

console.log(addTwoPlusTwo())

// or

const answer = addTwoPlusTwo()
console.log('Answer: ', answer)

// 4. RETURNS SOMETHING / WITH PARAMETERS

function doubleMyNumber(number) {
  return number * 2
}

console.log(doubleMyNumber(11))
