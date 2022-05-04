// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [1,3,4,2,6,4];
const secondArray = [3,4,1];

//[*]determinare quale array è piu breve
//[*]aggiungere elementi all'array più breve fino a quanti ne ha l'altro

const finalResult = document.getElementById('result');
let rndNumber = Math.floor(Math.random()*100);
if (firstArray.length > secondArray.length) {
    do {
        secondArray.push(rndNumber)}
        while(secondArray.length < firstArray.length);
        let result = `l'array più breve è secondArray se aggiungo elementi diventa cosi = (${secondArray})`;
        finalResult.innerHTML = result;

} else {
    do {
        firstArray.push(rndNumber) }
        while(firstArray.length < secondArray.length);
        let result = `l'array più breve è firstArray, se aggiungo elementi diventa cosi = ${firstArray}`;
        finalResult.innerHTML = result;
}
