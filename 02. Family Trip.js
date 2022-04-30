function solve(input) {
let [familyBuged, countOfNights, priceForNight, percentExtraMoney] = input.map(Number);
if(countOfNights > 7) {
    priceForNight = priceForNight * 0.95;
}

let totalPriceForNights = countOfNights * priceForNight;
let extraMoney = (familyBuged * percentExtraMoney) / 100;
let totalMoneyNeed = totalPriceForNights + extraMoney

if(familyBuged >= totalMoneyNeed) {
    console.log(`Ivanovi will be left with ${(familyBuged - totalMoneyNeed).toFixed(2)} leva after vacation.`);
} else {
    console.log(`${Math.abs(familyBuged - totalMoneyNeed).toFixed(2)} leva needed.`)
}




}
solve(["800.50",
"8",
"100",
"2"])

solve(["500",
"7",
"66",
"15"])