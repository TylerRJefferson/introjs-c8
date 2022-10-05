// const fruits = [
//     "Banana", //0
//     "Berry", //1
//     "Apple", //2
//     "Mango", //3
//     "Pineapple", //4
// ]
// //console.log("My fruits are:", fruits);

// // console.log("The first fruit is:", fruits[0])
// // console.log("The second fruit is:", fruits[1])
// // console.log("The third fruit is:", fruits[2])
// // console.log("The fouth fruit is:", fruits[3])
// // console.log("The fifth fruit is:", fruits[4])

// // return the fruit at position X from the array
// function getFruit(index) { //parameter of function = index
//     return fruits[index];
// }

// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(4)) //log function, and command of parameter
// console.log(getFruit(1)) 
// console.log(getFruit(0)) 
// console.log(getFruit(3)) ;


// let playersNumbers = [12,33,44,55,33,99]

// console.log(playersNumbers[0] + playersNumbers[2])

let students = [
    {
        name: "Bob",
        age: 24
    },
    {
        name: "Jennifer",
        age: 32
    },
    {
        name: "Lily",
        age: 55
    },
];

//const firstStudent = students[0]

//console.log(firstStudent.name)
//console.log(students[1].name)

const { name, age } = students[0]
//console.log(`First student's name is ${name} and they are ${age} years old.`)

const sentence = "Hello Boca Code"
//console.log(sentence.length)
const arrayOfLetters = sentence.split('')
//console.log(arrayOfLetters)
const arrayOfWords = sentence.split(' ')
//console.log(arrayOfWords)
//console.log(`There are ${arrayOfWords.length} words in this sentence.`)

let fruits = [
    "Banana",
    "Berry",
    "Apple",
    "Mango",
    "Pineapple",
]
console.log(fruits)

// fruits.push("Grapes") //.push adds item to end of array
// console.log(fruits)

// const oldFruit = fruits.pop() //.pop removes item from end of array
// console.log(oldFruit) //this line shows popped item from array in console
// console.log(fruits)

// const oldFruit2 = fruits.shift() //Removes from the front of array
// console.log(oldFruit2)
// console.log(fruits)

// fruits.unshift("kiwi") //adds to front of array
// console.log(fruits)

// fruits = ["Tomatoes", ...fruits, "Dragon Fruit"] //spread operator adds to beginning and end
// console.log(fruits)

//console.log(fruits.indexOf("Mango"))

console.log(`My fruits are: ${fruits.join(', ')}`)