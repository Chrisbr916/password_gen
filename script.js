// Assignment Code
// create conatants to pull from
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const num = "1234567890"
const symbol = "!@#$%^&*()-=+_"





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert ("Want to create a password? ")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(upper, lower, num, symbol, length){
  var password = "";
  for (var i=0; i<=length; i++){
    getRandomCharacter(lower)
  }
  return password;
}

document.getElementById

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
