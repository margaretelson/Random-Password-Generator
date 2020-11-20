//Gather/query the elements I'm going to use later
var enter;
var confirmSpecial;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
//Password Variable Values:
//Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Special
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
//Letters
smletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
lgletters = ["A", "B", "C","D","E", "F", "G", "H", "I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]

var toUpper = function (x) {
    return x.toUpperCase ();
};

// var generateBtn = document.querySelector("generate");
var get = document.querySelector("#generate");

// Add event listener to generate button
get.addEventListener("click", function() { //writePassword instead of function()
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function generatePassword() { 

  enter = parseInt(prompt("How long would you like your password to be? It can be between 8 and 128 characters long."));
  //Password length
  if (!enter) {
      alert("Please enter a number for your password length.");
  }
  //Length Criteria
  else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("Please choose between 8 and 128"));
  }
  //Other Criteria
  else {
      confirmNumber = confirm("Would you like it to contain numbers?");
      confirmSpecial = confirm("Would you like it to have special characters?");
      confirmUppercase = confirm("Would you like it to contain Uppercase letters?");
      confirmLowercase = confirm("Would you like it to contain Lowercase letters?");
  };


 //No to all options
 if (!confirmNumber && !confirmSpecial && !confirmUppercase && !confirmLowercase) {
     options = alert("Please choose at least one password criteria.");
 }

 //Yes to all options
 else if (confirmNumber && confirmSpecial && confirmUppercase && confirmLowercase) {
     options = special.concat(number, smletters, lgletters);
 }

 //Yes to 3 options
 else if(confirmNumber && confirmSpecial && confirmUppercase) {
     options = number.concat(number, lgletters);
 }
 else if(confirmNumber && confirmSpecial && confirmLowercase) {
     options = number.concat(number, smletters);
 }
else if(confirmNumber && confirmLowercase && confirmUppercase) {
    options = number.concat(smletters, lgletters);
}
else if(confirmSpecial && confirmLowercase && confirmUppercase) {
    options = special.concat(lgletters, smletters);
}

//Yes to 2 options
else if (confirmSpecial && confirmNumber) {
    options = special.concat(number);
}
else if (confirmSpecial && confirmLowercase) {
    options = special.concat(smletters);
}
else if (confirmSpecial && confirmUppercase) {
    options= special.concat(lgletters);
}
else if (confirmLowercase && confirmNumber) {
    options= smletter.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
    options= smletters.concat(lgletters);
}
else if (confirmNumber && confirmUppercase) {
    options = number.concat(lgletters);
}

//Yes to 1 option
else if (confirmSpecial) {
    options = special;
}
else if (confirmLowercase) {
    options = smletters;
}
else if (confirmUppercase) {
    options = lgletters;
}
else if (number) {
    options = number;
};

var password = [];


for (var i = 0; i < enter; i++) {
    var chooseOptions = options[Math.floor(Math.random() * options.length)];
    password.push(chooseOptions);
}
var ps = password.join("");
UserInput(ps);
return ps;
}

//add password to previously generated passwords
document.getElementById("lastPasswords").textContent += password+ "<br>";

function UserInput (ps) {
    document.getElementById("password").textContent = ps;
}

var copy = document.querySelector()

var password = generatePassword();
    var passwordText = document.querySelector("password");
    passwordText.value = password;





