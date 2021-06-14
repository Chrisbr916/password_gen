// Assignment Code
// create conatants to pull from
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const num = "1234567890"
const symbol = "!@#$%^&*()-=+_"





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var password = generatePassword();

  function generatePassword(){

  //asks lenth of the password
    var passLenth = window.prompt("how long would you like your password to be. Please enter a number between 8 and 128","8" );
    if (passLenth >= 8 && <= 128){
    // this gets the lenth of the password as well as pushes you into the next qiestion as long as you put in a valid number
      var includeLower = window.confirm("Would you like to include lowercase letters in your password? OK is yes" );
  }
      else {
    window.alert("the number you have choosen is not inbetween 8 and 128");
  }
  // the or of this statement makes it so that no matter th answer it will keep pushing you until all the questions have been answered 
  // this part asks if the user would like to include uppercase leters in their password
    if (includeLower === true || includeLower === false) {
      var includeUpper = window.confirm("would you like to include uppercase letters in your password? OK is yes");
  }
  
    if(includeUpper === true || includeUpper === false) {
    //this part askes if they want numbers in their password
      var includeNumbers = window.confirm("would you like to include numbers in your password? OK is yes");
  }
    if(includeNumbers === true || includeNumbers === false){
    // this part asks if you wiuld like to include numbers
      var includeSymbol = window.confirm("Would you like to include symbols in your password? OK is yes");
  }
  // this chunk of code will be dedicated to functions that get random numbers etters and symbols
  function getRandomLowercase(){
    //this function picks a random decimil and multiplies it by 26.(since there are 26 letters in alphabet) and then adds 97 becasue thats how computers read numbers the numbers are ecah assigned a value and the nowecase start at 97 
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
  }
  function getRandomUppercase(){
    //same description as lower pretty much, upper case letters start at 65 tho which is why that number is diffrent
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
  }
  function getRandomNumber(){
    // similar description to two above, however ther are only ten numbers and hey start at 48
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
  }
  function getRandomSymbols(){
    const symbol = "!@#$%^&*()-=+_";
    //this gets us a random symbol by choosing a random decimal and multiplying it by a number from 0 to the lenth of symbol so that one matches up 
    return symbol[Math.floor(Math.random() * symbols.length)];
  }





  }

  //this creates an object that holds all of the ossible options for creating a password
var getRandom ={
  lower = getRandomLowercase,
  upper = getRandomUppercase,
  number = getRandomNumber,
  symbol = getRandomSymbols,
};


   


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



document.getElementById

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
