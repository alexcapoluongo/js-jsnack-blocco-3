// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

//[*] creare un array vuoto
//[] chiedere numeri all'utente fino a quando
// - [] la somma dei numeri nell'array è minore di 50

const numbers = [];

let sum = 0;

do { 
    const numberUser = parseInt(prompt('inserisci un numero'));
    numbers.push(numberUser); }
    while (numbers.length < 3)
    
for(let i = 0; i<numbers.length; i++) {
    sum += numbers[i];
}

  

console.log(numbers);
console.log(sum);


