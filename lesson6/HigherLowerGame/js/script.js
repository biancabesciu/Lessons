
let randomNumber = Math.random() * 10;
randomNumber = Math.ceil(randomNumber);


 function higher() {
    if (randomNumber > 5) {
        document.getElementById('textField').innerText = 'You win, your guessed number was ' + randomNumber;
    } else {
        document.getElementById('textField').innerText = 'You lose, your guessed number was ' + randomNumber;
    }
 }

function lower() {
     if (randomNumber <= 5) {
         document.getElementById('textField').innerText = 'You win, your guessed number was ' + randomNumber;
    } else {
         document.getElementById('textField').innerText = 'You lose, your guessed number was ' + randomNumber;
     }
 }

 function reset() {
    window.location.reload();
 }
