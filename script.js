const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
 "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"
]
let firstPassword = document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")
let password1 = ""
let password2 = ""

function genPasswords() {
    password1 = ""
    for (c = 0; c < 15; c++) {
        let randomNum1 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomNum1]
    }
    firstPassword.textContent = password1
    password2 = ""
    for (c = 0; c < 15; c++) {
        let randomNum2 = Math.floor(Math.random() * characters.length)
        password2 += characters[randomNum2]
    }
    secondPassword.textContent = password2
}
