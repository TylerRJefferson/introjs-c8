function slowThing(callback) {
	console.log('Hi, I am slow')
	callback()
}

slowThing(() => { //calling slowThing w/ an anonymous function
	console.log('This is CALLBACK')
})

console.log('--------------')

function doSecond() {
	console.log('Do this after slowthing.')
}

slowThing(doSecond)

