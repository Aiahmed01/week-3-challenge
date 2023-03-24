var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialLetters = ["!","@","#","$","%","^","&",]
var numberslets = ["7","6","5","4","3","2","1",]



var generateBtn = document.querySelector("#generate");


function randomizer(passRandomizer){
    var passGen = Math.floor(Math.random() * passRandomizer.length)
    var result = passRandomizer[passGen] 
    return result;
}

function generatePassword() {

var userPassword = "";
var passCode = []

var userPassLength1 = prompt(" How long do you want the password to be")
if(userPassLength1 != Number || userPassLength1 < 8 || userPassLength1 > 128){
    alert("please choose a valid lenth and it should be a number between 8 to 128")
    userPassLength1 = prompt(" How long do you want the password to be")
}

var smallLetters1 = confirm ("do you want to include a small letters")
var capitalLetters1 = confirm ("do you want to include a capital letters")
var passNumbers1 = confirm ("do you want to include a numbers")
var specialChar1 = confirm ("do you want to include a special character")




if (smallLetters1 === true){
    for (var i =0; i<smallLetters.length; i++){
        passCode.push(smallLetters[i])
        
        
    }
}
if (capitalLetters1 === true){
    for (var i =0; i<capitalLetters.length; i++){
        passCode.push(capitalLetters[i])
    }
}
if (passNumbers1 === true){
    for (var i =0; i<numberslets.length; i++){
        passCode.push(numberslets[i])
    }
}
if (specialChar1 === true){
    for (var i =0; i<specialLetters.length; i++){
        passCode.push(specialLetters[i])
    }
}




for (var i = 0; i <userPassLength1; i++){
    userPassword = userPassword + randomizer(passCode);

}

return userPassword;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
