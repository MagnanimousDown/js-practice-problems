// Create an object `user` with properties:
// name: "Omkar", age: 21, isAdmin: true

// Write a function that prints:
// "Omkar is 21 years old and is an Admin" (if isAdmin is true)
// or "Omkar is 21 years old and is not an Admin" (if false)

const user = {
    name: "Omkar",
    age: 21,
    isAdmin: true
}

// Thought of writing arrow function this time so that I can become versatile (use to any syntax and not only stick to one in defining it)
const printObject = (myObj) => {
    if (myObj.isAdmin) {
        console.log(`${myObj.name} is ${myObj.age} years old and is an Admin`);
    }
    else {
        console.log(`${myObj.name} is ${myObj.age} years old and is not an Admin`);
    }
}

printObject(user)