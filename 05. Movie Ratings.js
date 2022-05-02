function solve(input) {
let movieCount = Number(input.shift());    

let highestRaiting = Number.MIN_SAFE_INTEGER;
let higestRaitingMovie = ``;
let lowerRaiting = Number.MAX_SAFE_INTEGER;
let lowerRaitingMovie = ``;
let avrRaiting = 0;
let sumRaitings = 0 

for(let i = 0; i < input.length; i +=2) {
    let currMovie = input[i];
    let currRaiting = Number(input[i + 1]);
    if(currRaiting > highestRaiting) {
        higestRaitingMovie = currMovie;
        highestRaiting = currRaiting;
       
    }
    if(lowerRaiting > currRaiting) {
        lowerRaiting = currRaiting;
        lowerRaitingMovie = currMovie;
    }
    sumRaitings += currRaiting;
}
avrRaiting = sumRaitings / movieCount;
console.log(`${higestRaitingMovie} is with highest rating: ${highestRaiting.toFixed(1)}`);
console.log(`${lowerRaitingMovie} is with lowest rating: ${lowerRaiting.toFixed(1)}`);
console.log(`Average rating: ${avrRaiting.toFixed(1)}`);




}
solve(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])