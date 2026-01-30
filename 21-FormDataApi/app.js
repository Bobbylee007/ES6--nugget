//originally
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".form");
const passwordInput = document.querySelector(".password-input");


form.addEventListener('sumbmit', (e)=>{
    e.preventDefault()
    const nameValue = nameInput.value;
    const eamilValue = emailInput.value;
    const passwordValue = passwordInput.value
    
    // check for empty value
    if(!nameValue || !eamilValue || passwordValue){
        console.log('plesase provide value');
        return;
    }

    // do something like connect to server
    console.log(nameValue, eamilValue, passwordValue);

    // after that clear values
    nameInput.value = "";
    emailInput.value =""
    passwordInput.value = "";
    
})
// problem: is if input are much EX: like  50


