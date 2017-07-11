// Donation page form validation ---------------------------------------->

//Donation radio buttons
//Validate radio buttons amount
function validateRadio() {
    const radioChecked = document.querySelector('input[name="amount"]:checked');

    if (radioChecked) {

        //hide error prompt
        document.getElementById('radio-error').style.display = "none";
        return true;
    } else {
        //show error prompt
        document.getElementById('radio-error').style.display = "block";
        return false;
    }
}

//Validate radio buttons switch
function validateSwitch () {
    const radioChecked = document.querySelector('input[name="amount"]:checked');
    const radioOneTime = document.getElementById('one-time');
    const radioMonthly = document.getElementById('monthly');

    if (document.querySelector('input[id="one-time"]:checked')) {
        document.getElementById('radio-answer').innerHTML = "You chose to donate " + radioChecked.value + " € " + radioOneTime.value;
    } else {
        document.getElementById('radio-answer').innerHTML = "You chose to donate " + radioChecked.value + " € " + radioMonthly.value;
    }
}

//Personal details
// Validating name fields
function validateName(field) {

    // validation rule
    let re = /[A-Za-z -']$/;

    if (re.test(document.getElementById(field).value)) {

        // if true change the box background to green
        document.getElementById(field).style.background = '#ccffcc';

        //hide error prompt
        document.getElementById(field + '-error').style.display = "none";
        return true;
    } else {

        // if false change the box background to red
        document.getElementById(field).style.background = '#e35152';

        //show error prompt
        document.getElementById(field + '-error').style.display = "block";
        return false;
    }
}

// Validate email
function validateEmail(email){

    // set of rules for the input field
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email)){

        // if true change the box background to green
        document.getElementById('email').style.background ='#ccffcc';

        //hide error prompt
        document.getElementById('email-error').style.display = "none";
        return true;
    }else{

        // if false change the box background to red
        document.getElementById('email').style.background ='#e35152';
        return false;
    }
}

// Validate Selected Countries
function validateSelect(x){

    if(document.getElementById(x).selectedIndex !== 0){

        // if true change the box background to green
        document.getElementById(x).style.background ='#ccffcc';

        //hide error prompt
        document.getElementById(x + '-error').style.display = "none";
        return true;
    }else{

        // if false change the box background to red
        document.getElementById(x).style.background ='#e35152';
        return false;
    }
}


//Validating entire form for valid data
function validateForm() {

    //Set error catcher
    let error = 0;
    let answer = 0;

    // Validate radio buttons
    if(!validateRadio(document.querySelector('input[name="amount"]'))) {
        document.getElementById('radio-error').style.display = "block";
        error++;
    }

    // Check name
    if(!validateName('name')){
        document.getElementById('name-error').style.display = "block";
        error++;
    }

    // Validate email
    if(!validateEmail(document.getElementById('email').value)){
        document.getElementById('email-error').style.display = "block";
        error++;
    }

    //Validate select box
    if(!validateSelect('country')) {
        document.getElementById('country-error').style.display = "block";
        error++;
    }

    // Don't submit form if there are errors
    if(error > 0){
        return false;
    }
}

window.onload = function() {

    document.getElementsByTagName('form')[0].onsubmit = function() {
        return validateForm();
    };
};