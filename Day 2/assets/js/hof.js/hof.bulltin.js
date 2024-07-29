// forEach
const numbers = [1,2,3,4,5]

//for(let x = 0; 0 < numbers.legth; x++){
//    console.log(numbers[x]) 
// }


// numbers.forEach(function(number, index) {
// console.log('index ke ${index}, punya nilai ${number');
// });

//const newNumbers = numbers.forEach((number, index) {
//    return number * 2
// }) 

// console.log(newNumbers)

// map
// numbers.map((number, index)=> {
// console.log('index ke ${index}, punya nilai ${number}');
// }) 

// filter

// [1,3,5]
// const oddNumbers = numbers.filter((number, index) => {
//    return number % 2 == 1
// })

// console.log(oddNumbers)

// reduce
//
const sum = numbers.reduce((previous, current) => {
    console.log('previous : ${previous}');
    console.log('')

    return current + previous;
}, 0);