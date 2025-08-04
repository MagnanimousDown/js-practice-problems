// Write a function `countEvens(arr)` that:
// - Takes an array of numbers as input
// - Returns the count of even numbers
// Example: countEvens([1,2,3,4,5,6]) -> 3

function countEvens(arr){
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            count = count + 1;
        }
    }
    return count;
}

const myArray = [1,2,3,4,5,6]
console.log(`The total count of even numbers in the array [${myArray}] is ${countEvens(myArray)} `);
