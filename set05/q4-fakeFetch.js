// Problem 4: Promises – Simulate API Call
// Problem:
// Write a function fakeFetch() that:
// Returns a Promise.
// Resolves after 2 seconds with this object:
// { success: true, data: { user: "Omkar", role: "admin" } }

// Use:
// Consume this using .then() and .catch() and log the output.
// Also consume using async/await.

function fakeFetch() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ success: true, data: { user: "Omkar", role: "admin" } });
    }, 2000);
  });
}

const promise = fakeFetch();

promise
  .then((promise) => {
    console.log(promise);
  })
  .catch((error) => console.log(error));

async function callFakeFetch() {
    try {
        const promise = await fakeFetch()
        console.log(promise)
    } catch (error) {
        console.log(error)
    }
}

callFakeFetch()