// Write a function findMax(arr) that:
// Takes an array of numbers
// Returns the largest number in the array without using Math.max
// Example: findMax([4, 2, 9, 1]) → 9

function findMax(arr) {
    // let maxNum = 0;         // I wonder how will the logic be, if we had [-1, -2, -3, -4] as array [ANSWER TO THE DOUBT] :- the answer should be -1 here but it will return 0 according to our logic. So, to counter this, use arr[0] as assignment to the maxNum variable
    let maxNum = arr[0]

    arr.forEach(element => {
        if (maxNum < element) {
            maxNum = element
        }
    });
    return maxNum
}

let maxNumber = findMax([2, 4, 9, 1])
console.log(`The largest number in the array is ${maxNumber}`);
