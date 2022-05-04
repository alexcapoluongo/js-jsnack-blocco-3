// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const squadre = [
    { 
        nome: "napoli",
        punti: 0,
        falliSubiti: 0
    },
    { 
        nome: "chelsea",
        punti: 0,
        falliSubiti: 0
    },
    { 
        nome: "barcelona",
        punti: 0,
        falliSubiti: 0
    },
    { 
        nome: "liverpool",
        punti: 0,
        falliSubiti: 0
    }
]


//seleziona gli oggetti uno alla volta
squadre.forEach(element => {
    //crea delle variabili per punti e falli subiti
    //crea due numeri random
    let puntiNew = Math.floor(Math.random()*100);
    let falliSubitiNew = Math.floor(Math.random()*100);
    //assegna i numeri random alle variabili di punti e falli subiti
    console.log(puntiNew, falliSubitiNew);
    //tramite operatore spread copia l'array e modifica punti e falli subiti con le nuove variabili 
    const elementNew = {...element, punti: puntiNew, falliSubiti: falliSubitiNew};
    console.log(elementNew);
})