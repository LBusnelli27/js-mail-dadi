const elencoMail = ["luca@gmail.com" , "giulia@gmail.com" , "francesco@gmail.com" , "alberto@gmail.com" , "simona@gmail.com" ]

let userInputMail = prompt("Inserisci la tua email per verificare se esiste")

for (let i = 0; i < 1; i++) {
    if (elencoMail[i] == userInputMail) {
        console.log('Esiste!!!')
    } else {
        console.log('Sei un falsoo')
    }
}