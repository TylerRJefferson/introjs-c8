const person = {
    name: "Tyler",
    age: 22,
    address: "1 Boca Code Drive",
}
//console.log("person is called:", person.name)
//console.log("person is called:", person['name'])

//console.log(`My name is ${person.name} and I'm ${person.age} years old`)

//const name = person.name
//const age = person.age

const {name,age} = person //does same thing as lines 11 and 12
console.log(`My name is ${name} 
and
I'm ${age} years old`) // dropping down a line only works with backtics