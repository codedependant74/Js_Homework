////////////////////////////////
// Easy Going
////////////////////////////////
for (i = 1; i <= 20; i++) {
  //   console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`FizzBuzz`);
//   }
//   if (i % 3 == 0) {
//     console.log(`Fizz`);
//   }
//   if (i % 5 == 0) {
//     console.log(`Buzz`);
//   } else {
//     console.log(i);
//   }
// }
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee[2]++;
// console.log(plantee);
// wolfy[3] = "Gotham City";
// console.log(wolfy);
// dart.push("Hawkins");
// console.log(dart);
// porgee.shift();
// porgee.unshift("Gameboy");
// console.log(porgee);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let ninja of ninjaTurtles) {
  console.log(ninja.toUpperCase());
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies[8]);
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.unshift("The Shawshank Redemption");
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 1, "Avatar");
const half = Math.ceil(favMovies.length / 2);
const secondHalf = favMovies.slice(half);
// console.log(secondHalf);
// console.log(favMovies);
// console.log(favMovies.indexOf("Fast and Furious"));
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
console.log(whereIsWaldo.indexOf("Eggbert"));
whereIsWaldo.splice(1, 1);
whereIsWaldo[2][2] = "No One";
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
