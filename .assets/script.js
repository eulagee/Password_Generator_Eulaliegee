// Assignment Code
const generateBtn = document.querySelector("#generate");
let number = "0123456789";
let specialChar = "!#$%&'()*+,-/:;[]~^";
let alphaLower = "abcdefghijklmnopqratuvwxyz"
let alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//New Password generated
let newPassword = "";

let passwordLength = 0;



//Function for the lenght of the password

function determineLenght() {
    passwordLength = prompt("How many charaters long you'd like your passsword to be (between 8-128 characters)");
}


//Main-Function
function generatePassword() {

    //prompt user which type of characters they can choose from.
    let genSymbols = prompt("Would you like to use special characters? i.e. (!, $, %, etc.)");
    let genNumbers = prompt("Would you like to use numbers?");
    let genLowerCase = prompt("Would you like to use lowercase letters?");
    let genUpperCase = prompt("Would you like to use uppercase letter?");
    determineLenght();
    // 8 length

    let generatedPass = '';
    passwordLength = parseInt(passwordLength, 10);

    const arr = [];

    if (genSymbols === 'yes') {
        arr.push(specialChar);
    }
    if (genNumbers === 'yes') {
        arr.push(number);
    }
    if (genLowerCase === 'yes') {
        arr.push(alphaLower);
    }
    if (genUpperCase === 'yes') {
        arr.push(alphaUpper);
    }

    for (let i = 0; i < passwordLength; i++) {
        const source = arr[Math.floor(Math.random() * arr.length)];
        generatedPass += source[Math.floor(Math.random() * source.length)];
    }

    return generatedPass;
}





// Write password to the #password input
function writePassword() {
    let password1 = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);