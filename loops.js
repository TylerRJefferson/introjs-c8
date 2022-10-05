// let's write a loop!

for(let i = 0; i < 10; i++) {
    console.log(i, 'Hello there!')
}

// let's loop through an array
const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa',
]

for(let i = 0; i < mentors.length; i++){
    const name = mentors[i] //referencing array with 'i' will start listing array starting w element 0
    console.log(`${name} is an awesome mentor!`)
}