// ! MAIL

// Array contain all tha email
const elencoMail = ["luca@gmail.com" , "giulia@gmail.com" , "francesco@gmail.com" , "alberto@gmail.com" , "simona@gmail.com" ];


// For use to write li to show the array
for (let i = 0; i < elencoMail.length; i++) {
    let ulElement = document.createElement("li");
    document.getElementById("my-mail-list").append(ulElement);
    ulElement.innerHTML = elencoMail[i]; 
}

// Get the input write by user
let userInputMail = document.getElementById("my-mail-input");

// EventListener check button
let mailVerifyBtn = document.getElementById("my-btn-send");
mailVerifyBtn.addEventListener('click', function() {

    let checkValue = false;

    // For use to check if the email is in the list of emails
    for (let i = 0; i < elencoMail.length; i++) {
        if (elencoMail[i] == userInputMail.value.toLowerCase().trim()) {
            checkValue = true;
        }
    }

    // If true is in the list, so wrtite "Evviva"
    if (checkValue == true) {
        document.getElementById("my-mail-verification").innerHTML = "Evviva, compare nell'elenco!";
    }
    // Else write "Sei falso"
    else {
        document.getElementById("my-mail-verification").innerHTML = "Sei un falsooo!";
    }

    // Reset input text
    userInputMail.value = "";
});






// ! DICE GAME

// EventListener play button
let startGameBtn = document.getElementById("my-btn-game");
startGameBtn.addEventListener('click', function() {
    // Number generators
    let randomNumberUser = Math.floor(Math.random() * 6) + 1;
    let randomNumberComputer = Math.floor(Math.random() * 6) + 1;
    let randomNumberDice = Math.floor(Math.random() * 6) + 1;


    // Inner for display all the numbers
    document.getElementById("my-p-user").innerHTML = `Il tuo numero: ${randomNumberUser}`;
    document.getElementById("my-p-computer").innerHTML = `Il numero del computer: ${randomNumberComputer}`;
    document.getElementById("my-p-dice").innerHTML = `Il numero del dado: ${randomNumberDice}`;

    // Make absolute diff fore determinate who win
    const userDiff = Math.abs(randomNumberUser - randomNumberDice);
    const computerDiff = Math.abs(randomNumberComputer - randomNumberDice);

    // If for tie, computer win and you win
    if (userDiff === computerDiff) {
        document.getElementById("my-game-winner").innerHTML = "Hai pareggiato con il computer!";
    } else if (userDiff > computerDiff) {
        document.getElementById("my-game-winner").innerHTML = "Ha vinto il computer!";
    } else {
        document.getElementById("my-game-winner").innerHTML = "Ha vinto te!"
    }
});




