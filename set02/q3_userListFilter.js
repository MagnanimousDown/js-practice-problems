/*
You're given an array of user objects.
Write a function getAdminUsernames(users) that returns an array of usernames of only admin users.
const users = [
  { username: "alice", isAdmin: true },
  { username: "bob", isAdmin: false },
  { username: "charlie", isAdmin: true },
];
*/

const users = [
  { username: "alice", isAdmin: true },
  { username: "bob", isAdmin: false },
  { username: "charlie", isAdmin: true },
];

const getAdminUsernames = (users) => {
    const adminNames = users.filter( (user) => user.isAdmin).map( (user) => user.username)
    return adminNames
}

const adminNames = getAdminUsernames(users)
console.log(adminNames);

// I did not know, how exactly to chain map on the filter, I finished the problem till filter but I couldn't figure out how to chain map and extract the username out of it. I googled and found the exact same question-answer given lmao.
// But yeah, I remember that when we chain, It passes the object to the next chaining operation.

