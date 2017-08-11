/**
 * Created by Bianca on 27/06/2017.
 */

const passphrase = 'Open sesame';

function testInput() {
    const my_input = document.getElementById('my_input').value;
    let responseBox = document.getElementById('response');

    if (my_input === passphrase) {
        // good! the person guessed the passphrase
        responseBox.innerHTML = my_input + ' is the correct answer.';
    } else if (my_input === 'Open sesam') {
        // Maybe they misspelled
        responseBox.innerHTML = 'You almost got it, but learn to spell :P';
    } else {
        // person doesn't know the passphrase
        responseBox.innerHTML = "Password is not correct!.";
    }
}


function secondFunction (inputValue) {
    console.log (inputValue);
    alert(inputValue);
}