function solve(priceOfCentrum) {
let pricePlace = Number(priceOfCentrum);

let cakePrice = pricePlace * 0.20;
let drinksPrice = cakePrice * 0.55;
let animatroPrice = pricePlace / 3;


console.log(animatroPrice + drinksPrice + cakePrice + pricePlace)
}
solve(3720)