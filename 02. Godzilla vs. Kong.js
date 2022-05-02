function solve(input) {
let [buged, statists, priceSuitForOneStatist] = input.map(Number);

let decor = buged * 0.10;
let totalSuitPrice = statists * priceSuitForOneStatist;
if(statists > 150) {
    totalSuitPrice *= 0.90;

}
let totalSpend = decor + totalSuitPrice;

if(buged >= totalSpend) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${(buged - totalSpend).toFixed(2)} leva left.`);
} else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${Math.abs(buged - totalSpend).toFixed(2)} leva more.`);
}

}
solve(["20000", 
"120",
"55.5"])