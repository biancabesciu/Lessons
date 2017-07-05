//User challenge score
let user = "Bianca";
let score = 0;
score ++;

document.getElementById('result').innerText = user + ' your score is ' + score + ' points';


//Name formatter
let name = "bIanca beSciu";
let split = name.split(" ");
let name1 = split[0];
let name2 = split[1];
let formettedName1 = name1.slice(0,1).toUpperCase() + name1.slice(1).toLowerCase();
let formettedName2 = name2.slice(0,1).toUpperCase() + name2.slice(1).toLowerCase();
let formattedFullName = formettedName1 + " " + formettedName2;

document.write(formattedFullName);

//Functions
let scores = 0;
let lives = 10;
let gameOver = false;

function lifeLost() {
    scores = 0;
    lives--;
    gameOver = true;
    document.write("<h2>Game over, you have " + lives + " lives left</h2>")
}
lifeLost();
lifeLost();

//
// //Random number
// let roundedNumber = Math.floor(Math.random() * 100) + 1;
//
// function getRandomNumber() {
//     document.write(roundedNumber);
// }
// getRandomNumber();


//Dates
// let showDate = new Date();
// document.write(showDate);

// let date = new Date();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let year = date.getFullYear();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
//
// document.write("Today's date is: <br> " +
//     "Date: " + dayOfWeek + "<br>" +
//     "Month: " + month + "<br>" +
//     "Year: " + year);

// let setDate = new Date();
// setDate.setMonth(7);
// setDate.setFullYear(2017);
//
// document.write(setDate);

// //If statements
// let loggedIn = true;
// let User = "Bianca";
//
// if (loggedIn) {
//     document.write("Welcome " + User);
// }

// //Else statements
//  let speedLimit = 70;
// let yourSpeed = 80;
//
// if (yourSpeed < speedLimit) {
//     document.write("Thank you, for driving safely!");
// } else if (yourSpeed > speedLimit) {
//     document.write("Please, slow down!");
// } else {
//     document.write("Careful, you are driving at speed limit!");
// }

//Age checker
let minimumAge = 18;
let currentAge = 18;

if (currentAge < minimumAge) {
    document.write('Please, come back when you are 18')
} else if (currentAge >= 18 && currentAge <= 25) {
    document.write("Please, provide ID")
} else {
    document.write('You can enter!')
}




































