function solve(input) {
    let ticketsTypeCount = {
        student: 0,
        standard: 0,
        kid: 0,
        totalTickets: 0,
    };

    let command = input.shift();

    while (command != `Finish`) {
        let currentMovie = command;
        let kids = 0;
        let students = 0;
        let standards = 0;
        let sits = Number(input.shift());
        let currTicket = input.shift();
        while (currTicket != `End`) {
            if (currTicket == `Finish`) {
                break;
            }
            switch (currTicket) {
                case `standard`:
                    standards++;
                    break;
                case `student`:
                    students++;
                    break;
                case `kid`:
                    kids++;
                    break;
            }

            ticketsTypeCount.totalTickets++;
            ticketsTypeCount[currTicket]++;

            currTicket = input.shift();
        }

        let currMoviePlaces = ((kids + students + standards) / sits) * 100;
        console.log(`${currentMovie} - ${currMoviePlaces.toFixed(2)}% full.`);
        if (currTicket == `Finish`) {
            command = `Finish`;
            command = input.shift();
            kids = 0;
            standards = 0;
            students = 0;
            break;
        }

        command = input.shift();
    }
    let procentStudentTickets =
        (ticketsTypeCount.student / ticketsTypeCount.totalTickets) * 100;
    let procentStandardTickets =
        (ticketsTypeCount.standard / ticketsTypeCount.totalTickets) * 100;
    let procentKidTickets =
        (ticketsTypeCount.kid / ticketsTypeCount.totalTickets) * 100;
    console.log(`Total tickets: ${ticketsTypeCount.totalTickets}`);
    console.log(`${procentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${procentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${procentKidTickets.toFixed(2)}% kids tickets.`);
}
solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
