/**
 * Created by Bianca on 17/08/2017.
 */
//global variable
function tellFortune () {
    const children = 2;
    const partnerName = "Brad Pitt";
    const location = "Bali";
    const job = "leader of the world";

    document.getElementById("fortune").innerHTML = "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + children + " kids."
}
tellFortune();


//exercise1 for loops
const playerArray = [
    {name: 'James', cards: [5, 10], table: 'first'},
    {name: 'Robin', cards: [8, 9], table: 'second'},
    {name: 'Maria', cards: [4, 3], table: 'first'},
    {name: 'Julia', cards: [6, 11], table: 'second'},
];

for (const player of playerArray) {
    let sum = 0;

    for (const card of player.cards) {
        sum += card;
    }

    if (sum ===21) {
        break;
    }

    console.log('Player ' + player.name + " has the sum " + sum + " and is sitting at " + player.table + " table");
}


