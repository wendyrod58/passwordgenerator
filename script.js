// Assignment code here

var passwordLength = window.prompt("Password length, enter from 8 to 128");
console.log(passwordLength);

var characterType = window.prompt("Select character type")
console.log(characterType);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




