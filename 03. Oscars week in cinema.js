function solve(input) {
let movies = {
    "A Star Is Born": {normal: 7.50, luxury: 10.50, "ultra luxury": 13.50},
    "Bohemian Rhapsody": {normal: 7.35, luxury: 9.45, "ultra luxury": 12.75},
    "Green Book": {normal: 8.15, luxury: 10.25, "ultra luxury": 13.25},
    "The Favourite": {normal: 8.75, luxury: 11.55, "ultra luxury": 13.95}
}

let price = 0;
let [movie, type, countOfTickets] = input;
countOfTickets = Number(countOfTickets);
price = movies[movie][type] * countOfTickets;
console.log(`${movie} -> ${price.toFixed(2)} lv.`)


}
solve(["A Star Is Born",
"luxury",
"42"])
solve(["Green Book",
"normal",
"63"])
solve(["The Favourite",
"ultra luxury",
"34"])