function solve(input) {
  let [town, options, VIP, days] = input;
  days = Number(days);
  let destinations = {
    Bansko: { noEquipment: 80, withEquipment: 100 },
    Borovets: { noEquipment: 80, withEquipment: 100 },
    Varna: { noBreakfast: 100, withBreakfast: 130 },
    Burgas: { noBreakfast: 100, withBreakfast: 130 },
  };

  let price = 0;

  if (days <= 0) {
    console.log("Days must be positive number!");
  } else if (!destinations.hasOwnProperty(town)) {
    console.log("Invalid input!");
  } else {
    if (town === `Varna` || town === `Burgas`) {
      if (options == "withBreakfast") {
        price = destinations[town].withBreakfast;
        if(VIP == `yes` && town == `Varna`) {
            price *= 0.88;
            price *= days;
            
        } else if(VIP == `yes` && town == `Burgas`) {
           price *= 0.93;
           price *= days;
        } else {
            price *= days;
        }
        
      } else {
          price = destinations[town].noBreakfast;
          if(VIP == `yes` && town == `Varna`) {
            price *= 0.88;
            price *= days;
            
        } else if(VIP == `yes` && town == `Burgas`) {
           price *= 0.93;
           price *= days;
        } else {
            price *= days;
        }
      }
      
    } else {
        if(options === "withEquipment") {
            price = destinations[town].withEquipment;
            if(VIP == `yes` && town == `Bansko`) {
                price *= 0.90;
                price *= days
            } else if(VIP == `yes` && town == `Borovets`) {
                price *= 0.95;
                price *= days;
            } else {
                price *= days;
            }
        } else {
            price = destinations[town].noEquipment;
            if(VIP == `yes` && town == `Bansko`) {
                price *= 0.90;
                price *= days
            } else if(VIP == `yes` && town == `Borovets`) {
                price *= 0.95;
                price *= days;
            } else {
                price *= days;
            }
        }
    }
    console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
  }
 
}
// solve(["Borovets",
// "noEquipment",
// "yes",
// "6"])

// solve(["Bansko",
// "withEquipment",
// "no",
// "2"])

// solve(["Varna", "withBreakfast", "yes", "5"]);

solve(["Burgas",
"noBreakfast",
"no",
"4"])

// solve(["Varna",
// "withBreakfast",
// "no",
// "0"])

// solve(["Gabrovo",
// "noBreakfast",
// "no",
// "3"])
