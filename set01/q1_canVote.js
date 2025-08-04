// Given an age, write a function `canVote(age)` that:
// - returns "Eligible to vote" if age is 18 or above
// - returns "Not eligible to vote" otherwise

function canVote(age){
    if (age >= 18) {
        return "Eligible to vote"
    } else {
        return "Not eligible to vote" 
    }
}

let age = 9
let response = canVote(age)
console.log(`You are ${age} and you are ${response}`);

age = 18
response = canVote(age)
console.log(`You are ${age} and you are ${response}`);
