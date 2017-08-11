function buttonHasBeenClicked () {
    console.log ('The button has been clicked');
}

const button = document.getElementById('event-button');

button.addEventListener('click', buttonHasBeenClicked);

//does the same as the one above: button.onclick = buttonHasBeenClicked

button.removeEventListener('click', buttonHasBeenClicked);

