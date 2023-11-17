// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(function(x){return x.toUpperCase(); });
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "_", "-", "+", "=", "/"];



function generatePassword() {
  var userLength = prompt("Enter desired length of password between 8 and 128 characters.");
  if ((userLength < 8) || (userLength > 128)) {
    window.alert("Password length must be between 8 and 128 characters.");
    var startOver = window.confirm("Start over?");
    if (startOver) {generatePassword();};
  } else if ((userLength > 8) && (userLength < 128)) {
    var userLowerCase = window.confirm("Include lowercase letters?");
    var userUpperCase = window.confirm("Include upper case letters?");
    var userNumbers = window.confirm("Include numbers?");
    var userSpecialCharacters = window.confirm("Include special characters?");
  }
  //function getRandomPassword() {
  //  var randomPassword = lowerCase[Math.floor(Math.random()*lowerCase.length)];
  //}
  //getRandomPassword();

/*   if ((userLowerCase === true) && (userUpperCase === true) && (userNumbers === true) && (userSpecialCharacters === true)) {
    var n = userLength;
    const allMerged = [...lowerCase, ...upperCase, ...numbers, ...specialCharacters];
    const shuffled = allMerged.sort(function() {return 0.5 - Math.random(); });
    var selected = shuffled.slice(0,n);
    var result = selected.join("");
    return result;
  } else if ((userLowerCase === false) && (userUpperCase === true) && (userNumbers === true) && (userSpecialCharacters === true)) {
    const upperNumSpecial = [...upperCase, ...numbers, ...specialCharacters];
    const shuffled = upperNumSpecial.sort(function() {return 0.5 - Math.random(); });
    var selected = shuffled.slice(0,n);
    var result = selected.join("");
    return result;
  } else if ((userLowerCase === false) && (userUpperCase === false) && (userNumbers === true) && (userSpecialCharacters === true)) {
    const numSpecial = [...numbers, ...specialCharacters];
    const shuffled = numSpecial.sort(function() {return 0.5 - Math.random(); });
    var selected = shuffled.slice(0,n);
    var result = selected.join("");
    return result;
  } else if ((userLowerCase === false) && (userUpperCase === false) && (userNumbers === false) && (userSpecialCharacters === true)) {
    const shuffled = specialCharacters.sort(function() {return 0.5 - Math.random(); });
    var selected = shuffled.slice(0,n);
    var result = selected.join("");
    return result;
  } */

  if (userLowerCase === true) {
    var mergedArraystep1 = [].concat(lowerCase);
  } else if (userLowerCase === false) {
    mergedArraystep1 = [];
  };
  if (userUpperCase === true) {
    var mergedArraystep2 = mergedArraystep1.concat(upperCase);
  } else if (userUpperCase === false) {
    mergedArraystep2 = mergedArraystep1;
  };
  if (userNumbers === true) {
    var mergedArraystep3 = mergedArraystep2.concat(numbers);
  } else if (userNumbers === false) {
    var mergedArraystep3 = mergedArraystep2;
  };
  if (userSpecialCharacters === true) {
    var mergedArraystep4 = mergedArraystep3.concat(specialCharacters);
  } else if (userSpecialCharacters === false) {
    var mergedArraystep4 = mergedArraystep3;
  };
  var n = userLength;
  const shuffled = mergedArraystep4.sort(function() {return 0.5 - Math.random(); });
  var selected = shuffled.slice(0,n);
  var result = selected.join("");

  if (n > mergedArraystep4.length) {
    // repeat array until n < length
    while (n > mergedArraystep4.length) {
      mergedArraystep4 = mergedArraystep4.concat(mergedArraystep4);
    } if ((n === mergedArraystep4.length) || (n < mergedArraystep4.length)) {
      return result;
    }
  } else {
    return result;
  };
}

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
