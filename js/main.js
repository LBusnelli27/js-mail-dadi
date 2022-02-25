// ! MAIL
const elencoMail = ["luca@gmail.com" , "giulia@gmail.com" , "francesco@gmail.com" , "alberto@gmail.com" , "simona@gmail.com" ]

let userInputMail = prompt("Inserisci la tua email per verificare se esiste")

for (let i = 0; i < 1; i++) {
    if (elencoMail[i] == userInputMail) {
        console.log('Esiste!!!')
    } else {
        console.log('Sei un falsoo!!!')
    }
}



// ! DICE GAME
let randomNumberUser = Math.floor(Math.random() * 6) + 1;
let randomNumberComputer = Math.floor(Math.random() * 6) + 1;
let randomNumberDice = Math.floor(Math.random() * 6) + 1;

console.log(`Numero dado user: ${randomNumberUser}`);
console.log(`Numero dado computer: ${randomNumberComputer}`);
console.log(`Numero dado dice: ${randomNumberDice}`);

const userDiff = Math.abs(randomNumberUser - randomNumberDice);
const computerDiff = Math.abs(randomNumberComputer - randomNumberDice);

if (userDiff === computerDiff) {
    console.log('Pareggio!');
} else if (userDiff > computerDiff) {
    console.log('Ha vinto il computer!');
} else {
    console.log('Hai vinto tu!');
}