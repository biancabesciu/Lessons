//create deal function
function deal() {
    //declare new variable card,
    //assign a random nr. between 1 and 52 (52 cards in a deck)
     card = Math.floor(Math.random()*52+1);

    //return random card
    return card;
}

//deal first hand by,
// declare new var card1 and card2,
//assign value got by calling the function
let card1 = deal();
let card2 = deal();





//create score function
//return score by adding up the cards
function score() {

    return getValue(card1) + getValue(card2);
}
console.log('You have cards ' + card1 + ' and ' + card2 + ' for a score of ' + score());

