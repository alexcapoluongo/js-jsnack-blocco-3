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




squadre.forEach(element => {
    let puntiNew = element.punti;
    let falliSubitiNew = element.falliSubiti;
    let randomNumber1 = Math.floor(Math.random()*100);
    let randomNumber2 = Math.floor(Math.random()*100);
    puntiNew = randomNumber1;
    falliSubitiNew = randomNumber2; 
    console.log(puntiNew, falliSubitiNew);
})