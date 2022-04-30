function solve(input) {
let [countOfPeople, entriePrice, deckChairPrice, umpbrelaPrice] = input.map(Number);

let totalEntriePrice = countOfPeople * entriePrice;
let totalDeckChairPrice = Math.ceil(countOfPeople * 0.75) * deckChairPrice;
let totalUmbrelaPrice = Math.ceil(countOfPeople * 0.50) * umpbrelaPrice;

console.log(`${(totalDeckChairPrice + totalEntriePrice + totalUmbrelaPrice).toFixed(2)} lv.`);

}
solve(["21",
"5.50",
"4.40",
"6.20"]);
solve(["50",
"6",
"8",
"4"])