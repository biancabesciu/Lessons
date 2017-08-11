function transformToC() {
    let celsius = document.getElementById('userInput').value - 32 * 5 / 9;
    celsius = Math.round(celsius);
    document.getElementById('result').innerText = userInput.value + " Fahrenheit is " + celsius + " celsius";
}

function transformToF() {
    let fahrenheit = document.getElementById('userInput').value * 9 / 5 + 32;
    fahrenheit = Math.round(fahrenheit);
    document.getElementById('result').innerText = userInput.value + " Celsius is " + fahrenheit + " fahrenheit";
}


