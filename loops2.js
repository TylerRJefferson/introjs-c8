// let's create a multiplication table

/*
1   2   3   4   5   6   7   8   9   10
2   4   6   .....
3   6   .....
. 
.
10  20  30  40  50  60  70  80  90  100
*/

// STEP 1: loop i 1-10
// STEP 2: loop j 1-10 inside i
// STEP 3: output i * j
// STEP 4: format/put each row together in multiplication table


for(let i = 1; i <= 10; i++){
	let row = '';
	for(let j = 1; j <= 10; j++) {
		let sum = i * j;
		if(sum < 10){
			row += sum + '   ';
		} else if(sum < 100){
			row += sum + '  ';
		} else {
			row += sum;
		}
	}
	console.log(row);
}

// // Step 1
// for (let i = 1; i <= 10; i++) {
// 	// Step 2
// 	let wholeRow = '';
// 	for (let j = 1; j <= 10; j++) {
// 	// Step 3
// 		wholeRow += '  ' + (i * j)
// 	}
// 	// Step 4
// 	console.log(wholeRow)
// }