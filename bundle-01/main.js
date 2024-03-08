/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for(let i = 0; i <= 5; i++){
    console.log(i);
};
// 1 - Stampa in console i numeri da 0 a 5.
// 2 - C'é un errore di sintassi, i > 5 é sbagliato, il ciclo non partirá mai, perché i di base non é maggiore di 5.
// 3 - Non ci sono errori logici.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    };
    return num;
};

console.log(addIfEven(2));
// 1 - Controlla se un numero é divisibile per due con resto 0 (se é pari) oppure no (se é dispari), se é pari ritorna num + 5, se é disapri ritorna solo num.
// 2 - C'é un errore di sintassi, il controllo pari o dispari si fa con (num % 2 == 0 oppure num % 2 === 0) non va bene il singolo uguale.
// 3 - C'é un erroe di logica, la funzione viene creata ma mai utilizzata.


// ESERCIZIO 3
function loopToFive() {
    let number;
    for (let i = 0; i <= 5; i++) {
        console.log(i);
        number = i;
        console.log(number);
    };
    return number
};

console.log(loopToFive());
// 1 - Stampa in console i numeri da 0 a 5.
// 2 - C'é un errore di sintassi all'interno delle parentesi tonde del for, i vari elementi vanno separati da ; non da , e per fare un loop fino a 5 deve esserci <= non <.
// 3 - C'é un erroe di logica, la funzione viene creata ma mai utilizzata, e in piú manca una variabile che ritorni alla funzione.



// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]