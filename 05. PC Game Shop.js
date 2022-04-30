function solve(input) {
    let sumOfGames = Number(input.shift());

    let = hearthstoneCounter = 0;
    let = forniteCounter = 0;
    let = overwatchCounter = 0;
    let otherCounter = 0;

    for (const game of input) {
        switch (game) {
            case "Hearthstone":
                hearthstoneCounter++;
                break;
            case "Fornite":
                forniteCounter++;
                break;
            case "Overwatch":
                overwatchCounter++;
                break;
            default:
                otherCounter++;
                break;
        }
    }
  
    let hearthstoneProcent = (hearthstoneCounter / sumOfGames) * 100;
    let forniteProcent = (forniteCounter / sumOfGames) * 100;
    let overwatchProcent = (overwatchCounter / sumOfGames) * 100;
    let otherProcent = (otherCounter / sumOfGames) * 100;
    console.log(`Hearthstone - ${hearthstoneProcent.toFixed(2)}%`)
    console.log(`Fornite - ${forniteProcent.toFixed(2)}%`)
    console.log(`Overwatch - ${overwatchProcent.toFixed(2)}%`)
    console.log(`Others - ${otherProcent.toFixed(2)}%`)
}
solve(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike",]);
