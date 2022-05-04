// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

//[*] creare un array vuoto
//[] chiedere numeri all'utente fino a quando
// - [] la somma dei numeri nell'array è minore di 50

const numbers = [];
let sum = 0;

do { 
    //chiedi un numero
    const numberUser = parseInt(prompt('inserisci un numero'));
    //pusha il numero all'interno dell'array
    numbers.push(numberUser); 
    console.log(numberUser);
    //richiama la somma dei numeri inseriti dell'array
    sum += numberUser;
    //fino a che la somma è minore 50
} while (sum < 50)
  
/**
 * Description: funzione che somma i numeri all'interno dell'array
 * @returns {number} somma
 */
function arraySum() {
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
}

console.log(numbers);
console.log(sum);


