// 'For' loop ex

for(let i = 0; i < 10; i++){
    console.log('This is iteration #', i)
}

// 'Break' loop ex

const nums = [8,6,17,24,3,10,29]

function lookForThree(listOfNums){
    for(i = 0; i < listOfNums.length; i++){
        if(listOfNums[i] === 3){
            console.log('We found a 3!')
            break
        }
    }
}
lookForThree(nums) //this line calls the function
