
//Characters to be used in password

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/" ];


//Grab elements from HTML

const genPassword         = document.querySelector("#gen-password")
const password1           = document.querySelector("#password-1")
const password2           = document.querySelector("#password-2")
const copytext            = document.querySelector("#clk-to-cpy")
const passwordLengthRange = document.querySelector("#pwd-length-range")
const passwordLengthNum   = document.querySelector(".pwd-length-num")



//Function for generating passwords

function generatePassword() {
    //Set the password text variables as strings
    let passwordText1 = ""
    let passwordText2 = ""
    let lengthInput = passwordLengthRange.value

    //Loop through characters and add till charater length is user input value
    for (let i = 0; i < passwordLengthRange.value; i++ ) {
        let randomChar1 = characters[Math.floor(Math.random() * characters.length)]
        let randomChar2 = characters[Math.floor(Math.random() * characters.length)]
        passwordText1 += randomChar1
        passwordText2 += randomChar2
    }

    //Show the password on screen
    password1.textContent = passwordText1
    password2.textContent = passwordText2

    //Change the cursor to pointer 
    password1.style.cursor = "pointer"
    password2.style.cursor = "pointer"

    //Show "Click to copy passowrd" text
    copytext.style.visibility = "visible"
    copytext.textContent = "Click Password to copy"
}


//Function for copying password

function copyPassword(e) {
    //Create a textarea element
    const textarea = document.createElement('textarea')

    //set height to 0 to avoid showing on screen
    textarea.style.height = 0

    //make it a child of the document body
    document.body.appendChild(textarea)

    //set its value to the contents of the password that has been generated

    textarea.value = e.textContent

    //select the password
    textarea.select()

    //copy the password
    document.execCommand('copy')

    //remove the textarea element created
    textarea.remove()

    //Show "password copied!" text
    copytext.textContent = "Password Copied!"
}

function InputChanges(e) {
    e = document.getElementById("pwd-length-range")
    const min = e.min
    const max = e.max
    const val = e.value

    e.style.backgroundSize = (val - min) * 100 / (max - min) + "% 100%"

}



// Event listeners
genPassword.addEventListener("click", generatePassword)
password1.addEventListener("click", () => {copyPassword(password1)})
password2.addEventListener("click", () => {copyPassword(password2)})
passwordLengthRange.addEventListener("input", InputChanges)