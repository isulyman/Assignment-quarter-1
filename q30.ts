let usernames: any = ["Admin", "User1", "User2", "User3", "User 4"];
function greetings() {
  for (let i in usernames)
    if (usernames[i] === "Admin") {
      console.log(`Hello admin, would you like to see a status report?
  `);
    } else {
      console.log(`Hello, ${usernames[i]}, thank you for logging in again.`);
    }
}
greetings();
