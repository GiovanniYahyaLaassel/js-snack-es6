console.log('Hello');


// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const bicycle = [
    {name: 'Canyon Ultimate CF SLX', weight: 68},
    {name: 'Specialized S-Works Tarmac SL7', weight: 67},
    {name: 'Trek Emonda SLR 9 eTap', weight: 63},
    {name: 'Bianchi Specialissima', weight: 66},
    {name: 'Pinarello Dogma F12', weight: 70}
];
console.log(bicycle);

let lightBicycle = bicycle[0];

for(let i = 1; i < bicycle.length; i++) {
    if (bicycle[i].weight < lightBicycle.weight) {
        lightBicycle = bicycle[i];
    }
};
console.log(`La bici più leggera è: ${lightBicycle.name} - peso: ${lightBicycle.weight} kg`);

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const footballTeam = [
    {name: 'Juventus', points: 0, foulsConceded: 0},
    {name: 'Inter', points: 0, foulsConceded: 0 },
    {name: 'Milan', points: 0, foulsConceded: 0},
    {name: 'Roma', points: 0, foulConceded: 0},
    {name: 'Napoli', points: 0, foulConceded: 0}
];
// console.log(footballTeam);

// CREO UNA FUNZIONE PER GENERARE NUMERI RANDOM
function getRandomNuber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// creo un ciclo for creao numeri casuali nei points foulsConceded
for(let i = 0; i < footballTeam.length; i++) {
    footballTeam[i].points = getRandomNuber(0, 100);
    footballTeam[i].foulConceded = getRandomNuber(0, 50);
};
console.log(footballTeam);

// CREO UN NUOVO ARRAY PER CON SQUADRE E FALLI SUBITI
const teamFouls = [];

for (let i = 0; i < footballTeam.length; i++) {
    teamFouls.push({name: footballTeam[i].name, foulConceded: footballTeam[i].foulConceded});
};

console.log(teamFouls);




// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.