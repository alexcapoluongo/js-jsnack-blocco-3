// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [1,3,4,6,2,6,5,8,76,34];

const greenEven = document.getElementById('even');
const redOdd = document.getElementById('odd');

numbers.forEach(number => {
    if (number % 2 === 0) {
        greenEven.innerHTML += number;
        greenEven.classList.add('green')
    } else {
        redOdd.innerHTML += number;
        redOdd.classList.add('red')
    }
})