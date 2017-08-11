const male = ['John', 'Simon', 'Jack', 'Eric', 'Alan', 'Aaron', 'Robin', 'Edgar', 'Elvis', 'Theo', 'Sean', 'Gus', 'Michael', 'Eduard'];
const female = ['Maria', 'Elizabeth', 'Jessica', 'Ashley', 'Bianca','Lindsy', 'Ema', 'Sonia', 'Ella','Hazel','Ivy', 'Violet', 'Sofia'];

function getRandom(list) {
    const i = Math.floor(Math.random() * list.length);
    return list [i];
}

function getRandomName (){
    const firstNameInputValue = document.getElementById('firstName').value;
    const answerBoxEl = document.getElementById('answer');
    const genderEl = document.querySelector('input[name="gender"]:checked');
    let randomName, answerBoxText;

    if (firstNameInputValue === '') {
        answerBoxText = "Please type your name";
    } else {
        if (genderEl === null) {
            answerBoxText =  "Please select gender.";
        } else {
            if (genderEl.value === 'M') {
                randomName = getRandom(male);
            } else {
                randomName = getRandom(female);
            }
            answerBoxText = firstNameInputValue + " your match is " + randomName;
        }
    }

    answerBoxEl.innerHTML =  answerBoxText;
}
