// Define a list of possible usernames
var usernames = ["elvisblatter@gmail.com", "root", "support", "user"];

// Define a target username
var targetUsername = "elvisblatter@gmail.com";

// Loop through the list of usernames and try to guess the target username
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === targetUsername) {
        console.log("Username found: " + targetUsername);
        break;
    }
}
