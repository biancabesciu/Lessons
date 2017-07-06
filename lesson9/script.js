function readCookies() {
   return  Cookies.get('our_name')
}

function saveName () {
    const name = document.getElementById('user-name').value;
    Cookies.set('our_name', name);
}

const button = document.getElementById('save-name');
button.addEventListener('click', saveName);

if(readCookies()) {
    const h1 = document.getElementById('greeting-text');
    const form = document.getElementById('cookie-prompt');

    form.style.display = 'none';

    h1.innerHTML = 'Greetings, ' + readCookies();
} else {
    const greeting = document.getElementById('greeting');
    greeting.style.display = 'none';
}

