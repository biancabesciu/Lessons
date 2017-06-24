let Pi = 3.14;

function multiply() {
    const M = document.getElementById('multiplier').value;
    const answerBox = document.getElementById('answer');

    answerBox.innerHTML = M * Pi;
}



let name = 'Bianca';

function greeting (){
    let answerBox = document.getElementById('greet');

    answerBox.innerHTML = 'Hello ' + name;
}