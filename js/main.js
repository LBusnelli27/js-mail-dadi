// ! MAIL
const elencoMail = ["luca@gmail.com" , "giulia@gmail.com" , "francesco@gmail.com" , "alberto@gmail.com" , "simona@gmail.com" ];


for (let i = 0; i < elencoMail.length; i++) {
    let ulElement = document.createElement("li");
    document.getElementById("my-mail-list").append(ulElement);
    ulElement.innerHTML = elencoMail[i]; 
}

let userInputMail = document.getElementById("my-mail-input");

let mailVerifyBtn = document.getElementById("my-btn-send");
mailVerifyBtn.addEventListener('click', function() {

    let checkValue = false;

    for (let i = 0; i < elencoMail.length; i++) {
        if (elencoMail[i] == userInputMail.value) {
            checkValue = true;
        }
    }

    if (checkValue == true) {
        document.getElementById("my-mail-verification").innerHTML = "Evviva, compare nell'elenco!";
    } else {
        document.getElementById("my-mail-verification").innerHTML = "Sei un falsooo!";
    }

    userInputMail.value = "";
});






// ! DICE GAME

let startGameBtn = document.getElementById("my-btn-game");
startGameBtn.addEventListener('click', function() {
    let randomNumberUser = Math.floor(Math.random() * 6) + 1;
    let randomNumberComputer = Math.floor(Math.random() * 6) + 1;
    let randomNumberDice = Math.floor(Math.random() * 6) + 1;

    document.getElementById("my-p-user").innerHTML = `Il tuo numero: ${randomNumberUser}`;
    document.getElementById("my-p-computer").innerHTML = `Il numero del computer: ${randomNumberComputer}`;
    document.getElementById("my-p-dice").innerHTML = `Il numero del dado: ${randomNumberDice}`;

    const userDiff = Math.abs(randomNumberUser - randomNumberDice);
    const computerDiff = Math.abs(randomNumberComputer - randomNumberDice);

    if (userDiff === computerDiff) {
        document.getElementById("my-game-winner").innerHTML = "Hai pareggiato con il computer!";
    } else if (userDiff > computerDiff) {
        document.getElementById("my-game-winner").innerHTML = "Ha vinto il computer!";
    } else {
        document.getElementById("my-game-winner").innerHTML = "Ha vinto te!"
    }
});




