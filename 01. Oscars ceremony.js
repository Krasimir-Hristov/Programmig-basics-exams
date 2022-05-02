function solve(input) {
let rent = Number(input[0]);

let statues = rent * 0.70;
let catering = statues * 0.85;
let soundEffects = catering / 2;

console.log((statues + catering + soundEffects + rent).toFixed(2))

}
solve(["3500"])