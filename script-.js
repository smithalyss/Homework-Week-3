// Assignment Code
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var useLowerCase = confirm("Use lowercase in password?")
  var useUpperCase = confirm("Use uppercase in password?")
  var useNumbers = confirm("Use numbers in password?")
  var useSpecialCharacters = confirm("Use special characters in password?")
  var passwordLength = prompt("Choose length of your password between 8-128 characters")
  var totalPasswordCharacters = ""
  // Add if statements to make the options for lowercase, uppercase, numbers, and special characters
  if (useLowerCase) {
    totalPasswordCharacters += lowercase
  }
  if (useUpperCase) {
    totalPasswordCharacters += uppercase
  }
  if (useNumbers) {
    totalPasswordCharacters += numbers
  }
  if (useSpecialCharacters) {
    totalPasswordCharacters += specialCharacters
  }
  // Create prompt for if no lowercase, uppercase, numbers, and special characters are use.
  // Create alert saying they must select at least one lowercase, uppercase, number, or special character
  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialCharacters) {
    alert('Must select at least one lowercase, uppercase, number, or special character')
    return ''
  }
  // Create password length prompt and error if not selected between 8-128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters long")
    return ''
  }
  // create loop that actually generates the password
  var generatedPassword = ''

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * totalPasswordCharacters.length);
    generatedPassword += totalPasswordCharacters.charAt(randomNumber);
  }
  ß

  return generatedPassword
}