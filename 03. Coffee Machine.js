function solve(input) {
  let [type, zucker, count] = input;
  count = Number(count);

  let price = 0;

  let maschine = {
    Espresso: [0.9, 1, 1.2],
    Cappuccino: [1, 1.2, 160],
    Tea: [0.5, 0.6, 0.7],
  };

  if (type == "Espresso") {
    switch (zucker) {
      case "Without":
        price = maschine.Espresso[0];
        break;
      case "Normal":
        price = maschine.Espresso[1];
        break;
      case "Extra":
        price = maschine.Espresso[2];
        break;
    }
    price *= count;
    if (zucker === "Without") {
      price *= 0.65;
    }
    if (count >= 5) {
      price *= 0.75;
    }
    if (price > 15) {
      price *= 0.8;
    }
  } else if (type === "Cappuccino") {
    switch (zucker) {
      case "Without":
        price = maschine.Cappuccino[0];
        break;
      case "Normal":
        price = maschine.Cappuccino[1];
        break;
      case "Extra":
        price = maschine.Cappuccino[2];
        break;
    }

    price *= count;
    if (zucker === "Without") {
      price *= 0.65;
    }
    if (price > 15) {
      price *= 0.8;
    }
  } else if (type === "Tea") {
    switch (zucker) {
      case "Without":
        price = maschine.Tea[0];
        break;
      case "Normal":
        price = maschine.Tea[1];
        break;
      case "Extra":
        price = maschine.Tea[2];
        break;
    }
    price *= count;
    if (zucker === "Without") {
      price *= 0.65;
    }
    if (price > 15) {
      price *= 0.8;
    }
  }
  console.log(
    `You bought ${count} cups of ${type} for ${(price).toFixed(2)} lv.`
  );
}
solve(["Espresso", "Without", "10"]);

solve(["Cappuccino", "Normal", "13"]);

solve(["Tea", "Extra", "3"]);
