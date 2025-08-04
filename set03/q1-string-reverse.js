// Write a function reverseString(str) that:
// Takes a string as input
// Returns the reversed string
// Example:
// reverseString("hello") → "olleh"

function reverseString(str) {
    let reversedString = [];
    const strToArray =Array.from(str)
    const lastindex = strToArray.length
    for (let index = lastindex; index > 0; index--) {
        reversedString.push(strToArray[index-1])       
    }
    return reversedString.join("")
}

const reversedString = reverseString("Hello")
console.log(`Reversed String: ${reversedString}`);

//More consice and using built in function :-
/*
function reverseString(str) {
  return str.split("").reverse().join("");
}
*/