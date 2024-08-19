const passwordBox=document.getElementById("password");




const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz"; 
const numbers="0123456789";
const symbols="@#$%^&()_+~|}{[]></-=";

const allChars=upperCase+lowerCase+numbers+symbols;

function passwordGenerator(){
    let len=document.getElementById("lengthRange").value;
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(len>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

let copyButton=document.getElementById("copy");
copyButton.addEventListener("click",async()=>{
    try {
        // Use the Clipboard API to write to the clipboard
        await navigator.clipboard.writeText(passwordBox.value);
        // Optional: Alert the user that the text was copied
        alert('Password copied to clipboard');
    } catch (err) {
        console.error('Failed to copy password: ', err);
        alert('Failed to copy password');
    }
})
