function solve(input) {
let expectedProfit = Number(input.shift());
let actualProfit = 0;

for(let i = 0; i < input.length; i+= 2) {
    if(input[i] === "Party!") {
        break;
    }
    let coctail = input[i];
    let count = Number(input[i + 1]);
    let currPrice = coctail.length * count;
    if(currPrice % 2 == 1) {
        currPrice *= 0.75;
    }
    actualProfit += currPrice;
    
} 
if(expectedProfit <= actualProfit) {
    console.log("Target acquired.");
    console.log(`Club income - ${actualProfit.toFixed(2)} leva.`);
} else {
    console.log(`We need ${Math.abs(expectedProfit - actualProfit).toFixed(2)} leva more.`);
    console.log(`Club income - ${actualProfit.toFixed(2)} leva.`)
}

   
    
  
  




}
solve(["500","Bellini","6","Bamboo","7","Party!"]);

solve(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])