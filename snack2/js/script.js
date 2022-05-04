// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

//[*] creare un array vuoto
//[] chiedere numeri all'utente fino a quando
// - [] la somma dei numeri nell'array è minore di 50

const numbers = [];

do { 
    const numberUser = parseInt(prompt('inserisci un numero'));
    numbers.push(numberUser); }
    while (sum < 50);

arraySum();
function arraySum() {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
}   
console.log(numbers);
console.log(sum);

// do {
//     const userNumbers = parseInt(prompt('inserisci numero'));
//     numbers.push(userNumbers);
//     } while (numbers.length < 4);
    
//     console.log(numbers);
