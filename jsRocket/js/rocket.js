//define let
let timer = null;
let countDownNumber = 10;

//when clicked the function will run
function changeState(state) {
    //change body class with the state
    document.body.className = 'body-state' + state;

    //stop timer if we want to abort
    clearInterval(timer);

    //what ever happens it must be 10
    countDownNumber = 10;
    document.getElementById('countdown').innerHTML = countDownNumber;

    //if we are in state 2, start countdown
    if (state === 2) {

        //create timer with a set interval
        // runs the function every 500ms
        timer = setInterval(function () {
            //1 less next time it stats counting
            countDownNumber = countDownNumber - 1;

            //read the element by id and write in html the counted number
            document.getElementById('countdown').innerHTML = countDownNumber;

            //number is <= 0, go to state 3, Lift off
            if (countDownNumber <= 0) {
                changeState(3);
            }
        }, 500);

    // if state 3, see if it's a success or a fail
    } else if (state === 3) {

        //create a timer
        // set to run the function in 2s
        let success = setTimeout(function ()
        {
           // create a random number, round it up and multiply it by 10
           // will get a random number between 0 - 10
           let randomNumber = Math.round(Math.random()*10);

           //log in the console the random number
           console.log('randomNumber:',randomNumber);

            // show well done message
            if (randomNumber > 3)
            {
                changeState(4);

            // show oh no message
            } else {
                changeState(5);
            }
        }, 2000)
    }
}

