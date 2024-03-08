/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
console.log(checkAge());

// 1 - Controlla se l'etá é maggiore di 18 .
// 2 - C'é un errore di sintassi, message non puo essere una const ma deve essere una let.
// 3 - Manca un console log che ci mostri il risusltato e manca il return nella function.


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
};
printColorsNumber();
// 1 - Dice quanti contolori ci sono nell'array.
// 2 - lenght é scritto male.
// 3 - Non ci sono erroi di logica.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1 - Somma il numero inserito dall'utente con 12.
// 2 - Non ci sono errori di sintassi.
// 3 - Manca il parseInt del numero messo dall'utente.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// 1 - Controlla se la mail inserita àe nella lista delle mail che hanno l'accesso, é invia un messaggio alla console.
// 2 - C'é un errore di sinatssi (true) o lo scriviamo sempre con le virgolette o sempre senza virgolette(la forma migliore se usiamo un booleano é senza virgolette).
// 3 - Non ci sono errori di logica.


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {
            if (email === userEmail) {
                grantAccess = true;
            }
        }

        if(grantAccess){
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
};
checkAccessImproved();

// 1 - Controlla se la mail inserita àe nella lista delle mail che hanno l'accesso, é invia un messaggio alla console.
// 2 - Maca la parentesi graffa alla fine della funzione.
// 3 - grantAccess va dichiarato con true o false senza virgolette se vogliamo mantenere un if di quel tipo.