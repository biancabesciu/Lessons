let deck = ['2', '3', '4', '5', '6', '7', '8', '9',]







//create deal function
function deal() {
    //declare new variable card,
    //assign a random nr. between 1 and 52 (52 cards in a deck)
     card = Math.floor(Math.random()*52+1);

    //return random card
    return card;
}

//deal first hand by,
//declare new var card1 and card2,
//assign value got by calling the function
let card1 = deal();
let card2 = deal();

//This function takes a card as a parameter and returns
//the value of the card
function dealCard(card) {
    /*using modulus % - returns the remainder left after dividing
     the left hand side with the right hand side*/
    //if it's a face card, nr should be set to 10
    if (card % 13 === 0 || card % 13 === 11 || card % 13 === 12 ) {
        return 10;
    }

    //if it's an ace
    if (card % 13 === 1) {
        return 11;
    }

    //otherwise return the remainder when card is divided by 13
    else {
        return card % 13;
    }
}


//create score function
//return score by adding up the cards passed through the getValue function
function hit() {
    
    return startPlay(card1) + startPlay(card2);
}
console.log('You have cards ' + card1 + ' and ' + card2 + ' for a score of ' + hit());

