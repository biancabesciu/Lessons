//global var
let score = 0;
let gameInProgress = false;

const COWARD_THRESHOLD = 14;
const WINNER = 21;

function changeScore(newScore) {
    const scoreElement = document.getElementById('score');

    //change in HTML the scoreElement with newScore
    scoreElement.innerHTML = newScore;
}

function hit () {
    //create new constant
    //pass it the min of 1 and the max of 11
    const newCard = getRandomIntInclusive(1, 11);

    //add to the score the new value
    score += newCard;

    //changeScore by passing it score
    changeScore(score);
}

function determinGameFinish () {
    const resultDiv = document.getElementById('results');
    let ourMessage = '';

    //this is if we score less than our coward nr
    if (score < COWARD_THRESHOLD) {
        ourMessage = 'You only had ' + score;

    // we didn't hit 21, but we are close
    } else if (score > COWARD_THRESHOLD && score < 21) {
        ourMessage = 'Nice try - you got ' + score;

    // we scored perfectly
    } else if(score === 21) {
        ourMessage = 'Amazing, you got a perfect result! '

    // the person has "Bust"
    } else {
        ourMessage = 'You went over, you got ' + score;
    }

    //changing resulDiv with ourMessage
    resultDiv.innerHTML = ourMessage;
}

function stay() {
    const gameTable = document.getElementById('game-table');
    const welcomeMessage = document.getElementById('play-button');

    gameInProgress = false;

    //make a new class
    gameTable.className = 'hidden';
    welcomeMessage.className = '';

    const hitButton = document.getElementById('hit-button');
    const stayButton = document.getElementById('stay-button');

    //when clicked remove listner
    hitButton.removeEventListener('click', hit);
    stayButton.removeEventListener('click', stay);

    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = 'Your final score was ' + score;

    determinGameFinish();
}


function newGame () {
    const gameTable = document.getElementById('game-table');
    const welcomeMessage = document.getElementById('play-button');

    gameInProgress = true;

    //make a new class
    gameTable.className = '';
    welcomeMessage.className = 'hidden';

    //reset score back to 0 every time a new game starts
    score = 0;

    const hitButton = document.getElementById('hit-button');
    const stayButton = document.getElementById('stay-button');

    //when clicked start function
    hitButton.addEventListener('click', hit);
    stayButton.addEventListener('click', stay);

    //reset score back to 0
    changeScore(0);
}

function init() {
    const playButton = document.getElementById('play-button');

    //when clicked start newGame function
    playButton.addEventListener('click', newGame);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

document.addEventListener('DOMContentLoaded', init);































