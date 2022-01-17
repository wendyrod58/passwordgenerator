// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //calinng the password function here 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Declared  function to generation a password based on user criteria 
function generatePassword() {
  var randomFinalPass = "";
  var allCharactersList = "";

  //User input for length and other citeria 

  var passwordLength = window.prompt("Password length, enter from 8 to 128");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Password length, enter from 8 to 128");
  }
  console.log(passwordLength);

  var numberCharacterType = window.confirm("Would you like to include number Characters ?");
  console.log("Include Numbers", numberCharacterType);

  var lowerCharacterType = window.confirm("Would you like to include LowerCase Characters ?");
  console.log("Include Lowercase", lowerCharacterType);

  var upperCharacterType = window.confirm("Would you like to include Uppercase Characters ?");
  console.log("Include Uppercase", upperCharacterType);

  var specialCharacterType = window.confirm("Would you like to include Special Characters ?");
  console.log("Include Special Character", specialCharacterType);



  //in case if all are false prompt the user again to choose one type of Character 

  if (numberCharacterType + lowerCharacterType + upperCharacterType + specialCharacterType == false) {
    window.alert ("Please click on Generate password again and enter at least one type of character ")
  }




  // //Build your list of all allowed Characters based on the boolean values 
  if (numberCharacterType == true) {
    allCharactersList = allCharactersList + "0123456789";
  }

  if (lowerCharacterType == true) {
    allCharactersList = allCharactersList + "abcdefghijklmnopqrstuvwxyz";
  }

  if (upperCharacterType == true) {
    allCharactersList = allCharactersList + "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  }

  if (specialCharacterType == true) {
    allCharactersList = allCharactersList + "!@#$%^&*";
  }

  console.log("updated list", allCharactersList);

  // forloop based on the user entered passworlength
  for (var i = 0; i < passwordLength; i++) {
    console.log(i)

    var randomIndex = Math.floor(Math.random() * allCharactersList.length);
    var randomLetter = allCharactersList.charAt(randomIndex); 
    console.log('The character at index' +  randomIndex + ' is ' +  randomLetter ); 

    randomFinalPass =  randomFinalPass + randomLetter; 
  }

//returns the combined  random letters 
return randomFinalPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

