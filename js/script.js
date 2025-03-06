// // Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// //Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// //NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numbers = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const inputs = document.getElementById('inputs-group');
const message = document.getElementById('message');

// // Andiamo a creare un contatore che parte da 10 e arriva a 0 con un intervallo di 1 secondo
// // Nel mentre che il contatore scende dovranno essere presenti 5 numeri casuali

countdown.innerHtml = '10';

const count10 = setInterval(countdownN, 1000);

let numcounter = 10;

function countdownN() {
    console.log(numcounter);
    numcounter--;
    countdown.innerHTML = numcounter;

    if (numcounter === 0) {
        clearInterval(count10);
    }
}

// Creiamo un array di 5 numeri casuali

const randomNumbers = [];

for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}


console.log(randomNumbers);

numbers.innerHTML = randomNumbers.join(' - ');


