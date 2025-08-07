// Problem:
// Create an object user with:
// A name property.
// A greet() method using a regular function that logs: Hi, my name is <name>.
// An arrowGreet() method using an arrow function that logs the same.

// Task:
// Call both methods and log the value of this inside both.
// Explain the difference in behavior.

const user = {
    name: "Omkar",
    greet: function(){
        console.log(`Hi, my name is ${this.name}`);
    },
    arrowGreet: () => {
        console.log(`Hi, my name is ${this.name}`)
    }
}

user.greet()    // the regular function gives correctly the current context (which is "Omkar")
user.arrowGreet()   // the arrow function gives undefined

// Why is that? Both comes under the concept of function only. Even both are defined inside the object definition only, as a property. Then why like that?
// so does that mean regular functions are allowed with this keyword to get the current context and not the arrow functions? 

// ANSWER:-
// greet() uses its own this → refers to the user object.

// arrowGreet() does not bind this → it inherits from the parent (likely the global/window scope).

// 💡 Yes, arrow functions are not suitable for methods that depend on their own this context.

// Both are inside the object — true. But only regular functions create their own this. That’s the key.