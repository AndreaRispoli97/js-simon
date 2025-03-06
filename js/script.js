// // Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// //Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// //NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


const countdown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numbers = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const inputGroup = document.querySelectorAll('#input-group input');
const message = document.getElementById('message');

// // Andiamo a creare un contatore che parte da 10 e arriva a 0 con un intervallo di 1 secondo
// // Nel mentre che il contatore scende dovranno essere presenti 5 numeri casuali

countdown.innerHTML = '10';

const count10 = setInterval(countdownN, 1000);

let numcounter = 10;

function countdownN() {
    console.log(numcounter);
    numcounter--;
    countdown.innerHTML = numcounter;

    if (numcounter === 0) {
        clearInterval(count10);
        numbers.classList.add('d-none')
        answersForm.classList.remove('d-none');
    }
}

// Creiamo un array di 5 numeri casuali

const randomNumbers = [];

for (let i = 0; i < 5; i++) {
    //Inseriamo un validatore per evitare che i numeri siano duplicati
    let randomNumber;
    do {randomNumber = Math.floor(Math.random() * 50) + 1;
    } while (randomNumbers.includes(randomNumber));
    randomNumbers.push(randomNumber);
    
}

console.log(randomNumbers);

// Visualizziamo i numeri in pagina

numbers.innerHTML = randomNumbers.join(' - ');

// Creiamo un form dove andiamo a inserire i numeri che l'utente inserisce e li confrontiamo con i numeri casuali

answersForm.addEventListener('submit', function (event) {  
    event.preventDefault();  

    const userNumbers = getUserNumbers();  
    console.log('Numeri inseriti dall\'utente:', userNumbers);  

    // Controlla se ci sono numeri duplicati
    const uniqueUserNumbers = new Set(userNumbers);
    if (uniqueUserNumbers.size !== userNumbers.length) {
        message.innerHTML = 'Errore! Non puoi inserire lo stesso numero più di una volta.';
        message.classList.add('text-danger');
        message.classList.remove('text-success');
        message.classList.remove('d-none');
        return; // Interrompe l'esecuzione della funzione se ci sono duplicati
    }

    // Confronta i numeri dell'utente con i numeri casuali  
    let correctNumbers = [];  
    for (let i = 0; i < userNumbers.length; i++) {  
        if (randomNumbers.includes(userNumbers[i])) {  
            correctNumbers.push(userNumbers[i]);  
        }  
    }  

    console.log('Numeri corretti:', correctNumbers);  

    // Mostra i risultati  
    const correctCount = correctNumbers.length;  
    console.log('Numeri corretti:', correctCount);
    const correctList = correctNumbers.join(', ');  
    console.log('Numeri corretti:', correctList);

    //Mostra il messaggio in base ai risultati

    if (correctCount >= 5) {  
        message.innerHTML = `COMPLIMENTI!! Hai indovinato ${correctCount} numeri: (${correctList})`;
        message.classList.add('text-success');
        message.classList.remove('text-danger');
    } else if (correctCount === 0) {  
        message.innerHTML = 'Mi dispiace ! Non hai indovinato nessun numero!';  
    } else {
        message.innerHTML = `Bravo, Hai indovinato ${correctCount} numeri: (${correctList})`;
        message.classList.add('text-success');
        message.classList.remove('text-danger');
    }

    message.classList.remove('d-none');
}); 
    


// Funzione per ottenere i valori inseriti
function getUserNumbers() {
    let Numbers = [];

    inputGroup.forEach(input => {
        // Converti il valore in numero intero
        let value = parseInt(input.value, 10);
        // Assicura che il valore sia un numero valido 
        if (!isNaN(value)) {
            Numbers.push(value);
        }
    });

    return Numbers;
}

