// ? Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bike = [
  {
    name: "Bianchi",
    weight: 7.4,
  },
  {
    name: "Look",
    weight: 6.81,
  },
  {
    name: "Willier",
    weight: 6.5,
  },
  {
    name: "Pinarello",
    weight: 8.1,
  },
  {
    name: "Colnago",
    weight: 5.5,
  },
  {
    name: "Canyon",
    weight: 8,
  },
  {
    name: "Trek",
    weight: 4.65,
  },
];

let lessWeightBike = bike[0];

for (let i = 0; i < bike.length; i++) {
  let currentBike = bike[i];
  if (currentBike.weight < lessWeightBike.weight) {
    lessWeightBike = currentBike;
  }
}
console.log(lessWeightBike);

// ? Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
