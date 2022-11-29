// Array of special characters to be included in password
var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
var UsrOptionM = "";
function getPasswordOptions() {
  var usroption = "";
  var usroption = prompt(" Type your Password Option: 1=SpecialCharacters, 2=Numbers, 3=LowerCase Characters, 4=UpperCase Characters");
  alert("You have chosen Password Option : " + usroption);
  //console.log(usroption);
  return (usroption);

}

passwordLength = prompt("Enter Password Length ");
while (passwordLength < 10 && passwordLength < 64) {
  //var passwordLength = prompt("Enter Password Lenth");
  //console.log(passwordLength);

  if (passwordLength < 10) {
    alert("You have chose Password Length " + passwordLength + "less than 10");
  }
  else {
    alert("You have chose Password Length " + passwordLength + "greater than 10");
  }
  passwordLength = prompt("Enter Password Length >10 and length <64 characters");
  //console.log(passwordLength);
}

// Function for getting a random element from an array
var UsrOptionM = "";
var DSpassword2 = "";
var DSpassword2 = document.getElementById("password");
UsrOptionM = getPasswordOptions();
function getRandom(arr) {
  var DSpassword2 = "";
  document.getElementById("password").value = "";
  console.log(UsrOptionM);
  var ALength = passwordLength;
    
  for (var i = 0; i <= ALength; i++) 
  {
    
    if (UsrOptionM == 1) {
      //random password for option1 using specialchar
      var randomNumber = Math.floor(Math.random() * specialChar.length);
      DSpassword2 += specialChar[randomNumber];
      //console.log(DSpassword2);
    }
    //random password for option2 using Numberchar
    else if (UsrOptionM == 2) {
      var randomNumber = Math.floor(Math.random() * numericChar.length);
      DSpassword2 += numericChar[randomNumber];
      //console.log(DSpassword2);
    }
    else if (UsrOptionM == 3) {
      //random password for option3 using LowerCasechar
      var randomNumber = Math.floor(Math.random() * lowerCasedChar.length);
      DSpassword2 += lowerCasedChar[randomNumber];
      //console.log(DSpassword2);
    }
    else if (UsrOptionM == 4) {
      //random password for option3 using UpperCasechar
      var randomNumber = Math.floor(Math.random() * upperCasedChar.length);
      DSpassword2 += upperCasedChar[randomNumber];
      //console.log(DSpassword2);

    }

  }
  //console.log(DSpassword2);
  document.getElementById("password").value = DSpassword2;
  return (DSpassword2);
}

// Function to generate password with user input

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
//DS code
//var DSpassword = document.getElementById("password");
function genDSPassword() {
//moved functionality in other routine
}

//console.log(DSpassword2);
// Write password to the #password input
function writePassword() {
  //var DSpassword = genDSPassword();
  var DSpasswordN = "";
  var DSpasswordN = getRandom();
  var passwordText = document.querySelector('#password');
  //console.log(DSpasswordN);
  passwordText.value = DSpasswordN;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);