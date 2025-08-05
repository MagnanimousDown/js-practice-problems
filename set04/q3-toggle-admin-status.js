// Problem:
// You're given an array of user objects. Write a function toggleAdminStatus(users) that:
// Takes the array
// Toggles the isAdmin property for each user (true becomes false, false becomes true)
// Returns the updated array
// const users = [
//   { username: "alice", isAdmin: true },
//   { username: "bob", isAdmin: false },
// ];

const users = [
  { username: "alice", isAdmin: true },
  { username: "bob", isAdmin: false },
];

function toggleAdminStatus(users){
    users.forEach(element => {
        element.isAdmin = element.isAdmin ? false : true
    });
    return users
}

const updatedUsers = toggleAdminStatus(users)
console.log(updatedUsers);

// simpler code could be:
// element.isAdmin = !element.isAdmin;