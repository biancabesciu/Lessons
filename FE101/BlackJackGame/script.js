
let deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let resultElement = document.getElementById('result');
let cardDisplay = document.getElementById('cards');

// add event listener for btn
//when click start function
document.getElementById('deal').addEventListener('click', deal);
document.getElementById('addCard').addEventListener('click', addCard);
document.getElementById('score').addEventListener('click', score);

function deal() {
    let currentCards = document.getElementsByClassName('card');


}

function addCard() {
    let randomNumber = Math.floor(Math.random() * deck.length);

    checkGameStatus();
    return deck[randomNumber];
}

//checking if the value is 21 or bigger
function checkGameStatus() {
    let currentCards = document.getElementsByClassName('card');

    let totalValue = 0;

    for (let i = 0; i < currentCards.length; i++) {
        totalValue = totalValue + getCardValue( currentCards[ i ] );
    }

    if ( totalValue === 21 ) {
        result.innerText = 'BLACKJACK!';
    } else if ( totalValue > 21 ) {
        result.innerText = 'You Lose!';
    }
}

//give value to the face and ace cards
function getCardValue(cardElement) {
    let cardValue = 0;

    if (cardElement.innerText === 'J' || cardElement.innerText === 'Q' || cardElement.innerText === 'K') {
        cardValue = 10;

    } else if (cardElement.innerText === 'A') {
        cardValue = 11;

    } else {
        cardValue = Number(cardElement.innerText);

    }

    return cardValue;
}

function score() {
    resultElement.innerText = 'Your score is ' +;
}