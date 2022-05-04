// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [1,3,5,2,4,3,4];
const secondArray = [3,4,1];

//determinare quale array è piu breve

if (firstArray.length > secondArray.length) {
    console.log(firstArray);
} else {
    console.log(secondArray);
}
//aggiungere elementi all'array più breve fino a quanti ne ha l'altro